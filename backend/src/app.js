
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const fs = require("fs");
const pool = require("./db");
const membershipRoutes = require("./routes/membership");
const paymentRoutes = require("./routes/payments");
const { uploadDir } = require("./middleware/uploads");

const app = express();
const PORT = Number(process.env.PORT || 5000);

if (!process.env.DB_PASSWORD || !process.env.DB_NAME) {
  throw new Error("Configure DB_PASSWORD and DB_NAME in backend/.env");
}

if (
  process.env.NODE_ENV === "production" &&
  (!process.env.FRONTEND_ORIGIN ||
    process.env.FRONTEND_ORIGIN.includes("localhost"))
) {
  throw new Error("Set FRONTEND_ORIGIN to your production website URL.");
}

fs.mkdirSync(uploadDir, { recursive: true });

app.disable("x-powered-by");
app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "100kb" }));

app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);

app.get("/api/health", async (_req, res) => {
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.ping();

    res.json({
      status: "ok",
      api: "TINYA Membership API",
      database: "connected",
    });
  } catch (error) {
    console.error("Health check failed:", error.message);

    res.status(503).json({
      status: "error",
      message: "Service or database unavailable.",
    });
  } finally {
    if (connection) connection.release();
  }
});

// Register API routes before the error handler.
app.use("/api/membership", membershipRoutes);
app.use("/api/payments", paymentRoutes);

// Central error handler must come after all routes.
app.use((err, _req, res, _next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      message: "A file exceeds the configured upload size limit.",
    });
  }

  if (
    err.code === "LIMIT_FILE_COUNT" ||
    err.code === "LIMIT_UNEXPECTED_FILE"
  ) {
    return res.status(400).json({
      message: "Too many files or an unexpected upload field.",
    });
  }

  if (
    err.message?.startsWith("Invalid file type") ||
    err.message?.startsWith("Unexpected upload field")
  ) {
    return res.status(400).json({ message: err.message });
  }

  console.error("API error:", err.message);

  res.status(500).json({
    message: "An unexpected server error occurred.",
  });
});

async function start() {
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    connection = null;

    app.listen(PORT, () => {
      console.log(`TINYA API running at http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    if (connection) connection.release();

    console.error("Could not connect to MySQL:", error.message);
    process.exit(1);
  }
}

start();

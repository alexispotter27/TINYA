const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const uploadDir = path.resolve(
  process.env.UPLOAD_DIR || "./storage/private-uploads"
);

fs.mkdirSync(uploadDir, { recursive: true });

const maxFileSize =
  Number(process.env.MAX_FILE_SIZE_MB || 10) * 1024 * 1024;

const allowedTypes = {
  passportPhoto: {
    mimeTypes: ["image/jpeg", "image/png", "image/webp"],
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
  },
  identificationDocument: {
    mimeTypes: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
    extensions: [".pdf", ".jpg", ".jpeg", ".png", ".webp"],
  },
  cacDocument: {
    mimeTypes: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
    extensions: [".pdf", ".jpg", ".jpeg", ".png", ".webp"],
  },
  resume: {
    mimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    extensions: [".pdf", ".doc", ".docx"],
  },
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, uploadDir);
  },

  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    callback(null, `${crypto.randomUUID()}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: maxFileSize,
    files: 4,
    fields: 30,
    parts: 40,
  },

  fileFilter: (_req, file, callback) => {
    const rule = allowedTypes[file.fieldname];

    if (!rule) {
      return callback(
        new Error(`Unexpected upload field: ${file.fieldname}`)
      );
    }

    const extension = path.extname(file.originalname).toLowerCase();

    if (
      !rule.mimeTypes.includes(file.mimetype) ||
      !rule.extensions.includes(extension)
    ) {
      return callback(
        new Error(`Invalid file type for ${file.fieldname}`)
      );
    }

    callback(null, true);
  },
});

module.exports = { upload, uploadDir };
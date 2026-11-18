const express = require("express");
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const { z } = require("zod");
const pool = require("../db");
const { upload, uploadDir } = require("../middleware/uploads");

const router = express.Router();

const applicationSchema = z.object({
  category: z.enum([
    "individual",
    "student-youth",
    "professional",
    "institutional",
  ]),

  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z.enum(["male", "female", "prefer-not-to-say"]),

  state: z.string().trim().min(1).max(100),
  lga: z.string().trim().min(1).max(100),
  address: z.string().trim().min(1).max(500),

  organizationName: z.string().trim().max(255).optional().default(""),
  organizationType: z.string().trim().max(120).optional().default(""),
  organizationRegistered: z.enum(["yes", "no"]).optional().or(z.literal("")),

  occupation: z.string().trim().max(255).optional().default(""),
  institution: z.string().trim().max(255).optional().default(""),
  skillsExperience: z.string().trim().min(1).max(10000),
  areaOfInterest: z.string().trim().min(1).max(160),

  identificationType: z.string().trim().max(100).optional().default(""),
  agreeToPrivacy: z.enum(["true", "on", "1"]),
});

function removeUploadedFiles(files) {
  return Promise.all(
    Object.values(files || {})
      .flat()
      .map((file) => fs.unlink(file.path).catch(() => {}))
  );
}

function getStoredPath(file) {
  return file ? path.relative(uploadDir, file.path) : null;
}

router.post(
  "/applications",
  upload.fields([
    { name: "passportPhoto", maxCount: 1 },
    { name: "identificationDocument", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "cacDocument", maxCount: 1 },
  ]),
  async (req, res, next) => {
    let connection;

    try {
      const parsed = applicationSchema.safeParse(req.body);

      if (!parsed.success) {
        await removeUploadedFiles(req.files);
        return res.status(400).json({
          message: "Please check the application fields.",
          errors: parsed.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      const data = parsed.data;
      const files = req.files || {};

      const passportPhoto = files.passportPhoto?.[0];
      const identificationDocument =
        files.identificationDocument?.[0];
      const resume = files.resume?.[0];
      const cacDocument = files.cacDocument?.[0];

      if (!passportPhoto) {
        await removeUploadedFiles(req.files);
        return res.status(400).json({
          message: "A passport photograph is required.",
        });
      }

      if (data.category === "institutional") {
        if (
          !data.organizationName ||
          !data.organizationType ||
          !data.organizationRegistered
        ) {
          await removeUploadedFiles(req.files);
          return res.status(400).json({
            message: "Complete the organization information.",
          });
        }

        if (data.organizationRegistered === "yes" && !cacDocument) {
          await removeUploadedFiles(req.files);
          return res.status(400).json({
            message: "A CAC registration document is required.",
          });
        }
      }

      if (
        data.category === "student-youth" &&
        !data.institution
      ) {
        await removeUploadedFiles(req.files);
        return res.status(400).json({
          message: "School or educational institution is required.",
        });
      }

      if (
        ["individual", "professional"].includes(data.category) &&
        !data.occupation
      ) {
        await removeUploadedFiles(req.files);
        return res.status(400).json({
          message: "Occupation is required.",
        });
      }

      const dob = new Date(`${data.dateOfBirth}T00:00:00.000Z`);

      if (
        Number.isNaN(dob.getTime()) ||
        dob.toISOString().slice(0, 10) !== data.dateOfBirth ||
        data.dateOfBirth >= new Date().toISOString().slice(0, 10)
      ) {
        await removeUploadedFiles(req.files);
        return res.status(400).json({
          message: "Enter a valid date of birth.",
        });
      }

      const reference =
        `TINYA-${new Date().getUTCFullYear()}-` +
        crypto.randomBytes(5).toString("hex").toUpperCase();

      connection = await pool.getConnection();
      await connection.beginTransaction();

      const [result] = await connection.execute(
        `INSERT INTO membership_applications (
          application_reference,
          category,
          first_name,
          last_name,
          email,
          phone,
          date_of_birth,
          gender,
          state,
          lga,
          address,
          organization_name,
          organization_type,
          organization_registered,
          occupation,
          institution,
          skills_experience,
          area_of_interest,
          identification_type,
          passport_photo_path,
          identification_document_path,
          resume_path,
          cac_document_path,
          privacy_acknowledged,
          status
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, 1, 'pending_review'
        )`,
        [
          reference,
          data.category,
          data.firstName,
          data.lastName,
          data.email.toLowerCase(),
          data.phone,
          data.dateOfBirth,
          data.gender,
          data.state,
          data.lga,
          data.address,
          data.category === "institutional" ? data.organizationName : null,
          data.category === "institutional" ? data.organizationType : null,
          data.category === "institutional"
            ? data.organizationRegistered === "yes"
              ? 1
              : 0
            : null,
          data.occupation || null,
          data.institution || null,
          data.skillsExperience,
          data.areaOfInterest,
          data.identificationType || null,
          getStoredPath(passportPhoto),
          getStoredPath(identificationDocument),
          getStoredPath(resume),
          getStoredPath(cacDocument),
        ]
      );

      await connection.commit();

      return res.status(201).json({
        message: "Membership application received.",
        applicationReference: reference,
        status: "pending_review",
      });
    } catch (error) {
      if (connection) {
        await connection.rollback().catch(() => {});
      }

      await removeUploadedFiles(req.files);

      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          message: "A conflicting application record already exists.",
        });
      }

      return next(error);
    } finally {
      if (connection) connection.release();
    }
  }
);

module.exports = router;
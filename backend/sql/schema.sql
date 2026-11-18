CREATE DATABASE IF NOT EXISTS tinya_membership
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE tinya_membership;

CREATE TABLE IF NOT EXISTS membership_applications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  application_reference VARCHAR(40) NOT NULL UNIQUE,

  category ENUM(
    'individual',
    'student-youth',
    'professional',
    'institutional'
  ) NOT NULL,

  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(40) NOT NULL,

  state VARCHAR(100) NOT NULL,
  lga VARCHAR(100) NOT NULL,
  address VARCHAR(500) NOT NULL,

  organization_name VARCHAR(255) NULL,
  organization_type VARCHAR(120) NULL,
  organization_registered TINYINT(1) NULL,

  occupation VARCHAR(255) NULL,
  institution VARCHAR(255) NULL,
  skills_experience TEXT NOT NULL,
  area_of_interest VARCHAR(160) NOT NULL,

  identification_type VARCHAR(100) NULL,

  passport_photo_path VARCHAR(500) NOT NULL,
  identification_document_path VARCHAR(500) NULL,
  resume_path VARCHAR(500) NULL,
  cac_document_path VARCHAR(500) NULL,

  privacy_acknowledged TINYINT(1) NOT NULL DEFAULT 0,

  status ENUM(
    'pending_review',
    'under_review',
    'approved',
    'rejected'
  ) NOT NULL DEFAULT 'pending_review',

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  INDEX idx_applications_status (status),
  INDEX idx_applications_created_at (created_at),
  INDEX idx_applications_email (email)
);
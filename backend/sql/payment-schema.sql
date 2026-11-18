
USE tinya_membership;

ALTER TABLE membership_applications
  ADD COLUMN payment_status ENUM(
    'not_started',
    'pending',
    'successful',
    'failed'
  ) NOT NULL DEFAULT 'not_started',
  ADD COLUMN payment_amount DECIMAL(12,2) NULL,
  ADD COLUMN payment_currency CHAR(3) NULL,
  ADD COLUMN payment_reference VARCHAR(100) NULL,
  ADD COLUMN payment_verified_at DATETIME NULL,
  ADD COLUMN payment_email_sent_at DATETIME NULL;

CREATE TABLE IF NOT EXISTS membership_payments (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  application_id BIGINT UNSIGNED NOT NULL,
  tx_ref VARCHAR(100) NOT NULL UNIQUE,
  flutterwave_transaction_id VARCHAR(100) NULL,
  amount DECIMAL(12,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'NGN',
  status ENUM(
    'pending',
    'successful',
    'failed'
  ) NOT NULL DEFAULT 'pending',
  checkout_url TEXT NULL,
  verified_at DATETIME NULL,
  email_sent_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  UNIQUE KEY uq_flw_transaction_id (flutterwave_transaction_id),
  INDEX idx_membership_payment_application (application_id),

  CONSTRAINT fk_membership_payment_application
    FOREIGN KEY (application_id)
    REFERENCES membership_applications(id)
    ON DELETE RESTRICT
);

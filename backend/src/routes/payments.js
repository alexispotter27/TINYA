
const express = require("express");
const crypto = require("crypto");
const pool = require("../db");
const { sendPaymentConfirmation } = require("../services/email");

const router = express.Router();

const FEE = Number(process.env.MEMBERSHIP_FEE_NGN || 2500);
const CURRENCY = "NGN";

function paymentsEnabled() {
  return process.env.PAYMENTS_ENABLED === "true";
}

async function flutterwaveRequest(url, options = {}) {
  if (!process.env.FLW_SECRET_KEY) {
    throw new Error("Flutterwave secret key is not configured.");
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    signal: AbortSignal.timeout(15000),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Flutterwave API request failed:", response.status);
    throw new Error("Flutterwave could not process the request.");
  }

  return body;
}

async function getPayment(txRef) {
  const [rows] = await pool.execute(
    `SELECT p.*, a.application_reference, a.first_name,
            a.last_name, a.email
     FROM membership_payments p
     JOIN membership_applications a ON a.id = p.application_id
     WHERE p.tx_ref = ?
     LIMIT 1`,
    [txRef]
  );

  return rows[0] || null;
}

async function verifyWithFlutterwave(transactionId, payment) {
  const result = await flutterwaveRequest(
    `https://api.flutterwave.com/v3/transactions/${encodeURIComponent(
      transactionId
    )}/verify`
  );

  const tx = result.data;

  if (
    result.status !== "success" ||
    !tx ||
    String(tx.id) !== String(transactionId) ||
    tx.status !== "successful" ||
    tx.tx_ref !== payment.tx_ref ||
    tx.currency !== payment.currency ||
    Number(tx.amount) < Number(payment.amount)
  ) {
    return null;
  }

  return tx;
}

async function finalizePayment(transactionId, txRef) {
  const payment = await getPayment(txRef);

  if (!payment) {
    return { ok: false, reason: "Payment reference not found." };
  }

  const tx = await verifyWithFlutterwave(transactionId, payment);

  if (!tx) {
    return { ok: false, reason: "Payment is not verified as successful." };
  }

  const connection = await pool.getConnection();
  let newlyPaid = false;

  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute(
      `SELECT id, application_id, status
       FROM membership_payments
       WHERE tx_ref = ?
       FOR UPDATE`,
      [txRef]
    );

    const current = rows[0];

    if (!current) {
      await connection.rollback();
      return { ok: false, reason: "Payment record not found." };
    }

    if (current.status !== "successful") {
      await connection.execute(
        `UPDATE membership_payments
         SET status = 'successful',
             flutterwave_transaction_id = ?,
             verified_at = NOW()
         WHERE id = ?`,
        [String(tx.id), current.id]
      );

      await connection.execute(
        `UPDATE membership_applications
         SET payment_status = 'successful',
             payment_amount = ?,
             payment_currency = ?,
             payment_reference = ?,
             payment_verified_at = NOW()
         WHERE id = ?`,
        [
          Number(tx.amount),
          tx.currency,
          txRef,
          current.application_id,
        ]
      );

      newlyPaid = true;
    }

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }

  // Send the email only after the payment is committed as successful.
  // A database marker prevents normal repeated verification from resending it.
  const refreshed = await getPayment(txRef);

  if (refreshed && !refreshed.email_sent_at) {
    try {
      await sendPaymentConfirmation({
        email: refreshed.email,
        firstName: refreshed.first_name,
        reference: refreshed.application_reference,
        txRef: refreshed.tx_ref,
        amount: refreshed.amount,
        currency: refreshed.currency,
      });

      await pool.execute(
        `UPDATE membership_payments
         SET email_sent_at = NOW()
         WHERE tx_ref = ? AND email_sent_at IS NULL`,
        [txRef]
      );

      await pool.execute(
        `UPDATE membership_applications
         SET payment_email_sent_at = NOW()
         WHERE id = ? AND payment_email_sent_at IS NULL`,
        [refreshed.application_id]
      );
    } catch (error) {
      // Payment remains successful even if SMTP is temporarily unavailable.
      console.error("Payment confirmation email failed:", error.message);
    }
  }

  return {
    ok: true,
    alreadyPaid: !newlyPaid,
    applicationReference: refreshed.application_reference,
    txRef,
    amount: Number(tx.amount),
    currency: tx.currency,
  };
}

// Start a hosted checkout for an existing application.
router.post("/checkout", async (req, res, next) => {
  try {
    if (!paymentsEnabled()) {
      return res.status(503).json({
        message:
          "Online payment is temporarily disabled while TINYA completes payment configuration.",
      });
    }

    if (!Number.isFinite(FEE) || FEE <= 0) {
      return res.status(503).json({
        message: "The membership fee is not configured correctly.",
      });
    }

    const { applicationReference } = req.body || {};

    if (
      typeof applicationReference !== "string" ||
      !/^TINYA-\d{4}-[A-F0-9]+$/i.test(applicationReference)
    ) {
      return res.status(400).json({
        message: "A valid application reference is required.",
      });
    }

    const [applications] = await pool.execute(
      `SELECT id, application_reference, first_name, last_name,
              email, phone, payment_status
       FROM membership_applications
       WHERE application_reference = ?
       LIMIT 1`,
      [applicationReference]
    );

    const applicant = applications[0];

    if (!applicant) {
      return res.status(404).json({
        message: "Application not found.",
      });
    }

    if (applicant.payment_status === "successful") {
      return res.status(409).json({
        message: "This application has already been paid.",
      });
    }

    // Create a fresh unique reference for every checkout attempt.
    const txRef = `TINYA-${crypto.randomUUID()}`;

    const redirectUrl = process.env.PAYMENT_REDIRECT_URL;

    if (!redirectUrl) {
      return res.status(503).json({
        message: "The payment return URL is not configured.",
      });
    }

    await pool.execute(
      `INSERT INTO membership_payments
        (application_id, tx_ref, amount, currency, status)
       VALUES (?, ?, ?, ?, 'pending')`,
      [applicant.id, txRef, FEE, CURRENCY]
    );

    await pool.execute(
      `UPDATE membership_applications
       SET payment_status = 'pending',
           payment_amount = ?,
           payment_currency = ?,
           payment_reference = ?
       WHERE id = ?`,
      [FEE, CURRENCY, txRef, applicant.id]
    );

    const result = await flutterwaveRequest(
      "https://api.flutterwave.com/v3/payments",
      {
        method: "POST",
        body: JSON.stringify({
          tx_ref: txRef,
          amount: String(FEE),
          currency: CURRENCY,
          redirect_url: redirectUrl,
          customer: {
            email: applicant.email,
            name: `${applicant.first_name} ${applicant.last_name}`.trim(),
            phonenumber: applicant.phone,
          },
          customizations: {
            title: "TINYA Membership",
            description: "Membership application fee",
          },
          meta: {
            application_reference: applicant.application_reference,
          },
        }),
      }
    );

    if (result.status !== "success" || !result.data?.link) {
      throw new Error("Flutterwave did not return a checkout link.");
    }

    await pool.execute(
      `UPDATE membership_payments SET checkout_url = ? WHERE tx_ref = ?`,
      [result.data.link, txRef]
    );

    return res.status(201).json({
      message: "Checkout created.",
      checkoutUrl: result.data.link,
      txRef,
      amount: FEE,
      currency: CURRENCY,
    });
  } catch (error) {
    next(error);
  }
});

// Verify a transaction after Flutterwave redirects the applicant back.
router.get("/verify", async (req, res, next) => {
  try {
    const transactionId = String(req.query.transaction_id || "");
    const txRef = String(req.query.tx_ref || "");

    if (!transactionId || !txRef) {
      return res.status(400).json({
        message: "Transaction ID and payment reference are required.",
      });
    }

    const result = await finalizePayment(transactionId, txRef);

    if (!result.ok) {
      return res.status(402).json({
        message: result.reason,
        status: "unverified",
      });
    }

    return res.json({
      message: "Payment verified.",
      status: "successful",
      applicationReference: result.applicationReference,
      txRef: result.txRef,
      amount: result.amount,
      currency: result.currency,
    });
  } catch (error) {
    next(error);
  }
});

// Flutterwave V3 webhook: configure the same secret hash in the dashboard.
router.post("/webhook", async (req, res, next) => {
  try {
    const expected = process.env.FLW_WEBHOOK_SECRET_HASH;
    const received = req.get("verif-hash");

    if (!expected || !received) {
      return res.status(401).send("Invalid webhook signature.");
    }

    const expectedBuffer = Buffer.from(expected);
    const receivedBuffer = Buffer.from(received);

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return res.status(401).send("Invalid webhook signature.");
    }

    const event = req.body;
    const tx = event?.data;

    if (event?.event !== "charge.completed" || !tx?.id || !tx?.tx_ref) {
      return res.status(200).send("Event ignored.");
    }

    // Re-query Flutterwave; do not trust the webhook body alone.
    const result = await finalizePayment(String(tx.id), String(tx.tx_ref));

    if (!result.ok) {
      console.warn("Webhook received but transaction not verified:", tx.tx_ref);
    }

    return res.status(200).send("Webhook received.");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

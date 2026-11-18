
const nodemailer = require("nodemailer");

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP is not configured.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

async function sendPaymentConfirmation({
  email,
  firstName,
  reference,
  txRef,
  amount,
  currency,
}) {
  const from = process.env.SMTP_FROM;

  if (!from) throw new Error("SMTP_FROM is not configured.");

  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to: email,
    subject: "TINYA membership application payment confirmed",
    text: [
      `Dear ${firstName},`,
      "",
      "Congratulations! TINYA has verified your membership application payment.",
      "",
      `Application reference: ${reference}`,
      `Payment reference: ${txRef}`,
      `Amount paid: ${currency} ${Number(amount).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      "",
      "Your application is awaiting membership review. Payment confirmation does not mean membership approval.",
      "",
      "Thank you,",
      "TINYA Membership Team",
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#243126;max-width:600px;margin:auto">
        <h2 style="color:#18723b">Payment confirmed</h2>
        <p>Dear ${escapeHtml(firstName)},</p>
        <p>Congratulations! TINYA has verified your membership application payment.</p>
        <p><strong>Application reference:</strong> ${escapeHtml(reference)}</p>
        <p><strong>Payment reference:</strong> ${escapeHtml(txRef)}</p>
        <p><strong>Amount paid:</strong> ${escapeHtml(currency)} ${Number(amount).toLocaleString("en-NG", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</p>
        <p>Your application is awaiting membership review. Payment confirmation does not mean membership approval.</p>
        <p>Thank you,<br/>TINYA Membership Team</p>
      </div>
    `,
  });
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

module.exports = { sendPaymentConfirmation };


export const MEMBERSHIP_CATEGORIES = [
  {
    value: "individual",
    label: "Individual Member",
    description:
      "For individuals interested in TINYA's mission and agricultural technology initiatives.",
  },
  {
    value: "student-youth",
    label: "Student / Youth Member",
    description:
      "For eligible students and young people interested in agriculture, technology, and entrepreneurship.",
  },
  {
    value: "professional",
    label: "Professional Member",
    description:
      "For professionals, researchers, agricultural practitioners, and entrepreneurs.",
  },
  {
    value: "institutional",
    label: "Institutional Member",
    description:
      "For organizations, institutions, businesses, and associations.",
  },
];

export const MEMBERSHIP_FEE_CONFIG = {
  amount: null,
  currency: "NGN",
  frequency: null,
  status: "pending-board-approval",
};

export const MEMBERSHIP_STATUS = {
  pendingPayment: "pending_payment",
  active: "active",
  paymentFailed: "payment_failed",
};

export const MEMBERSHIP_FEE_LABEL =
  "Membership fee to be determined by the Board of Trustees";

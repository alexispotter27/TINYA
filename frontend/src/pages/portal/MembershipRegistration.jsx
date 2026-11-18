
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MEMBERSHIP_CATEGORIES,
  MEMBERSHIP_FEE_LABEL,
} from "../../features/membership/membershipConstants";
import nigeriaLgas from "../../data/nigeriaLgas.json";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const MAX_DOCUMENT_SIZE = 10 * 1024 * 1024;

const INITIAL_DATA = {
  category: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  state: "",
  lga: "",
  address: "",
  organizationName: "",
  organizationType: "",
  organizationRegistered: "",
  occupation: "",
  institution: "",
  skillsExperience: "",
  areaOfInterest: "",
  identificationType: "",
  passportPhoto: null,
  identificationDocument: null,
  resume: null,
  cacDocument: null,
  agreeToPrivacy: false,
};

const INTERESTS = [
  "Smart Farming and Agricultural Technology",
  "Youth Agro Entrepreneurship",
  "Agribusiness Development",
  "Research and Innovation",
  "Climate-Smart Agriculture",
  "Greenhouse Farming",
  "Livestock and Aquaculture",
  "Agricultural Education and Training",
  "Community Development",
  "Partnerships and Advocacy",
  "Other",
];

const ORGANIZATION_TYPES = [
  "Non-Governmental Organization (NGO)",
  "Community-Based Organization (CBO)",
  "Cooperative Society",
  "Private Company",
  "Educational Institution",
  "Government Agency",
  "Agricultural Association",
  "Farm or Agribusiness",
  "Other",
];

const ID_TYPES = [
  "National Identification Number (NIN)",
  "Driver's Licence",
  "International Passport",
  "Voter's Card",
  "Other Government-Issued ID",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100";

const labelClass = "block text-sm font-semibold text-gray-700";

const EMPTY_MODAL = {
  status: "idle",
  message: "",
  applicationReference: "",
  txRef: "",
  amount: 2500,
  currency: "NGN",
};

function Field({ label, required, children, hint }) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

function TextInput({
  label,
  required = false,
  value,
  onChange,
  type = "text",
  placeholder = "",
  ...props
}) {
  return (
    <Field label={label} required={required}>
      <input
        {...props}
        type={type}
        required={required}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </Field>
  );
}

function SelectInput({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
}) {
  return (
    <Field label={label} required={required}>
      <select
        required={required}
        value={value ?? ""}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} ${
          disabled ? "cursor-not-allowed bg-gray-100" : ""
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          const item =
            typeof option === "string"
              ? { value: option, label: option }
              : option;

          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </Field>
  );
}

function TextArea({
  label,
  required = false,
  value,
  onChange,
  placeholder = "",
  rows = 4,
}) {
  return (
    <Field label={label} required={required}>
      <textarea
        required={required}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClass} resize-y`}
      />
    </Field>
  );
}

function UploadField({
  label,
  required = false,
  file,
  onChange,
  accept,
  hint,
}) {
  return (
    <Field label={label} required={required} hint={hint}>
      <input
        type="file"
        required={required && !file}
        accept={accept}
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
        className="mt-2 block w-full rounded-xl border border-gray-300 bg-white p-3 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-green-50 file:px-3 file:py-2 file:font-semibold file:text-green-800"
      />

      {file && (
        <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-gray-50 p-3">
          <span className="break-all text-xs text-gray-700">
            {file.name} · {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="shrink-0 text-xs font-semibold text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </Field>
  );
}

function PaymentModal({ modal, onClose }) {
  if (modal.status === "idle") return null;

  const busy = [
    "saving",
    "preparing",
    "redirecting",
    "verifying",
  ].includes(modal.status);

  const success = modal.status === "success";
  const saved = modal.status === "saved";
  const error = modal.status === "error";

  const titles = {
    saving: "Saving your application",
    preparing: "Preparing your payment",
    redirecting: "Opening secure checkout",
    verifying: "Verifying your payment",
    success: "Congratulations!",
    saved: "Application saved",
    error: "Payment confirmation pending",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl">
        {busy && (
          <div
            className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-green-700"
            role="status"
            aria-label="Loading"
          />
        )}

        {success && (
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
            ✓
          </div>
        )}

        {saved && (
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl text-amber-700">
            !
          </div>
        )}

        {error && (
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-700">
            !
          </div>
        )}

        <h2
          id="payment-modal-title"
          className="text-2xl font-bold text-gray-900"
        >
          {titles[modal.status] || "Membership application"}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {modal.message}
        </p>

        {success && (
          <div className="mt-5 rounded-xl bg-green-50 p-4 text-left text-sm">
            <p className="font-semibold text-gray-900">
              Application reference
            </p>
            <p className="mt-1 break-all text-green-800">
              {modal.applicationReference}
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              Payment reference
            </p>
            <p className="mt-1 break-all text-green-800">
              {modal.txRef}
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              Verified amount
            </p>
            <p className="mt-1 text-green-800">
              {modal.currency}{" "}
              {Number(modal.amount).toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        )}

        {modal.applicationReference && !success && (
          <p className="mt-4 break-all text-xs text-gray-500">
            Application reference: {modal.applicationReference}
          </p>
        )}

        {!busy && (
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            {success ? "Continue to TINYA Portal" : "Close"}
          </button>
        )}

        {error && (
          <p className="mt-3 text-xs leading-5 text-gray-500">
            If you were charged, do not pay again immediately. Keep your
            payment reference and contact TINYA while the transaction is
            checked.
          </p>
        )}
      </div>
    </div>
  );
}

export default function MembershipRegistration() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [paymentModal, setPaymentModal] = useState(EMPTY_MODAL);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const states = Object.keys(nigeriaLgas).sort();

  const availableLgas = formData.state
    ? nigeriaLgas[formData.state] ?? []
    : [];

  const category = MEMBERSHIP_CATEGORIES.find(
    (item) => item.value === formData.category
  );

  const isInstitutional = formData.category === "institutional";

  const isRegisteredOrganization =
    isInstitutional && formData.organizationRegistered === "yes";

  // Verify Flutterwave's redirect using the backend, never the browser alone.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionId = params.get("transaction_id");
    const txRef = params.get("tx_ref");

    if (!transactionId || !txRef) return;

    let cancelled = false;

    async function verifyReturnedPayment() {
      setIsVerifying(true);

      setPaymentModal({
        ...EMPTY_MODAL,
        status: "verifying",
        message:
          "Please wait while we securely verify your payment with Flutterwave.",
        txRef,
      });

      try {
        const query = new URLSearchParams({
          transaction_id: transactionId,
          tx_ref: txRef,
        });

        const response = await fetch(
          `${API_BASE}/payments/verify?${query.toString()}`
        );

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Payment has not been confirmed. Please try checking again later."
          );
        }

        if (cancelled) return;

        setPaymentModal({
          status: "success",
          message:
            "Your payment has been verified successfully. Your membership application is awaiting review. A confirmation email will be sent to your registered email address.",
          applicationReference: result.applicationReference,
          txRef: result.txRef,
          amount: result.amount,
          currency: result.currency,
        });
      } catch (error) {
        if (cancelled) return;

        setPaymentModal({
          ...EMPTY_MODAL,
          status: "error",
          message:
            error.message ||
            "We could not confirm your payment. If you were charged, do not pay again until the transaction has been checked.",
          txRef,
        });
      } finally {
        if (!cancelled) setIsVerifying(false);

        // Remove transaction details from the visible URL.
        if (!cancelled) {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
      }
    }

    verifyReturnedPayment();

    return () => {
      cancelled = true;
    };
  }, []);

  function updateField(name, value) {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "state" ? { lga: "" } : {}),
    }));

    setErrors((previous) => ({ ...previous, [name]: "" }));
    setNotice("");
  }

  function updateFile(name, file) {
    setNotice("");

    if (!file) {
      updateField(name, null);
      return;
    }

    const imageTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const documentTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const resumeTypes = [
      ...documentTypes,
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedTypes =
      name === "passportPhoto"
        ? imageTypes
        : name === "resume"
          ? resumeTypes
          : documentTypes;

    const maxSize =
      name === "passportPhoto"
        ? MAX_PHOTO_SIZE
        : MAX_DOCUMENT_SIZE;

    if (!allowedTypes.includes(file.type)) {
      setErrors((previous) => ({
        ...previous,
        [name]: "This file type is not supported.",
      }));
      return;
    }

    if (file.size > maxSize) {
      setErrors((previous) => ({
        ...previous,
        [name]: `The file must not exceed ${
          maxSize / (1024 * 1024)
        } MB.`,
      }));
      return;
    }

    setErrors((previous) => ({ ...previous, [name]: "" }));

    setFormData((previous) => ({
      ...previous,
      [name]: file,
    }));
  }

  function validateStep(currentStep) {
    const nextErrors = {};

    if (currentStep === 0 && !formData.category) {
      nextErrors.category = "Please select a membership category.";
    }

    if (currentStep === 1) {
      const requiredFields = [
        ["firstName", "First name"],
        ["lastName", "Last name"],
        ["email", "Email address"],
        ["phone", "Phone number"],
        ["dateOfBirth", "Date of birth"],
        ["gender", "Gender"],
        ["state", "State"],
        ["lga", "Local Government Area"],
        ["address", "Residential or office address"],
      ];

      requiredFields.forEach(([field, label]) => {
        if (!String(formData[field] ?? "").trim()) {
          nextErrors[field] = `${label} is required.`;
        }
      });

      if (
        formData.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        nextErrors.email = "Enter a valid email address.";
      }

      if (
        formData.dateOfBirth &&
        formData.dateOfBirth >=
          new Date().toISOString().slice(0, 10)
      ) {
        nextErrors.dateOfBirth = "Enter a valid date of birth.";
      }

      if (isInstitutional) {
        if (!formData.organizationName.trim()) {
          nextErrors.organizationName =
            "Organization name is required.";
        }

        if (!formData.organizationType) {
          nextErrors.organizationType =
            "Select an organization type.";
        }

        if (!formData.organizationRegistered) {
          nextErrors.organizationRegistered =
            "Please indicate whether the organization is registered.";
        }
      }
    }

    if (currentStep === 2) {
      if (
        formData.category === "student-youth" &&
        !formData.institution.trim()
      ) {
        nextErrors.institution =
          "School or educational institution is required.";
      }

      if (
        ["individual", "professional"].includes(formData.category) &&
        !formData.occupation.trim()
      ) {
        nextErrors.occupation = "Occupation is required.";
      }

      if (!formData.skillsExperience.trim()) {
        nextErrors.skillsExperience =
          "Please describe your skills and experience.";
      }

      if (!formData.areaOfInterest) {
        nextErrors.areaOfInterest =
          "Select your primary area of interest.";
      }

      if (!formData.passportPhoto) {
        nextErrors.passportPhoto =
          "A passport photograph is required.";
      }

      if (isRegisteredOrganization && !formData.cacDocument) {
        nextErrors.cacDocument =
          "Upload your CAC registration certificate.";
      }
    }

    if (currentStep === 3 && !formData.agreeToPrivacy) {
      nextErrors.agreeToPrivacy =
        "Please acknowledge the privacy notice to continue.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice("Please correct the highlighted fields before continuing.");
      return false;
    }

    setNotice("");
    return true;
  }

  function nextStep() {
    if (validateStep(step)) {
      setStep((previous) => Math.min(previous + 1, 3));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function previousStep() {
    setStep((previous) => Math.max(previous - 1, 0));
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderError(name) {
    return errors[name] ? (
      <p className="mt-1 text-xs text-red-600">{errors[name]}</p>
    ) : null;
  }

  function renderTextInput(name, props) {
    return (
      <>
        <TextInput
          {...props}
          value={formData[name]}
          onChange={(value) => updateField(name, value)}
        />
        {renderError(name)}
      </>
    );
  }

  function renderSelect(name, props) {
    return (
      <>
        <SelectInput
          {...props}
          value={formData[name]}
          onChange={(value) => updateField(name, value)}
        />
        {renderError(name)}
      </>
    );
  }

  function renderTextarea(name, props) {
    return (
      <>
        <TextArea
          {...props}
          value={formData[name]}
          onChange={(value) => updateField(name, value)}
        />
        {renderError(name)}
      </>
    );
  }

  function renderUpload(name, props) {
    return (
      <>
        <UploadField
          {...props}
          file={formData[name]}
          onChange={(file) => updateFile(name, file)}
        />
        {renderError(name)}
      </>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting || isVerifying) return;
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    setPaymentModal({
      ...EMPTY_MODAL,
      status: "saving",
      message: "Saving your membership application securely...",
    });

    try {
      const payload = new FormData();

      const fields = [
        "category",
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "gender",
        "state",
        "lga",
        "address",
        "organizationName",
        "organizationType",
        "organizationRegistered",
        "occupation",
        "institution",
        "skillsExperience",
        "areaOfInterest",
        "identificationType",
      ];

      fields.forEach((field) => {
        const value = formData[field];

        if (value !== undefined && value !== null) {
          payload.append(field, String(value));
        }
      });

      payload.append("agreeToPrivacy", String(formData.agreeToPrivacy));

      [
        "passportPhoto",
        "identificationDocument",
        "resume",
        "cacDocument",
      ].forEach((field) => {
        if (formData[field]) {
          payload.append(field, formData[field]);
        }
      });

      // First, save the membership application.
      const applicationResponse = await fetch(
        `${API_BASE}/membership/applications`,
        {
          method: "POST",
          body: payload,
        }
      );

      const application = await applicationResponse
        .json()
        .catch(() => ({}));

      if (!applicationResponse.ok) {
        throw new Error(
          application.message ||
            "Your application could not be saved."
        );
      }

      const applicationReference =
        application.applicationReference;

      if (!applicationReference) {
        throw new Error(
          "The server saved the request but did not return an application reference. Contact TINYA before submitting again."
        );
      }

      setPaymentModal({
        ...EMPTY_MODAL,
        status: "preparing",
        message: "Application saved. Preparing secure payment...",
        applicationReference,
      });

      // Ask the backend to create a Flutterwave checkout.
      const checkoutResponse = await fetch(
        `${API_BASE}/payments/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ applicationReference }),
        }
      );

      const checkout = await checkoutResponse
        .json()
        .catch(() => ({}));

      if (!checkoutResponse.ok) {
        setPaymentModal({
          ...EMPTY_MODAL,
          status: "saved",
          message:
            checkout.message ||
            "Your application was saved, but online payment is not currently available. Please contact TINYA for next steps.",
          applicationReference,
        });

        return;
      }

      if (!checkout.checkoutUrl) {
        setPaymentModal({
          ...EMPTY_MODAL,
          status: "saved",
          message:
            "Your application was saved, but the payment checkout link was not returned. Contact TINYA before attempting payment again.",
          applicationReference,
          txRef: checkout.txRef || "",
        });

        return;
      }

      setPaymentModal({
        ...EMPTY_MODAL,
        status: "redirecting",
        message:
          "Redirecting you to Flutterwave's secure checkout...",
        applicationReference,
        txRef: checkout.txRef,
        amount: checkout.amount,
        currency: checkout.currency,
      });

      // Navigate to the hosted payment page.
      window.location.assign(checkout.checkoutUrl);
    } catch (error) {
      setPaymentModal({
        ...EMPTY_MODAL,
        status: "error",
        message:
          error.message ||
          "An unexpected error occurred. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function closePaymentModal() {
    const wasSuccessful = paymentModal.status === "success";

    setPaymentModal(EMPTY_MODAL);

    if (wasSuccessful) {
      window.location.assign("/portal");
    }
  }

  const steps = [
    "Membership Type",
    "Your Information",
    "Membership Details",
    "Review & Privacy",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <PaymentModal
        modal={paymentModal}
        onClose={closePaymentModal}
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            TINYA Membership
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Become a Member
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Join The Initiative for Nigerian Youths in AgroTech and support
            technology-driven agriculture, youth development, and agribusiness.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-4 gap-2">
          {steps.map((label, index) => (
            <div key={label}>
              <div
                className={`h-2 rounded-full ${
                  index <= step ? "bg-green-700" : "bg-gray-200"
                }`}
              />

              <p
                className={`mt-2 text-center text-[10px] font-medium sm:text-xs ${
                  index === step ? "text-green-800" : "text-gray-500"
                }`}
              >
                {index + 1}. {label}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
        >
          {notice && (
            <div
              role="status"
              className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              {notice}
            </div>
          )}

          {step === 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                Choose your membership category
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Select the category that best describes you or your organization.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {MEMBERSHIP_CATEGORIES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => updateField("category", item.value)}
                    className={`rounded-xl border p-5 text-left transition ${
                      formData.category === item.value
                        ? "border-green-700 bg-green-50 ring-2 ring-green-100"
                        : "border-gray-200 hover:border-green-400"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-bold text-gray-900">
                        {item.label}
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                          formData.category === item.value
                            ? "border-green-700 bg-green-700 text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.category === item.value ? "✓" : ""}
                      </span>
                    </span>

                    <span className="mt-3 block text-sm leading-6 text-gray-600">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>

              {renderError("category")}
            </section>
          )}

          {step === 1 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                Personal / Organization Information
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Fields marked with an asterisk (*) are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {renderTextInput("firstName", {
                  label: "First name",
                  required: true,
                })}

                {renderTextInput("lastName", {
                  label: "Last name",
                  required: true,
                })}

                {renderTextInput("email", {
                  label: "Email address",
                  type: "email",
                  required: true,
                })}

                {renderTextInput("phone", {
                  label: "Phone number",
                  type: "tel",
                  required: true,
                  placeholder: "+234...",
                })}

                {renderTextInput("dateOfBirth", {
                  label: "Date of birth",
                  type: "date",
                  required: true,
                  max: new Date().toISOString().slice(0, 10),
                })}

                {renderSelect("gender", {
                  label: "Gender",
                  required: true,
                  options: [
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    {
                      value: "prefer-not-to-say",
                      label: "Prefer not to say",
                    },
                  ],
                })}

                {renderSelect("state", {
                  label: "State",
                  required: true,
                  options: states,
                })}

                {renderSelect("lga", {
                  label: "Local Government Area",
                  required: true,
                  options: availableLgas,
                  disabled: !formData.state,
                  placeholder: formData.state
                    ? "Select your LGA"
                    : "Select a state first",
                })}

                <div className="sm:col-span-2">
                  {renderTextarea("address", {
                    label: "Residential or office address",
                    required: true,
                    rows: 2,
                  })}
                </div>

                {isInstitutional && (
                  <>
                    <div className="sm:col-span-2">
                      {renderTextInput("organizationName", {
                        label: "Organization name",
                        required: true,
                      })}
                    </div>

                    {renderSelect("organizationType", {
                      label: "Organization type",
                      required: true,
                      options: ORGANIZATION_TYPES,
                    })}

                    {renderSelect("organizationRegistered", {
                      label: "Is the organization legally registered?",
                      required: true,
                      options: [
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ],
                    })}
                  </>
                )}
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                Membership Details & Documents
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Tell us about your background and upload the required photograph.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {formData.category === "student-youth" &&
                  renderTextInput("institution", {
                    label: "School / educational institution",
                    required: true,
                  })}

                {["individual", "professional"].includes(formData.category) &&
                  renderTextInput("occupation", {
                    label: "Occupation / profession",
                    required: true,
                  })}

                <div className="sm:col-span-2">
                  {renderTextarea("skillsExperience", {
                    label: "Skills and experience",
                    required: true,
                    placeholder:
                      "Describe your skills, experience, qualifications, or involvement in agriculture, technology, business, or community development.",
                    rows: 5,
                  })}
                </div>

                <div className="sm:col-span-2">
                  {renderSelect("areaOfInterest", {
                    label: "Primary area of interest",
                    required: true,
                    options: INTERESTS,
                  })}
                </div>

                <div className="sm:col-span-2 rounded-xl border border-green-100 bg-green-50 p-4">
                  <h3 className="font-semibold text-green-900">
                    Required passport photograph
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-green-900">
                    Upload a recent, clear passport-style photograph of the
                    applicant or authorized organizational representative.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  {renderUpload("passportPhoto", {
                    label: "Passport photograph",
                    required: true,
                    accept: ".jpg,.jpeg,.png,.webp",
                    hint: "Required for every category. JPG, PNG or WebP; maximum 5 MB.",
                  })}
                </div>

                <div className="sm:col-span-2">
                  {renderSelect("identificationType", {
                    label: "Means of identification (optional)",
                    options: ID_TYPES,
                    placeholder: "Select ID type if uploading one",
                  })}
                </div>

                <div className="sm:col-span-2">
                  {renderUpload("identificationDocument", {
                    label: "Identification document",
                    accept: ".pdf,.jpg,.jpeg,.png,.webp",
                    hint: "Optional. PDF, JPG, PNG or WebP; maximum 10 MB.",
                  })}
                </div>

                <div className="sm:col-span-2">
                  {renderUpload("resume", {
                    label: "Resume / CV (optional)",
                    accept: ".pdf,.doc,.docx",
                    hint: "Optional. PDF, DOC or DOCX; maximum 10 MB.",
                  })}
                </div>

                {isRegisteredOrganization && (
                  <div className="sm:col-span-2">
                    <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h3 className="font-semibold text-amber-900">
                        CAC registration certificate required
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-amber-900">
                        Because your organization is legally registered,
                        upload the relevant Corporate Affairs Commission
                        registration document.
                      </p>
                    </div>

                    {renderUpload("cacDocument", {
                      label: "CAC certificate / registration document",
                      required: true,
                      accept: ".pdf,.jpg,.jpeg,.png,.webp",
                      hint: "Required for registered organizations. Maximum 10 MB.",
                    })}
                  </div>
                )}
              </div>
            </section>
          )}

          {step === 3 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                Review your application
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Review your details and acknowledge the privacy notice before
                continuing.
              </p>

              <div className="mt-6 rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900">Applicant details</h3>

                <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                  {[
                    ["Membership category", category?.label || "Not selected"],
                    [
                      "Full name",
                      `${formData.firstName} ${formData.lastName}`.trim(),
                    ],
                    ["Email", formData.email],
                    ["Phone", formData.phone],
                    ["Date of birth", formData.dateOfBirth],
                    ["Gender", formData.gender],
                    ["State", formData.state],
                    ["LGA", formData.lga],
                    ["Area of interest", formData.areaOfInterest],
                    [
                      "Organization",
                      isInstitutional
                        ? formData.organizationName
                        : "Not applicable",
                    ],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-gray-500">{label}</dt>
                      <dd className="mt-1 break-words font-semibold text-gray-900">
                        {value || "—"}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <h3 className="font-bold text-gray-900">
                    Selected documents
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>
                      Passport photograph:{" "}
                      <strong>
                        {formData.passportPhoto?.name || "Not uploaded"}
                      </strong>
                    </li>

                    <li>
                      Identification:{" "}
                      <strong>
                        {formData.identificationDocument?.name ||
                          "Not uploaded"}
                      </strong>
                    </li>

                    <li>
                      Resume / CV:{" "}
                      <strong>
                        {formData.resume?.name || "Not uploaded"}
                      </strong>
                    </li>

                    {isRegisteredOrganization && (
                      <li>
                        CAC document:{" "}
                        <strong>
                          {formData.cacDocument?.name || "Not uploaded"}
                        </strong>
                      </li>
                    )}
                  </ul>

                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    These are the files selected in your browser. Your
                    documents will be transmitted to TINYA when you submit.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="font-bold text-blue-950">
                  Privacy notice for membership applicants
                </h3>

                <div className="mt-3 space-y-3 text-sm leading-6 text-blue-950">
                  <p>
                    <strong>Information collected:</strong> TINYA may collect
                    your contact details, date of birth, location, membership
                    interests, skills, photograph and supporting documents
                    provided for membership processing.
                  </p>

                  <p>
                    <strong>Purpose:</strong> Information is intended for
                    membership registration, necessary eligibility checks,
                    administration, relevant communications and compliance
                    with applicable legal obligations.
                  </p>

                  <p>
                    <strong>Access and security:</strong> Access to personal
                    information and documents should be restricted to
                    authorized personnel. Documents should be transferred
                    securely and stored privately, not published publicly or
                    shared with unrelated parties.
                  </p>

                  <p>
                    <strong>Retention and rights:</strong> Information should
                    be kept only for an appropriate documented period and
                    securely deleted or anonymized when no longer required,
                    subject to applicable legal obligations. Applicants may
                    request access to or correction of their data through
                    TINYA's designated privacy contact.
                  </p>

                  <p>
                    <strong>Before launch:</strong> TINYA should publish its
                    approved privacy policy, designate a privacy contact and
                    establish lawful processing, retention and data-request
                    procedures under applicable Nigerian data protection
                    requirements.
                  </p>
                </div>
              </div>

              <label className="mt-5 flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <input
                  type="checkbox"
                  checked={formData.agreeToPrivacy}
                  onChange={(event) =>
                    updateField("agreeToPrivacy", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-green-700"
                />

                <span className="text-sm leading-6 text-gray-700">
                  I have read the privacy notice, understand how my information
                  is intended to be used for membership administration, and
                  confirm that the information I provided is accurate.
                  <span className="ml-1 text-red-600">*</span>
                </span>
              </label>

              {renderError("agreeToPrivacy")}

              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900">
                  Membership fee
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {MEMBERSHIP_FEE_LABEL}
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-800">
                  Configured fee: ₦2,500
                </p>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Checkout is available only when payments are enabled on the
                  backend. Do not pay outside TINYA's official payment process.
                </p>
              </div>
            </section>
          )}

          <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row">
            <div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="w-full rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
                >
                  Back
                </button>
              ) : (
                <Link
                  to="/portal"
                  className="inline-flex w-full justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
                >
                  Cancel
                </Link>
              )}
            </div>

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="w-full rounded-xl bg-green-700 px-7 py-3 text-sm font-bold text-white transition hover:bg-green-800 sm:w-auto"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || isVerifying}
                className="w-full rounded-xl bg-green-700 px-7 py-3 text-sm font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Application & Pay"}
              </button>
            )}
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need help?{" "}
          <Link
            to="/contact"
            className="font-semibold text-green-700 hover:underline"
          >
            Contact TINYA
          </Link>
        </p>
      </div>
    </div>
  );
}

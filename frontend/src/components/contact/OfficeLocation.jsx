import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import contactData from "../../data/contactData";

export default function OfficeLocation() {
  const mapQuery = encodeURIComponent(contactData.address);

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-[#A7D129]">
            Visit Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#1E5A3A] sm:text-4xl lg:text-5xl">
            TINYA National Secretariat
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl lg:grid lg:grid-cols-[0.7fr_1.3fr]">

          <div className="p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-[#1E5A3A]">
              National Secretariat
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <FaLocationDot className="mt-1 shrink-0 text-xl text-[#F4C21A]" />

                <p className="leading-7 text-gray-600">
                  {contactData.address}
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhone className="mt-1 shrink-0 text-xl text-[#F4C21A]" />

                <div className="text-gray-600">
                  {contactData.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 shrink-0 text-xl text-[#F4C21A]" />

                <div className="text-gray-600">
                  {contactData.emails.map((email) => (
                    <p key={email}>{email}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[420px]">
            <iframe
              title="TINYA National Secretariat Location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
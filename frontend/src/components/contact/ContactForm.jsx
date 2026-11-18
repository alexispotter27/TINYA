import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // API integration will replace this later.
    console.log("Contact form:", formData);

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          <div>
            <span className="font-semibold uppercase tracking-[0.2em] text-[#A7D129]">
              Send A Message
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1E5A3A] sm:text-4xl lg:text-5xl">
              We'd Love To Hear From You
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Send us a message regarding membership, volunteering,
              partnerships, programs, projects, donations or any general
              enquiry. Our team will respond as soon as possible.
            </p>

            <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-6">
              <p className="font-semibold text-[#1E5A3A]">
                Partnership enquiries
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Organizations interested in collaborating with TINYA can use
                this form and select Partnership from the subject field.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
            {submitted && (
              <div className="mb-6 rounded-xl bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                Thank you. Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                >
                  <option value="">Select a subject</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Membership">Membership</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Programs">Programs</option>
                  <option value="Projects">Projects</option>
                  <option value="Donation">Donation</option>
                  <option value="Media">Media / Press</option>
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1E5A3A] px-7 py-4 font-bold text-white transition hover:bg-[#16452d] sm:w-auto"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
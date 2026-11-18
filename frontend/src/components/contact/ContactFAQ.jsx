import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I become a member of TINYA?",
    answer:
      "You can become a member by completing our membership registration process. Membership is open to youths, farmers, agribusiness professionals, researchers, and supporters of agricultural development.",
  },
  {
    question: "How can I volunteer with TINYA?",
    answer:
      "TINYA welcomes volunteers across different programs and projects. You can volunteer in community outreach, training programs, events, media, technology, research, and advocacy initiatives.",
  },
  {
    question: "Does TINYA provide agricultural training?",
    answer:
      "Yes. TINYA organizes capacity-building programs, smart farming training, agribusiness development workshops, and youth empowerment initiatives across Nigeria.",
  },
  {
    question: "How can my organization partner with TINYA?",
    answer:
      "Government agencies, NGOs, development partners, financial institutions, educational institutions, and private organizations can collaborate with TINYA through strategic partnerships and joint programs.",
  },
  {
    question: "Can I support TINYA through donations?",
    answer:
      "Yes. Individuals, organizations, and corporate bodies can support TINYA through financial contributions, sponsorships, grants, equipment donations, and project funding.",
  },
  {
    question: "Which states does TINYA operate in?",
    answer:
      "TINYA has a national structure covering the six geopolitical zones of Nigeria, with coordinators across all states and the Federal Capital Territory (FCT).",
  },
  {
    question: "How do I participate in TINYA programs?",
    answer:
      "Program announcements, registration opportunities, and training schedules are published on our website and social media platforms.",
  },
  {
    question: "Does TINYA work with young farmers and agripreneurs?",
    answer:
      "Absolutely. Supporting youth farmers, agribusiness entrepreneurs, and agricultural innovators is one of our core priorities.",
  },
];

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-widest font-semibold text-[#A7D129]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1E5A3A]">
            Common Questions
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about membership,
            volunteering, partnerships, programs, donations and more.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-sm
                overflow-hidden
                border border-gray-100
              "
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  p-6
                "
              >
                <span className="font-semibold text-[#1E5A3A] text-lg">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`
                    transition-transform duration-300
                    ${
                      activeIndex === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
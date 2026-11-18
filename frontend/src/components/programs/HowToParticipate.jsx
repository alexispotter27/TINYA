import {
  FaUserGraduate,
  FaTractor,
  FaHandsHelping,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const participationOptions = [
  {
    number: "01",
    title: "Young People",
    subtitle: "Learn and Grow",
    description:
      "Connect with TINYA to explore agricultural learning, technology, entrepreneurship, and youth development opportunities.",
    icon: FaUserGraduate,
    benefits: [
      "Explore agricultural career pathways",
      "Develop entrepreneurial skills",
      "Discover opportunities to get involved",
    ],
  },
  {
    number: "02",
    title: "Farmers & Agripreneurs",
    subtitle: "Share Your Experience",
    description:
      "Connect with a youth-focused agricultural initiative and explore opportunities for knowledge sharing and collaboration.",
    icon: FaTractor,
    benefits: [
      "Share practical agricultural knowledge",
      "Explore collaborative initiatives",
      "Connect with other stakeholders",
    ],
  },
  {
    number: "03",
    title: "Volunteers",
    subtitle: "Make a Contribution",
    description:
      "Contribute your time, knowledge, or professional skills to initiatives that support youth and agricultural development.",
    icon: FaHandsHelping,
    benefits: [
      "Contribute relevant professional skills",
      "Support community engagement",
      "Help promote agricultural awareness",
    ],
  },
  {
    number: "04",
    title: "Organizations & Partners",
    subtitle: "Build Together",
    description:
      "Explore collaboration with TINYA on youth development, agricultural innovation, training, and community-focused initiatives.",
    icon: FaHandshake,
    benefits: [
      "Discuss potential partnerships",
      "Explore shared development goals",
      "Support youth-focused initiatives",
    ],
  },
];

export default function HowToParticipate() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            Get Involved
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            There Is a Place for You in Our Mission
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Whether you are a young person, farmer, volunteer, or organization,
            you can contact TINYA to explore ways to contribute to youth
            empowerment and agricultural development in Nigeria.
          </p>
        </div>

        {/* Participation cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {participationOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.number}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#A7D129]/70 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E5A3A] text-2xl text-white transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                    <Icon aria-hidden="true" />
                  </div>

                  <span className="text-3xl font-black text-gray-100 transition-colors group-hover:text-[#A7D129]/40">
                    {option.number}
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#1E5A3A]">
                  {option.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#123524]">
                  {option.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {option.description}
                </p>

                <div className="my-5 h-px bg-gray-100" />

                <ul className="flex-grow space-y-3">
                  {option.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm leading-6 text-gray-600"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-[#1E5A3A]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 border-t border-gray-100 pt-5 font-bold text-[#1E5A3A] transition-colors hover:text-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
                >
                  Contact Us
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Closing banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#123524] px-6 py-10 text-center sm:px-10 md:mt-16 md:py-14">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#A7D129]/10 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Let&apos;s Grow Something Meaningful Together
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Tell us about yourself, your organization, or the kind of
              collaboration you have in mind. Our team can discuss the next
              steps with you.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-7 py-3.5 font-bold text-[#123524] transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
            >
              Start a Conversation
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
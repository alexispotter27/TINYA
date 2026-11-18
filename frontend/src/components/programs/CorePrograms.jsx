import {
  FaSeedling,
  FaTractor,
  FaBriefcase,
  FaPeopleGroup,
  FaLightbulb,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    title: "Youth Agro Entrepreneurship Training",
    description:
      "Introduce young people to agricultural entrepreneurship, business planning, and opportunities across the agricultural value chain.",
    icon: FaBriefcase,
    category: "Entrepreneurship",
  },
  {
    number: "02",
    title: "Smart Farming & Technology",
    description:
      "Promote awareness and adoption of modern agricultural technologies and innovative farming practices.",
    icon: FaTractor,
    category: "Agricultural Technology",
  },
  {
    number: "03",
    title: "Agribusiness Skills Development",
    description:
      "Build practical business and agricultural skills that can help young people explore agribusiness opportunities.",
    icon: FaSeedling,
    category: "Skills Development",
  },
  {
    number: "04",
    title: "Rural Community Outreach",
    description:
      "Engage rural communities through agricultural education, awareness activities, and community-focused initiatives.",
    icon: FaPeopleGroup,
    category: "Community Development",
  },
  {
    number: "05",
    title: "Farm Innovation & Outreach",
    description:
      "Encourage practical learning, exposure to innovative farming methods, and knowledge sharing within agricultural communities.",
    icon: FaLightbulb,
    category: "Innovation",
  },
  {
    number: "06",
    title: "Youth Skills & Capacity Building",
    description:
      "Explore opportunities to strengthen young people's knowledge, confidence, and readiness to participate in the agricultural sector.",
    icon: FaGraduationCap,
    category: "Youth Development",
    proposed: true,
  },
];

export default function CorePrograms() {
  return (
    <section
      id="our-programs"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Our Core Program Areas
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Explore the areas through which TINYA seeks to promote youth
            participation, agricultural innovation, entrepreneurship, and
            community development.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#A7D129]/70 hover:shadow-xl sm:p-7"
              >
                <div className="absolute right-5 top-5 text-4xl font-black text-gray-100 transition-colors duration-300 group-hover:text-[#A7D129]/30">
                  {program.number}
                </div>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E5A3A] text-2xl text-white transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                  <Icon aria-hidden="true" />
                </div>

                <span className="mb-3 text-xs font-bold uppercase tracking-wider text-[#1E5A3A]">
                  {program.category}
                </span>

                <h3 className="text-xl font-bold leading-snug text-[#123524]">
                  {program.title}
                </h3>

                <p className="mt-4 flex-grow text-sm leading-7 text-gray-600 sm:text-base">
                  {program.description}
                </p>

                {program.proposed && (
                  <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
                    Proposed category — confirm with TINYA before publishing
                    as an official program.
                  </p>
                )}

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <Link
                    to="/contact"
                    aria-label={`Ask TINYA about ${program.title}`}
                    className="inline-flex items-center gap-2 font-bold text-[#1E5A3A] transition-colors hover:text-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
                  >
                    Learn More
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-[#123524] px-6 py-9 text-center sm:px-10 md:mt-16 md:py-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in Working With Us?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Contact TINYA to discuss program participation, partnerships,
            volunteering, or opportunities to support youth in agriculture.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
          >
            Contact TINYA
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
import {
  FaUsers,
  FaSeedling,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const impactAreas = [
  {
    icon: FaUsers,
    title: "Youth Empowerment",
    description:
      "Encouraging young people to explore agricultural careers, develop skills, and pursue agribusiness opportunities.",
  },
  {
    icon: FaSeedling,
    title: "Sustainable Agriculture",
    description:
      "Promoting responsible farming practices and awareness of sustainable agricultural development.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation & Technology",
    description:
      "Supporting awareness and adoption of innovative approaches and technology in agriculture.",
  },
  {
    icon: FaHandshake,
    title: "Community Collaboration",
    description:
      "Encouraging collaboration among young people, farming communities, institutions, and partners.",
  },
];

export default function ProgramImpact() {
  return (
    <section className="relative overflow-hidden bg-[#123524] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#A7D129]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#A7D129]/30 bg-[#A7D129]/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#A7D129]">
            The Difference We Aim to Make
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Creating Opportunities Through{" "}
            <span className="text-[#A7D129]">Agriculture</span>
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            TINYA seeks to contribute to a future where young Nigerians can
            participate meaningfully in agriculture, embrace innovation, and
            explore sustainable livelihood opportunities.
          </p>
        </div>

        {/* Impact areas */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#A7D129]/50 hover:bg-white/[0.09] sm:p-7"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#A7D129]/15 text-2xl text-[#A7D129] transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {area.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#A7D129] transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 md:flex-row lg:mt-16">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Help Us Expand Our Reach
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Partner with TINYA, volunteer your skills, or contact us to
              explore ways to support youth and agricultural development.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
          >
            Get Involved
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
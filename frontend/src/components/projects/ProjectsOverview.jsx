import {
  FaSeedling,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: FaSeedling,
    number: "01",
    title: "Agricultural Development",
    description:
      "Explore initiatives that promote agricultural knowledge, sustainable farming practices, and opportunities across the agricultural value chain.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Youth & Community Empowerment",
    description:
      "Encourage youth participation and community engagement through agricultural education, skills development, and collaboration.",
  },
  {
    icon: FaLightbulb,
    number: "03",
    title: "Innovation & Technology",
    description:
      "Promote awareness of modern agricultural technologies and innovative approaches to farming and agribusiness.",
  },
];

export default function ProjectsOverview() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
              About Our Initiatives
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
              Ideas and Partnerships for Agricultural Progress
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              The Initiative for Nigerian Youths in AgroTech (TINYA) seeks
              to advance youth participation in agriculture through
              agricultural education, innovation, entrepreneurship, and
              community engagement.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              This page provides a framework for presenting TINYA&apos;s
              initiatives, including project objectives, implementation
              activities, progress, and documented outcomes as verified
              information becomes available.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#1E5A3A] px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
            >
              Discuss a Project
              <FaArrowRight />
            </Link>
          </div>

          {/* Image panel */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#A7D129]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/programs/projects-overview.png"
                alt="Young people exploring agricultural practices"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#A7D129]">
                  TINYA
                </p>
                <h3 className="mt-2 max-w-md text-2xl font-extrabold text-white sm:text-3xl">
                  Real Technology, Positive Impact and Real Value
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-16 border-t border-gray-100 pt-12 md:mt-20 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-[#123524] sm:text-3xl">
              Our Project Focus Areas
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Three interconnected areas that help organize the initiatives
              presented on this page.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A7D129]/70 hover:bg-white hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E5A3A] text-2xl text-white transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="text-3xl font-black text-gray-200">
                      {area.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#123524]">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
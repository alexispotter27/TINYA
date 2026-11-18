import {
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: FaLeaf,
    title: "Practical Agricultural Learning",
    description:
      "Encourage hands-on exposure to modern farming practices and agricultural innovation.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation and Technology",
    description:
      "Introduce young people to technology-driven approaches to agricultural development.",
  },
  {
    icon: FaUsers,
    title: "Youth Participation",
    description:
      "Create opportunities for young people to engage in agriculture and agribusiness.",
  },
];

export default function FeaturedProgram() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            <FaLeaf />
            Featured Focus Area
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Growing the Next Generation of Agricultural Innovators
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            TINYA promotes youth participation in agriculture through
            knowledge sharing, practical learning, innovation, and
            entrepreneurship.
          </p>
        </div>

        {/* Featured content */}
        <div className="grid overflow-hidden rounded-3xl bg-[#123524] shadow-xl lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[320px] sm:min-h-[430px] lg:min-h-[600px]">
            <img
              src="/images/featured-program.png"
              alt="Young people participating in agricultural training"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#A7D129]">
                Youth • Agriculture • Innovation
              </p>

              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Building Skills for Sustainable Agriculture
              </h3>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A7D129]">
              Our Approach
            </span>

            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Turning Agricultural Knowledge Into Opportunity
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Agriculture offers opportunities across production,
              technology, processing, distribution, and enterprise
              development. TINYA seeks to help young people explore these
              opportunities and develop the skills needed to participate.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A7D129]/15 text-xl text-[#A7D129]">
                      <Icon aria-hidden="true" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        {benefit.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-white/65">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
              >
                Explore Opportunities
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition duration-300 hover:border-[#A7D129] hover:text-[#A7D129] focus:outline-none focus:ring-2 focus:ring-[#A7D129]"
              >
                Partner With Us
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/50">
              This section describes TINYA&apos;s focus areas, not a
              claim that a specific training program is currently underway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
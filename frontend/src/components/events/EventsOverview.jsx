
import {
  FaGraduationCap,
  FaPeopleGroup,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const eventFocusAreas = [
  {
    icon: FaGraduationCap,
    title: "Workshops & Training",
    description:
      "Explore learning themes covering agricultural skills, agribusiness, and practical knowledge development.",
  },
  {
    icon: FaPeopleGroup,
    title: "Youth Engagement",
    description:
      "Discover opportunities for young people to exchange ideas, develop skills, and explore agriculture-related careers.",
  },
  {
    icon: FaLightbulb,
    title: "Technology & Innovation",
    description:
      "Learn about event themes involving smart farming, digital agriculture, and innovative agricultural practices.",
  },
  {
    icon: FaHandshake,
    title: "Community & Partnerships",
    description:
      "Explore collaboration opportunities involving communities, organisations, farmers, and agricultural stakeholders.",
  },
];

export default function EventsOverview() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Introduction */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F0F5E8] px-4 py-2 text-sm font-bold text-[#1E5A3A]">
              <FaPeopleGroup />
              About TINYA Events
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl">
              Bringing People Together Through Knowledge and Innovation
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Events provide opportunities for people to learn, exchange
              ideas, build connections, and explore solutions to agricultural
              challenges. TINYA's event focus areas reflect its interest in
              youth development, agricultural technology, and agribusiness.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              This page will showcase confirmed workshops, training sessions,
              outreach activities, conferences, and other events as their
              details become available.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#1E5A3A] px-6 py-3.5 font-bold text-white transition hover:bg-[#123524]"
            >
              Contact TINYA
              <FaArrowRight />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-[#A7D129]/30 sm:-bottom-5 sm:-left-5" />

            <img
              src="/images/contact1.png"
              alt="Participants taking part in a learning or community activity"
              loading="lazy"
              className="relative z-10 h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute -right-3 -top-3 z-20 hidden rounded-xl bg-[#A7D129] px-5 py-4 shadow-lg sm:block">
              <p className="text-sm font-extrabold text-[#123524]">
                Learn. Connect. Grow.
              </p>
            </div>
          </div>
        </div>

        {/* Event focus areas */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-[#123524] sm:text-3xl">
              Explore Our Event Focus Areas
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Discover the types of activities and learning experiences this
              events platform is designed to showcase.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventFocusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1E5A3A]/30 hover:shadow-xl sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F5E8] text-2xl text-[#1E5A3A] transition group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                    <Icon />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#123524]">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {area.description}
                  </p>

                  <a
                    href="#upcoming-events"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1E5A3A] transition hover:text-[#123524]"
                  >
                    Explore events
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

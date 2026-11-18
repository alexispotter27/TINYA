import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ongoingProjects = [
  {
    id: 1,
    title: "Youth Agro Entrepreneurship Initiative",
    category: "Youth Development",
    description:
      "A sample project concept focused on introducing young people to agricultural entrepreneurship, business planning, and agribusiness opportunities.",
    image: "/images/projects/project1.png",
    location: "Nigeria",
    period: "To be confirmed",
  },
  {
    id: 2,
    title: "Smart Farming & Greenhouse Learning",
    category: "Agricultural Technology",
    description:
      "A sample initiative focused on greenhouse farming, modern crop production techniques, and awareness of agricultural technology.",
    image: "/images/projects/project2.png",
    location: "Nigeria",
    period: "To be confirmed",
  },
  {
    id: 3,
    title: "Rural Agricultural Awareness Initiative",
    category: "Community Outreach",
    description:
      "A sample project concept for agricultural awareness, community engagement, and knowledge sharing with young people in rural communities.",
    image: "/images/program4.png",
    location: "Nigeria",
    period: "To be confirmed",
  },
];

export default function OngoingProjects() {
  return (
    <section
      id="ongoing-projects"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
              Project Updates
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#123524] sm:text-4xl lg:text-5xl">
              Ongoing Projects
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Discover project areas focused on youth empowerment,
              agricultural innovation, and community development.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1E5A3A] px-5 py-3 font-bold text-[#1E5A3A] transition hover:bg-[#1E5A3A] hover:text-white"
          >
            Discuss a Project
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/60 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-[#A7D129] px-3 py-1.5 text-xs font-bold text-[#123524]">
                  Draft Example
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E5A3A]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-xl font-bold leading-snug text-[#123524]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-500">
                  <p className="flex items-start gap-2">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1E5A3A]" />
                    <span>{project.location}</span>
                  </p>

                  <p className="flex items-start gap-2">
                    <FaCalendarAlt className="mt-1 shrink-0 text-[#1E5A3A]" />
                    <span>Implementation period: {project.period}</span>
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#1E5A3A] hover:text-[#123524]"
                >
                  Enquire About Projects
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  FaCheckCircle,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const completedProjects = [
  {
    id: 1,
    title: "Youth Agricultural Skills Workshop",
    category: "Skills Development",
    description:
      "Sample record for an agricultural skills workshop covering farming practices, agricultural awareness, and opportunities for young people.",
    image: "/images/programs/agribusiness.png",
    location: "Location to be confirmed",
    completionDate: "To be confirmed",
    outcome: "Documented outcomes to be added after verification.",
  },
  {
    id: 2,
    title: "Community Agricultural Outreach",
    category: "Community Development",
    description:
      "Sample record for a community-focused initiative designed around agricultural education, youth engagement, and knowledge sharing.",
    image: "/images/programs/agricultural-training.png",
    location: "Location to be confirmed",
    completionDate: "To be confirmed",
    outcome: "Participation and outcomes to be added after verification.",
  },
  {
    id: 3,
    title: "Agribusiness Awareness Initiative",
    category: "Entrepreneurship",
    description:
      "Sample record for an initiative introducing young people to agribusiness opportunities, enterprise development, and agricultural value chains.",
    image: "/images/contact5.png",
    location: "Location to be confirmed",
    completionDate: "To be confirmed",
    outcome: "Verified achievements to be added when available.",
  },
];

export default function CompletedProjects() {
  return (
    <section
      id="completed-projects"
      className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            <FaCheckCircle />
            Project Archive
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Completed Projects
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            This section is designed to document completed initiatives,
            their objectives, locations, and verified results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project) => (
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

                <div className="mt-5 rounded-xl bg-[#A7D129]/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E5A3A]">
                    Project Outcome
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-500">
                  <p className="flex items-start gap-2">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1E5A3A]" />
                    <span>{project.location}</span>
                  </p>

                  <p className="flex items-start gap-2">
                    <FaCalendarCheck className="mt-1 shrink-0 text-[#1E5A3A]" />
                    <span>Completion: {project.completionDate}</span>
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#1E5A3A] hover:text-[#123524]"
                >
                  Contact TINYA
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
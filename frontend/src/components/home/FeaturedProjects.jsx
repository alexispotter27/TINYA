import SectionTitle from "../common/SectionTitle";
import projects from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Driving impact through innovative agricultural and technology-based initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-white
                rounded-xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                    project.status === "Ongoing"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-xl font-bold text-[#1E5A3A]">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {project.description}
                </p>

                <button
                  className="
                    mt-5
                    bg-[#F4C21A]
                    text-[#1E5A3A]
                    px-5
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-[#E0B118]
                    transition
                  "
                >
                  View Project
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
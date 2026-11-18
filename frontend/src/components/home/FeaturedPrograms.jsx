import SectionTitle from "../common/SectionTitle";
import programs from "../../data/programs";

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <SectionTitle
          title="Our Programs"
          subtitle="Empowering Nigerian youths through agriculture and technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program) => (
            <div
              key={program.id}
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
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#1E5A3A]">
                  {program.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {program.description}
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
                  Learn More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
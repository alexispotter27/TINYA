import SectionTitle from "../common/SectionTitle";
import testimonials from "../../data/testimonials";

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <SectionTitle
          title="Success Stories"
          subtitle="Real stories from beneficiaries whose lives have been transformed through our programs and initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              <h3 className="text-center mt-4 text-xl font-bold text-[#1E5A3A]">
                {person.name}
              </h3>

              <p className="text-center text-sm text-gray-500">
                {person.role}
              </p>

              <p className="mt-5 text-gray-600 italic text-center">
                "{person.story}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
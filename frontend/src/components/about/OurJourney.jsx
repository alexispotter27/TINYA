const timeline = [
  {
    year: "2021",
    title: "Foundation",
    description:
      "TINYA was established to empower Nigerian youths through agriculture and technology.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description:
      "Expanded operations across multiple states and strengthened organizational structure.",
  },
  {
    year: "2023",
    title: "Youth Training Programs",
    description:
      "Successfully trained young people in agribusiness and smart farming practices.",
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    description:
      "Built collaborations with government agencies, private organizations, and development partners.",
  },
  {
    year: "Today",
    title: "Growing Impact",
    description:
      "Continuing to empower youths, support farmers, and drive agricultural innovation nationwide.",
  },
];

export default function OurJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#A7D129] uppercase font-semibold tracking-wider">
            Our Journey
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1E5A3A]">
            Milestones & Growth
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Our journey reflects our commitment to transforming lives
            through innovation, agriculture, and youth empowerment.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#A7D129]"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`
                relative mb-12 flex
                ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"}
              `}
            >
              <div className="w-full md:w-5/12 bg-slate-50 rounded-2xl p-6 shadow-md">

                <span className="inline-block bg-[#1E5A3A] text-white px-4 py-2 rounded-full font-semibold">
                  {item.year}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#1E5A3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

              </div>

              <div
                className="
                  absolute
                  left-4
                  md:left-1/2
                  top-8
                  w-5
                  h-5
                  rounded-full
                  bg-[#A7D129]
                  border-4
                  border-white
                  -translate-x-1/2
                "
              ></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
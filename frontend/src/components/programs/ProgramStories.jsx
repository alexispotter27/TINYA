import { useState } from "react";
import { FaArrowRight, FaImages, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const activities = [
  {
    category: "Agricultural Training",
    title: "Youth Agricultural Learning",
    description:
      "Practical learning opportunities that introduce young people to agricultural methods, production, and farm management.",
    image: "/images/programs/agricultural-training.png",
    alt: "Young people learning about agricultural practices",
  },
  {
    category: "Smart Agriculture",
    title: "Greenhouse Inspection",
    description:
      "Exposure to greenhouse environments, crop monitoring, and controlled-environment farming practices.",
    image: "/images/programs/greenhouse-inspection.png",
    alt: "Young farmers inspecting crops inside a greenhouse",
  },
  {
    category: "Technology",
    title: "Smart Farming Innovation",
    description:
      "Exploring how agricultural technology and innovative tools can support modern farming practices.",
    image: "/images/programs/smart-farming.png",
    alt: "Agricultural technology being used in a farming environment",
  },
  {
    category: "Entrepreneurship",
    title: "Agribusiness Development",
    description:
      "Introducing young people to agricultural enterprise, business opportunities, and value-chain development.",
    image: "/images/programs/agribusiness.png",
    alt: "Young agricultural entrepreneurs discussing farming business",
  },
  {
    category: "Community Engagement",
    title: "Community Outreach",
    description:
      "Agricultural awareness and community-focused engagement designed around local needs and opportunities.",
    image: "/images/fproject3.png",
    alt: "Youth participating in an agricultural community activity",
  },
  {
    category: "Livestock Agriculture",
    title: "Livestock Farm Learning",
    description:
      "Exploring livestock management, animal husbandry, and responsible farm practices.",
    image: "/images/programs/livestock-training.png",
    alt: "Young people learning about livestock farming",
  },
];

export default function ProgramStories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(activities.map((activity) => activity.category)),
  ];

  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter(
          (activity) => activity.category === activeCategory,
        );

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            <FaImages />
            Agriculture in Focus
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Explore Our Areas of Focus
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Discover the agricultural activities and learning areas that
            align with TINYA&apos;s commitment to youth participation,
            innovation, entrepreneurship, and community development.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2 ${
                  isActive
                    ? "border-[#1E5A3A] bg-[#1E5A3A] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#1E5A3A] hover:text-[#1E5A3A]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Image gallery */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredActivities.map((activity) => (
            <article
              key={activity.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden sm:h-64">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/75 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-[#A7D129] px-3 py-1.5 text-xs font-bold text-[#123524]">
                  {activity.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <FaLeaf className="mt-1 shrink-0 text-lg text-[#1E5A3A]" />

                  <h3 className="text-xl font-bold leading-snug text-[#123524]">
                    {activity.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {activity.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#1E5A3A] transition-colors hover:text-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
                >
                  Enquire About Programs
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredActivities.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No activities found in this category.
          </p>
        )}

        {/* Footer note */}
        
      </div>
    </section>
  );
}
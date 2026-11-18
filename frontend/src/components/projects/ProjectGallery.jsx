import { useState } from "react";
import { FaImages, FaLeaf, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    title: "Greenhouse Inspection",
    category: "Smart Agriculture",
    image: "/images/programs/greenhouse-inspection.png",
    description:
      "Greenhouse farming and controlled-environment agriculture.",
  },
  {
    id: 2,
    title: "Agricultural Training",
    category: "Youth Development",
    image: "/images/programs/agricultural-training.png",
    description:
      "Agricultural learning and practical skills development.",
  },
  {
    id: 3,
    title: "Smart Farming Technology",
    category: "Smart Agriculture",
    image: "/images/programs/smart-farming.png",
    description:
      "Technology and innovation in modern farming.",
  },
  {
    id: 4,
    title: "Agribusiness Development",
    category: "Agribusiness",
    image: "/images/programs/agribusiness.png",
    description:
      "Agricultural entrepreneurship and value-chain opportunities.",
  },
  {
    id: 5,
    title: "Community Outreach",
    category: "Community Engagement",
    image: "/images/about-hero4.jpg",
    description:
      "Agricultural awareness and community engagement.",
  },
  {
    id: 6,
    title: "Livestock Farm Learning",
    category: "Youth Development",
    image: "/images/programs/livestock-training.png",
    description:
      "Livestock production and responsible farm management.",
  },
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  return (
    <section
      id="project-gallery"
      className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
            <FaImages />
            Project Gallery
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Agriculture, Innovation & Community
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Explore visual examples of the agricultural activities and
            development areas that align with TINYA&apos;s mission.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2 ${
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

        {/* Gallery grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/80 via-[#123524]/10 to-transparent opacity-90" />

                <span className="absolute left-4 top-4 rounded-full bg-[#A7D129] px-3 py-1.5 text-xs font-bold text-[#123524]">
                  {item.category}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No gallery items are available in this category.
          </p>
        )}

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#123524] p-7 sm:p-9 md:flex-row">
          <div>
            <div className="flex items-center justify-center gap-2 text-[#A7D129] md:justify-start">
              <FaLeaf />
              <span className="text-sm font-bold uppercase tracking-wider">
                Work With TINYA
              </span>
            </div>

            <h3 className="mt-3 text-center text-2xl font-extrabold text-white sm:text-3xl md:text-left">
              Have a Project in Mind?
            </h3>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
          >
            Contact TINYA
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
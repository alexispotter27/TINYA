
import {
  FaSeedling,
  FaMicrochip,
  FaChartLine,
  FaGraduationCap,
  FaPeopleGroup,
  FaArrowRight,
} from "react-icons/fa6";

const categories = [
  {
    name: "Smart Farming",
    description: "Agricultural technology, precision farming, and innovation.",
    icon: FaMicrochip,
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Youth Development",
    description: "Youth empowerment, skills, and agricultural opportunities.",
    icon: FaPeopleGroup,
    color: "bg-green-50 text-[#1E5A3A]",
  },
  {
    name: "Agribusiness",
    description: "Entrepreneurship, business planning, and market development.",
    icon: FaChartLine,
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Training & Education",
    description: "Practical learning, capacity building, and knowledge sharing.",
    icon: FaGraduationCap,
    color: "bg-purple-50 text-purple-700",
  },
  {
    name: "Community Development",
    description: "Community participation and sustainable agricultural growth.",
    icon: FaSeedling,
    color: "bg-lime-50 text-lime-800",
  },
];

export default function BlogCategories() {
  const selectCategory = (category) => {
    window.dispatchEvent(
      new CustomEvent("tinya-blog-category", {
        detail: category,
      })
    );

    document.getElementById("latest-articles")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="blog-categories"
      className="bg-[#F7FAF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E5A3A] shadow-sm">
            <FaSeedling />
            Browse by Topic
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#123524] sm:text-4xl">
            Explore Our Blog Categories
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Find insights and educational content across agricultural
            technology, youth development, agribusiness, and community growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => selectCategory(category.name)}
                className="group flex h-full w-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#1E5A3A]/30 hover:shadow-lg sm:p-7"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${category.color}`}
                >
                  <Icon />
                </span>

                <span className="flex-1">
                  <span className="block text-lg font-bold text-[#123524]">
                    {category.name}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-gray-600">
                    {category.description}
                  </span>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1E5A3A]">
                    Explore articles
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import {
  FaSeedling,
  FaMicrochip,
  FaChartLine,
  FaGraduationCap,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const featuredResources = [
  {
    icon: FaSeedling,
    number: "01",
    title: "Agricultural Guides",
    description:
      "Explore learning topics covering sustainable farming, crop production, soil care, and modern agricultural practices.",
    tag: "Practical Learning",
  },
  {
    icon: FaMicrochip,
    number: "02",
    title: "Smart Farming Technology",
    description:
      "Discover educational topics around agricultural technology, precision farming, digital tools, and farm innovation.",
    tag: "Technology",
  },
  {
    icon: FaChartLine,
    number: "03",
    title: "Agribusiness Development",
    description:
      "Learn about business planning, value chains, marketing, financial management, and agricultural entrepreneurship.",
    tag: "Entrepreneurship",
  },
  {
    icon: FaGraduationCap,
    number: "04",
    title: "Youth Skills & Training",
    description:
      "Find learning themes that support youth capacity building, practical skills development, and career opportunities in agriculture.",
    tag: "Youth Development",
  },
];

export default function FeaturedResources() {
  return (
    <section className="bg-[#F7FAF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E5A3A] shadow-sm">
              <FaBookOpen />
              Explore Learning Areas
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123524] sm:text-4xl">
              Discover Resources That Support Your Growth
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Explore key learning areas designed around agricultural
              innovation, youth development, and sustainable agribusiness.
              These categories describe resource topics, not confirmed
              publications.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#1E5A3A] px-5 py-3 font-semibold text-white transition hover:bg-[#123524]"
          >
            Request Information
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {featuredResources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="absolute right-5 top-4 text-4xl font-black text-green-900/[0.06]">
                  {resource.number}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E5A3A] text-2xl text-white transition group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                  <Icon />
                </div>

                <span className="mt-6 w-fit rounded-full bg-[#F0F5E8] px-3 py-1 text-xs font-semibold text-[#1E5A3A]">
                  {resource.tag}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#123524]">
                  {resource.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {resource.description}
                </p>

                <a
                  href="#resource-library"
                  className="mt-6 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-bold text-[#1E5A3A] transition hover:text-[#A7D129]"
                >
                  Explore Library
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

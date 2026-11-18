import {
  FaBookOpen,
  FaSeedling,
  FaLaptopCode,
  FaBriefcase,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const resourceCategories = [
  {
    icon: FaSeedling,
    number: "01",
    title: "Agricultural Guides",
    description:
      "Learning materials covering farming practices, crop production, livestock management, and sustainable agriculture.",
    category: "Agriculture",
  },
  {
    icon: FaLaptopCode,
    number: "02",
    title: "Smart Farming & Technology",
    description:
      "Educational resources about agricultural technology, digital tools, greenhouse farming, and modern farming methods.",
    category: "Technology",
  },
  {
    icon: FaBriefcase,
    number: "03",
    title: "Agribusiness & Entrepreneurship",
    description:
      "Resources on agricultural business planning, enterprise development, market opportunities, and value chains.",
    category: "Entrepreneurship",
  },
  {
    icon: FaBookOpen,
    number: "04",
    title: "Training & Learning Materials",
    description:
      "Reference materials that can support agricultural education, practical learning, and youth capacity development.",
    category: "Education",
  },
  {
    icon: FaFileAlt,
    number: "05",
    title: "Reports & Publications",
    description:
      "A place for approved organizational publications, project reports, research documents, and related resources.",
    category: "Publications",
  },
];

export default function ResourcesOverview() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
              <FaBookOpen />
              TINYA Resource Centre
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
              Knowledge That Supports Agricultural Growth
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              The TINYA Resource Centre is designed to make useful
              agricultural information, learning materials, and relevant
              publications easier to discover.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Explore resources related to agriculture, technology,
              entrepreneurship, youth development, and community
              engagement. Materials will be made available as approved
              documents are added to the library.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#1E5A3A] px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
            >
              Request Learning Materials
              <FaArrowRight />
            </Link>
          </div>

          {/* Image panel */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#A7D129]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/about-story.jpg"
                alt="Agricultural learning and knowledge sharing"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#A7D129]">
                  Learn • Innovate • Grow
                </p>

                <h3 className="mt-2 max-w-md text-2xl font-extrabold text-white sm:text-3xl">
                  Resources for the Next Generation of Agricultural Leaders
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 border-t border-gray-100 pt-12 md:mt-20 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-[#123524] sm:text-3xl">
              Explore Resource Categories
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Browse the subjects the resource library is intended to cover.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.number}
                  href="#resource-library"
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A7D129]/70 hover:bg-white hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E5A3A] text-2xl text-white transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="text-3xl font-black text-gray-200">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#123524]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#1E5A3A]">
                    Explore Category
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaFilePdf,
  FaDownload,
  FaFolderOpen,
  FaBookOpen,
} from "react-icons/fa";

const resources = [
  {
    id: 1,
    title: "Introduction to Smart Farming",
    category: "Smart Farming & Technology",
    description:
      "An example listing for learning materials on agricultural technology, digital tools, and modern farming practices.",
    format: "PDF",
    file: null,
  },
  {
    id: 2,
    title: "Agribusiness Planning Guide",
    category: "Agribusiness & Entrepreneurship",
    description:
      "An example listing for resources on business planning, market research, budgeting, and agricultural enterprise development.",
    format: "PDF",
    file: null,
  },
  {
    id: 3,
    title: "Youth Agricultural Skills Handbook",
    category: "Training & Learning Materials",
    description:
      "An example listing for educational materials supporting youth skills development and practical agricultural learning.",
    format: "PDF",
    file: null,
  },
  {
    id: 4,
    title: "Sustainable Agriculture Guide",
    category: "Agricultural Guides",
    description:
      "An example listing for guidance on soil care, efficient resource use, and environmentally responsible farming.",
    format: "PDF",
    file: null,
  },
  {
    id: 5,
    title: "Agricultural Development Report",
    category: "Reports & Publications",
    description:
      "An example listing for approved reports, research findings, and publications related to agricultural development.",
    format: "PDF",
    file: null,
  },
];

const categories = [
  "All Resources",
  "Agricultural Guides",
  "Smart Farming & Technology",
  "Agribusiness & Entrepreneurship",
  "Training & Learning Materials",
  "Reports & Publications",
];

export default function ResourceLibrary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      const matchesSearch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section
      id="resource-library"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#1E5A3A]">
            <FaBookOpen />
            TINYA Resource Centre
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123524] sm:text-4xl">
            Explore the Resource Library
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Search and explore learning materials, agricultural guides,
            technology resources, and publications. Official materials will
            become available as they are approved and uploaded.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search resources, topics, or categories..."
                aria-label="Search resources"
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/15"
              />
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <FaFilter className="text-[#1E5A3A]" />
              <span>
                {filteredResources.length}{" "}
                {filteredResources.length === 1 ? "result" : "results"}
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
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
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1E5A3A]/30 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl text-[#1E5A3A]">
                    <FaFilePdf />
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {/*Sample listing*/}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#1E5A3A]">
                  {resource.category}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-snug text-[#123524]">
                  {resource.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {resource.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-500">
                    {resource.format} document
                  </span>

                  {resource.file ? (
                    <a
                      href={resource.file}
                      download
                      className="inline-flex items-center gap-2 rounded-lg bg-[#1E5A3A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123524]"
                    >
                      <FaDownload />
                      Download
                    </a>
                  ) : (
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-100 px-3 py-2.5 text-xs font-semibold text-gray-500"
                      title="An approved document has not been uploaded yet"
                    >
                      <FaFolderOpen />
                      Not available
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-14 text-center">
            <FaFolderOpen className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-4 text-xl font-bold text-[#123524]">
              No matching resources found
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Resources");
              }}
              className="mt-5 rounded-lg bg-[#1E5A3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123524]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

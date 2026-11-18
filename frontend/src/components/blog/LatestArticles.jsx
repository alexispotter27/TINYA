
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowRight,
  FaCalendarAlt,
  FaFolderOpen,
  FaNewspaper,
} from "react-icons/fa";

 import blogArticles from "../../data/blogArticles"; 
/* import blogArticles from "../../data/blogArticles.js"; */

const categories = [
  "All Articles",
  "Smart Farming",
  "Youth Development",
  "Agribusiness",
  "Training & Education",
  "Community Development",
];

export default function LatestArticles() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  // Receive category selections from BlogCategories.jsx
  useEffect(() => {
    const handleCategoryChange = (event) => {
      const selectedCategory = event.detail;

      if (categories.includes(selectedCategory)) {
        setActiveCategory(selectedCategory);
        setSearch("");
      }
    };

    window.addEventListener("tinya-blog-category", handleCategoryChange);

    return () => {
      window.removeEventListener(
        "tinya-blog-category",
        handleCategoryChange
      );
    };
  }, []);

  // Search and filter shared article data
  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section
      id="latest-articles"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#1E5A3A]">
              <FaNewspaper />
              TINYA Insights
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#123524] sm:text-4xl">
              Latest Articles & Insights
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore insights covering agricultural innovation, youth
              empowerment, agribusiness, training, and community development.
            </p>
          </div>

          <p className="text-sm text-gray-500" aria-live="polite">
            Showing {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* Search and category filters */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <div className="relative">
            <FaSearch
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles or topics..."
              aria-label="Search articles"
              className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/15"
            />
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

        {/* Article cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                aria-label={`Read article: ${article.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#1E5A3A]/30 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1E5A3A] focus:ring-offset-2"
              >
                {/* Featured image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1E5A3A]">
                    {article.category}
                  </span>
                </div>

                {/* Article information */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <FaCalendarAlt
                      aria-hidden="true"
                      className="text-[#1E5A3A]"
                    />

                    <span>
                      {article.date || "Publication date pending"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#123524] transition group-hover:text-[#1E5A3A]">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    {article.status === "Draft" ? (
                      <span className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                        <FaFolderOpen aria-hidden="true" />
                        Draft
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-gray-500">
                        TINYA Insights
                      </span>
                    )}

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1E5A3A]">
                      Read Article
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* No search results */
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-14 text-center">
            <FaSearch
              aria-hidden="true"
              className="mx-auto text-4xl text-gray-300"
            />

            <h3 className="mt-4 text-xl font-bold text-[#123524]">
              No matching articles
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Try a different keyword or select another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Articles");
              }}
              className="mt-5 rounded-lg bg-[#1E5A3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123524]"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Contact link */}
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#1E5A3A] transition hover:text-[#123524]"
          >
            Have a story or idea to share?
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

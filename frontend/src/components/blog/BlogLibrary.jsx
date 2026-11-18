
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaLeaf,
  FaSearch,
  FaSeedling,
} from "react-icons/fa";

const categories = [
  "All",
  "Agriculture",
  "Technology",
  "Youth Development",
  "Agribusiness",
  "Community",
];

// Sample draft articles. Review and approve before publication.
const articles = [
  {
    id: "agricultural-technology",
    title: "How Agricultural Technology Can Support Young Farmers",
    category: "Technology",
    excerpt:
      "An introduction to precision farming, digital tools, and technology-assisted agricultural decisions.",
    image: "/images/blog/agricultural-technology.jpg",
    readTime: "5 min read",
  },
  {
    id: "agribusiness-planning",
    title: "Building an Agribusiness from the Ground Up",
    category: "Agribusiness",
    excerpt:
      "Explore market research, business planning, costs, and customer needs before launching an agricultural venture.",
    image: "/images/blog/agribusiness.jpg",
    readTime: "6 min read",
  },
  {
    id: "youth-in-agriculture",
    title: "Why Youth Participation Matters in Agriculture",
    category: "Youth Development",
    excerpt:
      "Consider how young people can contribute to agricultural innovation, entrepreneurship, and community development.",
    image: "/images/blog/youth-agriculture.jpg",
    readTime: "4 min read",
  },
  {
    id: "sustainable-farming",
    title: "Understanding Sustainable Farming Practices",
    category: "Agriculture",
    excerpt:
      "An introduction to soil care, responsible resource use, and sustainable agricultural production.",
    image: "/images/blog/sustainable-farming.jpg",
    readTime: "5 min read",
  },
  {
    id: "greenhouse-learning",
    title: "Greenhouses as a Learning Environment",
    category: "Technology",
    excerpt:
      "Explore greenhouse cultivation, growing conditions, and practical agricultural training.",
    image: "/images/blog/greenhouse.jpg",
    readTime: "4 min read",
  },
  {
    id: "community-agricultural-learning",
    title: "Connecting Communities Through Agricultural Learning",
    category: "Community",
    excerpt:
      "Ideas for sharing agricultural knowledge and encouraging community participation in learning activities.",
    image: "/images/blog/community-outreach.jpg",
    readTime: "5 min read",
  },
];

export default function BlogLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section
      id="blog-library"
      className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#1E5A3A]">
            From the TINYA Blog
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#123524] sm:text-4xl">
            Ideas, Knowledge & Insights
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Browse articles on agriculture, innovation, youth development,
            agribusiness, and community engagement.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-7 max-w-2xl">
          <label htmlFor="blog-search" className="sr-only">
            Search blog articles
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-[#1E5A3A] focus-within:ring-2 focus-within:ring-green-100">
            <FaSearch className="shrink-0 text-[#1E5A3A]" />

            <input
              id="blog-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm outline-none sm:text-base"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-sm font-semibold text-[#1E5A3A]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-[#1E5A3A] bg-[#1E5A3A] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#1E5A3A] hover:text-[#1E5A3A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Showing {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>

          <span className="text-xs text-gray-400">
            Sample content · Draft
          </span>
        </div>

        {/* Article cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <Link
                  to={`/blog/${article.id}`}
                  aria-label={`Read ${article.title}`}
                  className="relative block h-56 overflow-hidden bg-gradient-to-br from-[#123524] to-[#1E5A3A]"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-12">
                    <span className="rounded-full bg-[#A7D129] px-3 py-1.5 text-xs font-bold text-[#123524]">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FaCalendarAlt />
                      Draft article
                    </span>

                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#123524] transition group-hover:text-[#1E5A3A]">
                    <Link to={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <Link
                      to={`/blog/${article.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1E5A3A] transition hover:text-[#123524]"
                    >
                      Read Article
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
            <FaLeaf className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-4 text-xl font-bold text-[#123524]">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-xl bg-[#1E5A3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123524]"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl bg-[#123524] p-7 text-white sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold">
                Have a question or story to share?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                Contact TINYA to discuss agricultural learning,
                community initiatives, or potential contributions
                to our knowledge hub.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition hover:bg-white"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

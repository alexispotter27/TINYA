
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaFolderOpen,
  FaSeedling,
} from "react-icons/fa";

import blogArticles from "../data/blogArticles";

export default function BlogArticle() {
  const { slug } = useParams();

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#F7FAF5] px-4 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-[#1E5A3A]">
            <FaFolderOpen />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-[#123524]">
            Article not found
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            We couldn't find an article at this address. It may have been
            removed, or the link may be incorrect.
          </p>

          <Link
            to="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1E5A3A] px-6 py-3.5 font-semibold text-white transition hover:bg-[#123524]"
          >
            <FaArrowLeft />
            Return to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = blogArticles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category
    )
    .slice(0, 3);

  const fallbackRelated =
    relatedArticles.length > 0
      ? relatedArticles
      : blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="bg-white">
      {/* Article hero */}
      <section className="relative isolate overflow-hidden bg-[#123524]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${article.image}")` }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#123524]/95 via-[#123524]/85 to-[#123524]/55" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-[#A7D129]"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129] px-4 py-2 text-xs font-bold text-[#123524] sm:text-sm">
              <FaFolderOpen />
              {article.category}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              {article.date ? (
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt />
                  {article.date}
                </span>
              ) : null}

              <span className="inline-flex items-center gap-2">
                <FaSeedling />
                {article.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="min-w-0 lg:col-span-8">
            <img
              src={article.image}
              alt={article.title}
              className="mb-10 max-h-[480px] w-full rounded-2xl object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
              <strong>Draft content:</strong> This article is demonstration
              content for the TINYA website. Review and approve it before
              publishing.
            </div>

            <div className="space-y-10">
              {article.content.map((section, index) => (
                <section key={`${article.slug}-${index}`}>
                  <h2 className="text-2xl font-bold leading-snug text-[#123524] sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${article.slug}-${index}-${paragraphIndex}`}
                        className="text-base leading-8 text-gray-700 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-gray-200 pt-7">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-bold text-[#1E5A3A] transition hover:text-[#123524]"
              >
                <FaArrowLeft />
                Explore more articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-[#F7FAF5] p-6 sm:p-8">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
                About TINYA
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#123524]">
                Knowledge. Innovation. Impact.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Explore agricultural technology, youth development,
                agribusiness, and learning opportunities through TINYA.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#1E5A3A] hover:text-[#123524]"
              >
                Learn about us
                <FaArrowRight />
              </Link>
            </div>

            {fallbackRelated.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#123524]">
                  Related Articles
                </h2>

                <div className="mt-5 space-y-5">
                  {fallbackRelated.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group flex gap-4 rounded-xl border border-gray-100 p-3 transition hover:border-[#1E5A3A]/30 hover:shadow-md"
                    >
                      <img
                        src={related.image}
                        alt=""
                        loading="lazy"
                        className="h-20 w-20 shrink-0 rounded-lg object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-[#1E5A3A]">
                          {related.category}
                        </span>

                        <span className="mt-2 block font-bold leading-snug text-[#123524] transition group-hover:text-[#1E5A3A]">
                          {related.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#F7FAF0] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#1E5A3A] px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Continue Exploring with TINYA
            </h2>

            <p className="mt-3 leading-7 text-white/80">
              Discover more insights and educational resources related to
              agriculture, technology, and youth development.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition hover:bg-white"
          >
            Browse Articles
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}


import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaLeaf } from "react-icons/fa";

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123524] text-white">
      <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-[#A7D129]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D7F29B]">
            <FaBookOpen />
            TINYA INSIGHTS & STORIES
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Ideas That Grow
            <span className="block text-[#A7D129]">
              People and Agriculture
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Explore ideas, educational insights, agricultural innovation,
            youth development, and stories that inspire a more sustainable
            future.
          </p>srr4

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#blog-library"
              className="inline-flex items-center gap-2 rounded-xl bg-[#A7D129] px-6 py-3.5 font-bold text-[#123524] transition hover:bg-white"
            >
              Explore Articles
              <FaArrowRight />
            </a>

            <Link
              to="/contact"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Contact TINYA
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#A7D129]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-2xl">
            <img
              src="/images/about-hero2.jpg"
              alt="Agricultural learning and innovation"
              className="h-72 w-full rounded-[1.5rem] object-cover sm:h-96"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A7D129] text-xl text-[#123524]">
                <FaLeaf />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#A7D129]">
                  LEARN · INNOVATE · GROW
                </p>
                <p className="mt-1 text-sm leading-6 text-white/75">
                  A knowledge space for young people, farmers, and
                  agricultural entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

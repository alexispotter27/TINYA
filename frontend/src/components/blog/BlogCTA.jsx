
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaUsers,
  FaSeedling,
} from "react-icons/fa";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF0] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#A7D129]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#1E5A3A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-[#1E5A3A]/10 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Main CTA content */}
            <div className="px-6 py-12 sm:px-10 sm:py-14 lg:col-span-3 lg:px-14 lg:py-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF5DE] px-4 py-2 text-sm font-bold text-[#1E5A3A]">
                <FaSeedling />
                Knowledge for Positive Impact
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
                Let’s Grow a Better Future Together
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Connect with TINYA to explore agricultural innovation, youth
                empowerment, agribusiness, and sustainable development.
                Together, we can turn knowledge into positive impact.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#1E5A3A] px-7 py-4 font-bold text-white transition hover:bg-[#123524]"
                >
                  Connect With TINYA
                  <FaArrowRight />
                </Link>

                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#1E5A3A]/20 bg-white px-7 py-4 font-bold text-[#1E5A3A] transition hover:border-[#1E5A3A] hover:bg-[#F7FAF0]"
                >
                  <FaBookOpen />
                  Explore Resources
                </Link>
              </div>
            </div>

            {/* Supporting highlights */}
            <div className="relative flex flex-col justify-center gap-7 overflow-hidden bg-[#1E5A3A] px-6 py-10 sm:px-10 lg:col-span-2 lg:px-9 lg:py-14">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-white/5" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7D129] text-xl text-[#123524]">
                  <FaUsers />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Youth Empowerment
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Supporting youth participation, skills, and opportunities.
                </p>
              </div>

              <div className="relative border-t border-white/15 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7D129] text-xl text-[#123524]">
                  <FaSeedling />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Agricultural Innovation
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Promoting knowledge of technology and sustainable farming.
                </p>
              </div>

              <div className="relative border-t border-white/15 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7D129] text-xl text-[#123524]">
                  <FaBookOpen />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Knowledge Sharing
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Making agricultural learning and ideas easier to explore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

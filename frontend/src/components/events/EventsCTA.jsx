
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaUsers,
} from "react-icons/fa";

export default function EventsCTA() {
  return (
    <section className="bg-[#F0F8E9] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#D8EBCB] bg-[#E5F2DA] p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A7D129]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-white/70 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#39734A]">
                <FaCalendarCheck />
                Get Involved with TINYA
              </span>

              <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-[#244F32] sm:text-4xl lg:text-5xl">
                Be Part of the Next Agricultural Transformation.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#526957] sm:text-lg">
                Connect with opportunities in agricultural technology,
                youth development, agribusiness, and community engagement.
                Join us in promoting real technology, positive impact,
                and real value.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#72A96B] px-6 py-3.5 font-bold text-white transition hover:bg-[#5D9658]"
                >
                  Partner With Us
                  <FaArrowRight />
                </Link>

                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#9BC69A] bg-white/80 px-6 py-3.5 font-semibold text-[#39734A] transition hover:bg-white"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/80 bg-white/75 p-7 shadow-sm sm:p-9">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D7EBC6] text-2xl text-[#39734A]">
                  <FaUsers />
                </div>

                <h3 className="text-2xl font-bold text-[#244F32]">
                  Let’s Grow Together
                </h3>

                <p className="mt-4 leading-7 text-[#526957]">
                  Whether you are a young agripreneur, farmer, volunteer,
                  organisation, or potential partner, there is room to
                  contribute to a more innovative agricultural future.
                </p>

                <div className="mt-6 border-t border-[#D8EBCB] pt-5">
                  <p className="text-sm font-bold text-[#39734A]">
                    Real Technology. Positive Impact. Real Value.
                  </p>

                  <div className="mt-3 h-1.5 w-20 rounded-full bg-[#F4C21A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

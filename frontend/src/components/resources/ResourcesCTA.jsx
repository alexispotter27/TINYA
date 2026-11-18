
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaBookOpen, FaUsers, FaSeedling } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
];

export default function ResourcesCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123524] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1200}
          className="h-full w-full"
        >
          {slides.map((image) => (
            <SwiperSlide key={image}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url("${image}")` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 -z-10 bg-[#123524]/85" />

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D6F28A] backdrop-blur-sm">
          <FaBookOpen />
          Learn. Innovate. Grow.
        </span>

        <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Grow Your Agricultural Knowledge?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
          Connect with TINYA to learn more about youth development,
          agricultural technology, agribusiness, and opportunities to support
          sustainable agricultural development in Nigeria.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#A7D129] px-7 py-4 font-bold text-[#123524] transition hover:bg-white sm:w-auto"
          >
            Connect With TINYA
            <FaArrowRight />
          </Link>

          <a
            href="#resource-library"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#123524] sm:w-auto"
          >
            <FaBookOpen />
            Explore Resources
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3 sm:gap-6">
          <div className="flex items-center justify-center gap-3 text-white/90">
            <FaSeedling className="shrink-0 text-xl text-[#A7D129]" />
            <span className="text-sm font-medium">Agricultural Innovation</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-white/90">
            <FaUsers className="shrink-0 text-xl text-[#A7D129]" />
            <span className="text-sm font-medium">Youth Empowerment</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-white/90">
            <FaBookOpen className="shrink-0 text-xl text-[#A7D129]" />
            <span className="text-sm font-medium">Knowledge Sharing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

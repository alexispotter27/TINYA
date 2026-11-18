import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  FaArrowRight,
  FaUsers,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

const backgroundImages = [
  "/images/about/cta1.jpg",
  "/images/about/cta2.jpg",
  "/images/about/cta3.jpg",
  "/images/about/cta4.jpg",
];

export default function ProgramsCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123524]">
      {/* Sliding background images */}
      <div className="absolute inset-0 -z-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop
          allowTouchMove={false}
          className="h-full w-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Brand overlays */}
      <div className="absolute inset-0 -z-10 bg-[#123524]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#123524] via-[#123524]/20 to-[#1E5A3A]/30" />

      {/* CTA content */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#A7D129]/40 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#A7D129] backdrop-blur-sm">
            <FaUsers />
            Be Part of the Change
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Help Shape the Future of{" "}
            <span className="text-[#A7D129]">Agriculture in Nigeria</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Join TINYA in promoting youth participation, agricultural
            innovation, entrepreneurship, and community development. Connect
            with us to explore how you can contribute.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-7 py-4 font-bold text-[#123524] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
            >
              Get in Touch
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:border-[#A7D129] hover:bg-white/10 hover:text-[#A7D129] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2 focus:ring-offset-[#123524]"
            >
              <FaHandshake />
              Explore Partnerships
            </Link>
          </div>
        </div>

        {/* Quick contact links */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-2">
          <a
            href="mailto:info@tinya.org.ng"
            className="flex items-center justify-center gap-3 rounded-xl p-4 text-white/85 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#A7D129]"
          >
            <FaEnvelope className="text-xl text-[#A7D129]" />
            <span className="text-sm sm:text-base">
              info@tinya.org.ng
            </span>
          </a>

          <a
            href="tel:+2347066059456"
            className="flex items-center justify-center gap-3 rounded-xl p-4 text-white/85 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#A7D129]"
          >
            <FaUsers className="text-xl text-[#A7D129]" />
            <span className="text-sm sm:text-base">
              +234 706 605 9456
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
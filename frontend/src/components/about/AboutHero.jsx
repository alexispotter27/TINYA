
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/images/about-hero1.jpg",
  "/images/about-hero2.jpg",
  "/images/about-hero3.jpg",
  "/images/about-hero4.jpg",
  "/images/about-hero5.jpg",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide}>
            <div className="relative h-[70vh] min-h-[560px] md:h-[80vh] md:min-h-[650px]">
              {/* Background Image */}
              <img
                src={slide}
                alt={`TINYA agricultural development ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Green Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#123524]/90 via-[#123524]/70 to-transparent" />

              {/* Hero Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 py-16 text-white lg:px-8">
                  {/* Youth Empowerment Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-full border border-[#A7D129]/60 bg-[#1E5A3A]/70 px-6 py-3 text-base font-semibold text-[#D7F49A] backdrop-blur-sm">
                      Youth Empowerment
                    </span>
                  </div>

                  <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Building the Next Generation of Nigerian AgroTech Leaders
                  </h1>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg md:text-xl">
                    The Initiative for Nigerian Youths in AgroTech empowers
                    young Nigerians through agriculture, innovation,
                    entrepreneurship and technology-driven solutions.
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/programs"
                      className="rounded-lg bg-[#F4C21A] px-8 py-4 text-center font-bold text-[#1E5A3A] transition hover:bg-[#A7D129]"
                    >
                      Explore Programs
                    </Link>

                    <Link
                      to="/contact"
                      className="rounded-lg border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-[#1E5A3A]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/programs1.png",
    eyebrow: "Youth Empowerment",
    title: "Empowering Young People Through Agriculture",
    description:
      "Equipping Nigerian youths with practical agricultural skills, entrepreneurial knowledge and opportunities to build sustainable livelihoods.",
  },
  {
    image: "/images/programs2.png",
    eyebrow: "Smart Agriculture",
    title: "Transforming Farming Through Technology",
    description:
      "Promoting precision farming, modern agricultural techniques and innovative solutions for a more productive food system.",
  },
  {
    image: "/images/programs3.png",
    eyebrow: "Agribusiness Development",
    title: "Turning Agricultural Ideas Into Opportunities",
    description:
      "Supporting aspiring agripreneurs with relevant skills, business knowledge and pathways to agricultural enterprise development.",
  },
  {
    image: "/images/programs4.png",
    eyebrow: "Community Impact",
    title: "Building Stronger Agricultural Communities",
    description:
      "Working with communities to promote agricultural innovation, capacity development and sustainable rural livelihoods.",
  },
];

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        loop
        className="programs-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative min-h-[600px] h-[75vh] max-h-[850px]">
              <img
                src={slide.image}
                alt=""
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#123524]/75" />
              <div className="absolute inset-0 bg-linear-to-r from-[#123524] via-[#123524]/70 to-transparent" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
                  <div className="max-w-3xl text-white">
                    <div className="mb-5 inline-flex rounded-full border border-[#A7D129]/50 bg-[#1E5A3A]/60 px-4 py-2 text-sm font-semibold text-[#D6F58B]">
                      {slide.eyebrow}
                    </div>

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#our-programs"
                        className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#F4C21A] px-7 py-4 font-bold text-[#1E5A3A] transition hover:-translate-y-1 hover:bg-[#ffda4d]"
                      >
                        Explore Our Programs
                      </a>

                      <Link
                        to="/contact"
                        className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/80 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#1E5A3A]"
                      >
                        Partner With Us
                      </Link>
                    </div>
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
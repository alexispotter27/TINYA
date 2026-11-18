
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/hero1.png",
    eyebrow: "Events & Activities",
    title: "Connecting People Through Agricultural Innovation",
    description:
      "Explore opportunities for learning, collaboration, youth engagement, and agricultural development through TINYA events and activities.",
  },
  {
    image: "/images/hero2.png",
    eyebrow: "Youth Empowerment",
    title: "Inspiring the Next Generation of Agripreneurs",
    description:
      "Discover event themes focused on agricultural skills, entrepreneurship, technology, and knowledge sharing.",
  },
  {
    image: "/images/hero3.png",
    eyebrow: "Community Engagement",
    title: "Building Stronger Agricultural Communities",
    description:
      "Learn about the role of workshops, outreach activities, and collaborative initiatives in agricultural development.",
  },
];

export default function EventsHero() {
  return (
    <section className="relative h-[600px] min-h-[540px] overflow-hidden bg-[#123524] sm:h-[660px] lg:h-[720px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        className="events-hero-swiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex h-full items-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${slide.image}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#123524]/95 via-[#123524]/75 to-[#123524]/30" />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-[#D6F28A] backdrop-blur-sm">
                    <FaCalendarAlt />
                    {slide.eyebrow}
                  </span>

                  <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#upcoming-events"
                      className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#A7D129] px-7 py-4 font-bold text-[#123524] transition hover:bg-white"
                    >
                      Explore Events
                      <FaArrowRight />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#123524]"
                    >
                      <FaUsers />
                      Get Involved
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .events-hero-swiper .swiper-pagination {
          bottom: 28px;
        }

        .events-hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ffffff;
          opacity: 0.55;
        }

        .events-hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 8px;
          background: #A7D129;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

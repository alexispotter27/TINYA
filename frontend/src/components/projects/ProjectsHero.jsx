import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowRight, FaLeaf, FaFileAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/project1.png",
    eyebrow: "PROJECTS & INITIATIVES",
    title: "Turning Agricultural Ideas Into Action",
    description:
      "Explore initiatives that support youth participation, agricultural innovation, and sustainable community development.",
  },
  {
    image: "/images/program4.png",
    eyebrow: "COMMUNITY DEVELOPMENT",
    title: "Creating Opportunities Through Collaboration",
    description:
      "Discover how collaboration, knowledge sharing, and community engagement can contribute to agricultural development.",
  },
  {
    image: "/images/program5.png",
    eyebrow: "AGRICULTURAL INNOVATION",
    title: "Supporting the Future of Agriculture",
    description:
      "Explore project areas focused on modern farming practices, agribusiness, and opportunities for young Nigerians.",
  },
];

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123524]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={900}
        loop
        className="projects-hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="relative flex min-h-[600px] items-center sm:min-h-[650px] lg:min-h-[720px]">
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-30 h-full w-full object-cover"
                fetchPriority={index === 0 ? "high" : "auto"}
              />

              <div className="absolute inset-0 -z-10 bg-[#123524]/75" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#123524] via-[#123524]/85 to-transparent" />

              <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#A7D129]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7D129] backdrop-blur-sm sm:text-sm">
                    <FaLeaf />
                    {slide.eyebrow}
                  </span>

                  <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <div className="mt-6 h-1.5 w-20 rounded-full bg-[#A7D129]" />

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#ongoing-projects"
                      className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#A7D129] px-6 py-4 font-bold text-[#123524] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#123524]"
                    >
                      Explore Projects
                      <FaArrowRight />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:border-[#A7D129] hover:text-[#A7D129] focus:outline-none focus:ring-2 focus:ring-[#A7D129]"
                    >
                      <FaFileAlt />
                      Discuss a Partnership
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .projects-hero-swiper .swiper-pagination {
          bottom: 28px !important;
        }

        .projects-hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.55;
        }

        .projects-hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 8px;
          background: #A7D129;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
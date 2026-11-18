import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  FaUserPlus,
  FaHandsHelping,
  FaHandshake,
  FaDonate,
  FaSeedling,
  FaChartBar,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/images/about/cta1.jpg",
  "/images/about/cta2.jpg",
  "/images/about/cta3.jpg",
  "/images/about/cta4.jpg",
];

export default function CallToAction() {
  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative min-h-[750px]">

              {/* Background Image */}

              <img
                src={slide}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-[#1E5A3A]/85"></div>

              {/* Content */}

              <div className="relative z-10 flex items-center min-h-[750px]">

                <div className="max-w-7xl mx-auto px-6 text-center">

                  <span className="uppercase tracking-[0.3em] text-[#A7D129] font-semibold">
                    Join The Movement
                  </span>

                  <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white max-w-5xl mx-auto">
                    Empowering Youths.
                    <br />
                    Transforming Agriculture.
                  </h2>

                  <p className="mt-8 max-w-3xl mx-auto text-lg text-white/90 leading-8">
                    Become part of a growing national movement
                    committed to youth empowerment,
                    agribusiness innovation,
                    food security and sustainable
                    development across Nigeria.
                  </p>

                  {/* Buttons */}

                  <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center gap-5">

                    <a
                      href="/membership"
                      className="
                        flex items-center gap-3
                        bg-[#A7D129]
                        text-[#1E5A3A]
                        px-8 py-4
                        rounded-xl
                        font-bold
                        hover:scale-105
                        transition
                      "
                    >
                      <FaUserPlus />
                      Become a Member
                    </a>

                    <a
                      href="/volunteer"
                      className="
                        flex items-center gap-3
                        border-2 border-white
                        text-white
                        px-8 py-4
                        rounded-xl
                        font-bold
                        hover:bg-white
                        hover:text-[#1E5A3A]
                        transition
                      "
                    >
                      <FaHandsHelping />
                      Volunteer
                    </a>

                    <a
                      href="/partners"
                      className="
                        flex items-center gap-3
                        border-2 border-white
                        text-white
                        px-8 py-4
                        rounded-xl
                        font-bold
                        hover:bg-white
                        hover:text-[#1E5A3A]
                        transition
                      "
                    >
                      <FaHandshake />
                      Partner With Us
                    </a>

                    <a
                      href="/donate"
                      className="
                        flex items-center gap-3
                        bg-white
                        text-[#1E5A3A]
                        px-8 py-4
                        rounded-xl
                        font-bold
                        hover:scale-105
                        transition
                      "
                    >
                      <FaDonate />
                      Donate
                    </a>

                  </div>

                  {/* Bottom Features */}

                  <div className="grid md:grid-cols-4 gap-8 mt-20">

                    <div className="flex flex-col items-center text-white">
                      <FaLeaf className="text-3xl text-[#A7D129]" />
                      <span className="mt-3 font-medium">
                        Youth Empowerment
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-white">
                      <FaChartBar className="text-3xl text-[#A7D129]" />
                      <span className="mt-3 font-medium">
                        Agribusiness Innovation
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-white">
                      <FaUsers className="text-3xl text-[#A7D129]" />
                      <span className="mt-3 font-medium">
                        Community Impact
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-white">
                      <FaSeedling className="text-3xl text-[#A7D129]" />
                      <span className="mt-3 font-medium">
                        Food Security
                      </span>
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
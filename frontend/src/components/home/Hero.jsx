import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
  "/images/hero5.png",
];

export default function Hero() {
  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[90vh]">

              <img
                src={slide}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">

                  <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
                    Empowering Nigerian Youths Through Agriculture & Technology
                  </h1>

                  <p className="mt-6 text-lg md:text-xl max-w-2xl">
                    Building future agro innovators, entrepreneurs and
                    sustainable food systems across Nigeria.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">

                    <button className="bg-[#F4C21A] text-[#1E5A3A] px-8 py-4 rounded-lg font-bold">
                      Join TINYA
                    </button>

                    <button className="border border-white px-8 py-4 rounded-lg">
                      Explore Programs
                    </button>

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
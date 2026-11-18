import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/images/contact1.png",
  "/images/contact2.png",
  "/images/contact3.png",
  "/images/contact4.png",
  "/images/contact5.png",
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
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
          <SwiperSlide key={slide}>
            <div className="relative min-h-[600px] md:min-h-[700px]">
              {/* Background Image */}
              <img
                src={slide}
                alt={`TINYA contact slide ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Green Overlay */}
              <div className="absolute inset-0 bg-[#123524]/80" />

              {/* Green Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#123524] via-[#123524]/70 to-transparent" />

              {/* Hero Content */}
              <div className="relative z-10 flex min-h-[600px] items-center md:min-h-[700px]">
                <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
                  <div className="max-w-3xl">
                    {/* Youth Empowerment Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center rounded-full border border-[#A7D129]/60 bg-[#1E5A3A]/70 px-6 py-3 text-base font-semibold text-[#D7F49A] backdrop-blur-sm">
                        Youth Empowerment
                      </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      Get In Touch With TINYA
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                      Whether you're interested in membership, volunteering,
                      partnerships, training programs, sponsorship opportunities
                      or general enquiries, our team is ready to assist you.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#contact-form"
                        className="rounded-xl bg-[#F4C21A] px-8 py-4 text-center font-bold text-[#1E5A3A] transition hover:scale-105 hover:bg-[#A7D129]"
                      >
                        Send A Message
                      </a>

                      <a
                        href="tel:+2347066059456"
                        className="rounded-xl border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-[#1E5A3A]"
                      >
                        Call Us
                      </a>
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

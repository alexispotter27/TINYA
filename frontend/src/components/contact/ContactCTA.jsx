import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <img
        src="/images/contact/contact-cta.jpg"
        alt="TINYA Community"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#123524]/90"></div>

      {/* Decorative Shapes */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-[#A7D129]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4C21A]/10 rounded-full blur-3xl"></div>

      {/* Content */}

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <span className="uppercase tracking-[0.25em] text-[#A7D129] font-semibold">
          Still Have Questions?
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold">
          Let's Build The Future Of Agriculture Together
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-white/85 leading-8">
          Whether you're a youth, farmer, volunteer, development partner,
          investor, researcher, government institution or corporate
          organization, there is a place for you within TINYA.
        </p>

        {/* Action Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">

            <FaUsers className="text-4xl text-[#F4C21A] mx-auto" />

            <h3 className="mt-5 text-2xl font-bold">
              Become A Member
            </h3>

            <p className="mt-4 text-white/80">
              Join thousands of young people transforming agriculture
              and technology across Nigeria.
            </p>

            <Link
              to="/membership"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-[#A7D129]
                text-[#1E5A3A]
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Join Now
              <FaArrowRight />
            </Link>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">

            <FaHandshake className="text-4xl text-[#F4C21A] mx-auto" />

            <h3 className="mt-5 text-2xl font-bold">
              Partner With TINYA
            </h3>

            <p className="mt-4 text-white/80">
              Collaborate with us on programs, innovation,
              youth empowerment and agricultural development.
            </p>

            <Link
              to="/partners"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-white
                text-[#1E5A3A]
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Become A Partner
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
import { FaArrowRight, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";


const highlights = [
  {
    number: "01",
    title: "Practical Training",
    description:
      "Equip young people with practical agricultural skills and knowledge they can apply in real farming environments.",
  },
  {
    number: "02",
    title: "Technology Adoption",
    description:
      "Encourage the use of modern agricultural technologies and innovative approaches to improve farming practices.",
  },
  {
    number: "03",
    title: "Enterprise Development",
    description:
      "Support youth-led agribusiness ideas, entrepreneurship, and opportunities across the agricultural value chain.",
  },
];

export default function ProgramsOverview() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#A7D129]/15 px-4 py-2 text-sm font-bold text-[#1E5A3A]">
            <FaSeedling />
            OUR PROGRAMS
          </div>

          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#123524] sm:text-4xl lg:text-5xl">
            Empowering Youths Through{" "}
            <span className="text-[#1E5A3A]">
              Agriculture and Innovation
            </span>
          </h2>

          <div className="mt-6 h-1.5 w-20 rounded-full bg-[#A7D129]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            At The Initiative for Nigerian Youths in AgroTech (TINYA), our
            programs focus on connecting young people with agricultural
            knowledge, modern technology, entrepreneurial skills, and
            opportunities to contribute to Nigeria&apos;s agricultural
            development.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            Through training, innovation, and community engagement, we aim
            to encourage youth participation in agriculture and promote
            sustainable approaches to agribusiness.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#1E5A3A] px-6 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#123524] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
            >
              Get Involved
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right highlights */}
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#A7D129]/15 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#1E5A3A]/10 blur-2xl" />

          <div className="relative space-y-5">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgba(18,53,36,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#A7D129]/70 hover:shadow-[0_14px_35px_rgba(18,53,36,0.12)] sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1E5A3A] text-lg font-extrabold text-white transition duration-300 group-hover:bg-[#A7D129] group-hover:text-[#123524]">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#123524] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import contactData from "../../data/contactData";

const networks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: contactData.socials.instagram,
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    link: contactData.socials.facebook,
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    link: contactData.socials.twitter,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: contactData.socials.linkedin,
  },
];

export default function SocialConnect() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-[#A7D129]">
            Stay Connected
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#1E5A3A] sm:text-4xl">
            Connect With TINYA
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col items-center justify-center
                rounded-2xl border border-gray-100
                bg-[#F8FAFC] p-7 text-center
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#1E5A3A]
                hover:shadow-xl
              "
            >
              <div className="text-3xl text-[#1E5A3A] transition group-hover:text-[#F4C21A]">
                {network.icon}
              </div>

              <span className="mt-4 font-semibold text-gray-700 transition group-hover:text-white">
                {network.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
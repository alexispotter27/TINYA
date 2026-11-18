import {
  FaMapMarkedAlt,
  FaUsers,
  FaSeedling,
  FaGlobeAfrica,
} from "react-icons/fa";

const coverageStats = [
  {
    icon: <FaMapMarkedAlt />,
    value: "36",
    label: "States",
  },
  {
    icon: <FaGlobeAfrica />,
    value: "6",
    label: "Geopolitical Zones",
  },
  {
    icon: <FaUsers />,
    value: "37",
    label: "State Coordinators",
  },
  {
    icon: <FaSeedling />,
    value: "774",
    label: "Potential LGA Reach",
  },
];

export default function NationalCoverage() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="uppercase tracking-widest font-semibold text-[#A7D129]">
              National Coverage
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1E5A3A]">
              Reaching Communities Across Nigeria
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Through our national structure, TINYA is positioned
              to deliver agricultural innovation, youth empowerment,
              capacity development and community impact across all
              geopolitical zones of Nigeria.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              {coverageStats.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-50
                    rounded-2xl
                    p-6
                    shadow-sm
                    hover:shadow-lg
                    transition
                  "
                >
                  <div className="text-[#A7D129] text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-3 text-3xl font-bold text-[#1E5A3A]">
                    {item.value}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}

          <div>

            <img
              src="/images/about/nigeria-map.png"
              alt="TINYA National Coverage"
              className="
                w-full
                max-w-xl
                mx-auto
                drop-shadow-xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}
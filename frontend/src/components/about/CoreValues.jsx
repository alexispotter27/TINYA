import {
  FaSeedling,
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaGlobeAfrica,
  FaChartLine,
} from "react-icons/fa";

const values = [
  {
    icon: <FaSeedling />,
    title: "Sustainability",
    description:
      "Promoting environmentally responsible agricultural practices for long-term impact.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "Leveraging technology and modern farming solutions to transform agriculture.",
  },
  {
    icon: <FaUsers />,
    title: "Youth Empowerment",
    description:
      "Equipping young people with skills, opportunities and resources for success.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "Operating with transparency, accountability and ethical leadership.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Community Impact",
    description:
      "Creating meaningful social and economic change across communities.",
  },
  {
    icon: <FaChartLine />,
    title: "Excellence",
    description:
      "Maintaining high standards in programs, projects and service delivery.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-[#A7D129] font-semibold uppercase tracking-wider">
            Our Values
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1E5A3A]">
            The Principles That Guide Us
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600">
            At TINYA, our work is driven by strong values that
            inspire innovation, leadership and sustainable development.
          </p>

        </div>

        {/* Values Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, index) => (
            <div
              key={index}
              className="
                bg-slate-50
                p-8
                rounded-3xl
                hover:shadow-xl
                transition-all
                duration-300
                group
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#1E5A3A]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-6
                  group-hover:scale-110
                  transition
                "
              >
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1E5A3A] mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
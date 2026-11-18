import {
  FaUsers,
  FaHandsHelping,
  FaDonate,
  FaHandshake,
} from "react-icons/fa";

export default function CallToAction() {
  const actions = [
    {
      id: 1,
      title: "Become a Member",
      description:
        "Join our growing network of farmers, innovators and agricultural leaders.",
      icon: <FaUsers size={40} />,
      button: "Join Now",
    },
    {
      id: 2,
      title: "Volunteer",
      description:
        "Contribute your skills, time and expertise to support our programs.",
      icon: <FaHandsHelping size={40} />,
      button: "Volunteer",
    },
    {
      id: 3,
      title: "Donate",
      description:
        "Support our mission and help transform lives through agriculture and technology.",
      icon: <FaDonate size={40} />,
      button: "Donate Now",
    },
    {
      id: 4,
      title: "Become a Partner",
      description:
        "Collaborate with us to create sustainable impact across Nigeria.",
      icon: <FaHandshake size={40} />,
      button: "Partner With Us",
    },
  ];

  return (
    <section className="py-24 bg-[#1E5A3A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join The Movement
          </h2>

          <p className="mt-5 text-white/80 max-w-3xl mx-auto">
            Together we can empower Nigerian youths through
            agriculture, innovation and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {actions.map((action) => (
            <div
              key={action.id}
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center text-[#1E5A3A] mb-6">
                {action.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E5A3A]">
                {action.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {action.description}
              </p>

              <button
                className="
                  mt-6
                  bg-[#F4C21A]
                  text-[#1E5A3A]
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-[#E0B118]
                  transition
                "
              >
                {action.button}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
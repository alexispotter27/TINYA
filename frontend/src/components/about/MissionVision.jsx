import { FaBullseye, FaEye } from "react-icons/fa6";
import { aboutData } from "../../data/about";

export default function MissionVision() {
  const { mission, vision } = aboutData;

  const items = [
    {
      id: 1,
      icon: <FaBullseye />,
      title: mission.title,
      description: mission.description,
    },
    {
      id: 2,
      icon: <FaEye />,
      title: vision.title,
      description: vision.description,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E5A3A] text-2xl text-[#F4C21A]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1E5A3A] sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
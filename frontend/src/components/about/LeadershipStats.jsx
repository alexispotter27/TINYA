import CountUp from "react-countup";

const stats = [
  {
    number: 10,
    title: "Board of Trustees",
  },
  {
    number: 15,
    title: "National Executives",
  },
  {
    number: 6,
    title: "Zonal Coordinators",
  },
  {
    number: 37,
    title: "State Coordinators",
  },
  /*{
    number: 37,
    title: "States + FCT Coverage",
  },*/
];

export default function LeadershipStats() {
  return (
    <section className="py-24 bg-[#1E5A3A]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#A7D129] uppercase tracking-widest font-semibold">
            National Structure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Building Impact Across Nigeria
          </h2>

          <p className="text-white/80 mt-6 max-w-3xl mx-auto">
            TINYA operates through a robust governance and coordination
            framework designed to reach communities across the nation.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-3xl
                p-8
                text-center
                border
                border-white/10
                hover:border-[#A7D129]
                transition
              "
            >
              <h3 className="text-5xl font-bold text-[#A7D129]">

                <h3 className="text-5xl font-bold text-[#A7D129]">
                 {stat.number}
                </h3>

              </h3>

              <p className="text-white mt-4 font-medium">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
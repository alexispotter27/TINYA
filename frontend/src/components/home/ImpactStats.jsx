export default function ImpactStats() {
  const stats = [
    { number: "10,000+", label: "Youths Trained" },
    { number: "500+", label: "Farm Businesses" },
    { number: "37", label: "States Covered" },
    { number: "100+", label: "Projects Delivered" },
  ];

  return (
    <section className="py-20 bg-[#1E5A3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-[#F4C21A]">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
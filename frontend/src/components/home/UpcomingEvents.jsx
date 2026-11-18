import SectionTitle from "../common/SectionTitle";
import events from "../../data/events";

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <SectionTitle
          title="Upcoming Events"
          subtitle="Join our upcoming programs, workshops, trainings and outreach activities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <div className="text-sm text-[#F4C21A] font-semibold">
                  {event.date}
                </div>

                <h3 className="text-xl font-bold text-[#1E5A3A] mt-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  📍 {event.location}
                </p>

                <button
                  className="
                    mt-5
                    bg-[#1E5A3A]
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-[#16462D]
                    transition
                  "
                >
                  Register Event
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
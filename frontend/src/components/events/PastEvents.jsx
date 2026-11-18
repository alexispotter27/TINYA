
import { useMemo, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaImages } from "react-icons/fa";

const pastEvents = [
  {
    id: 1,
    title: "Youth Agricultural Skills Development Workshop",
    category: "Workshop",
    description:
      "A youth-focused agricultural workshop highlighting modern farming practices, agricultural entrepreneurship, and practical skills for building sustainable careers in the agricultural sector.",
    date: "Date to be confirmed",
    location: "Owerri, Imo State, Nigeria",
    image: "/images/hero4.png",
  },
  {
    id: 2,
    title: "Smart Farming and Agricultural Technology Training",
    category: "Training",
    description:
      "An agricultural technology training programme exploring greenhouse cultivation, precision agriculture, digital farming solutions, and innovative approaches to improving farm productivity.",
    date: "Date to be confirmed",
    location: "Nigeria — Venue to be confirmed",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Youth Agribusiness and Community Empowerment Outreach",
    category: "Community Outreach",
    description:
      "A community engagement initiative focused on youth participation in agriculture, agribusiness opportunities, sustainable food production, and empowering rural communities through agricultural knowledge.",
    date: "Date to be confirmed",
    location: "Nigeria — Venue to be confirmed",
    image: "/images/program4.png",
  },
];


const categories = [
  "All Events",
  "Workshop",
  "Training",
  "Conference",
  "Community Outreach",
];

export default function PastEvents() {
  const [activeCategory, setActiveCategory] = useState("All Events");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All Events") return pastEvents;

    return pastEvents.filter(
      (event) => event.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="past-events"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            Our Event Highlights
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#123524] sm:text-4xl">
            Past Events & Activities
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Explore highlights from TINYA workshops, training programmes,
            conferences, and community engagement activities.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#1E5A3A] text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#1E5A3A] hover:text-[#1E5A3A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6">
                  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-green-900">
                    {event.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-[#123524]">
                    {event.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-3 text-sm text-gray-600">
                    <p className="flex items-center gap-3">
                      <FaCalendarAlt className="shrink-0 text-[#1E5A3A]" />
                      {event.date}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaMapMarkerAlt className="shrink-0 text-[#1E5A3A]" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-14 text-center">
            <FaImages className="mx-auto text-4xl text-[#1E5A3A]" />

            <h3 className="mt-5 text-xl font-bold text-[#123524]">
              Event Highlights Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              Photos, reports, and highlights will appear here as verified
              past-event information becomes available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

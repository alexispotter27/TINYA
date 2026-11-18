
import { useMemo, useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCalendarCheck,
  FaFilter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Add confirmed TINYA events here when their details are available.

const events = [
  {
    id: 1,
    title: "Youth AgroTech Innovation Workshop",
    category: "Workshop",
    description:
      "An interactive workshop introducing young Nigerians to agricultural technology, digital farming tools, and innovative ways to build careers in agriculture.",
    location: "Owerri, Imo State, Nigeria",
    date: "Date to be announced",
    image: "/images/program1.png",
  },
  {
    id: 2,
    title: "Smart Farming and Greenhouse Training",
    category: "Training",
    description:
      "A practical learning programme focused on greenhouse farming, modern crop production, efficient resource management, and smart farming techniques.",
    location: "Venue to be announced",
    date: "Date to be announced",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Youth Agribusiness and Entrepreneurship Forum",
    category: "Conference",
    description:
      "A forum designed to encourage youth-led agribusiness, explore agricultural value chains, and discuss business opportunities, partnerships, and sustainable farming.",
    location: "Venue to be announced",
    date: "Date to be announced",
    image: "/images/program3.png",
  },
];


const categories = [
  "All Events",
  "Workshop",
  "Training",
  "Conference",
  "Community Outreach",
  "Webinar",
];

export default function UpcomingEvents() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Events");

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesCategory =
        activeCategory === "All Events" ||
        event.category === activeCategory;

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section
      id="upcoming-events"
      className="scroll-mt-24 bg-[#F7FAF5] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1E5A3A] shadow-sm">
            <FaCalendarCheck />
            Events Calendar
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-[#123524] sm:text-4xl">
            Upcoming Events
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Find confirmed workshops, training sessions, conferences, and
            community activities organised by or in collaboration with TINYA.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search events by name, location, or topic..."
              aria-label="Search upcoming events"
              className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E5A3A] focus:ring-2 focus:ring-[#1E5A3A]/15"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
              <FaFilter />
              Filter:
            </span>

            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-[#1E5A3A] bg-[#1E5A3A] text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-[#1E5A3A] hover:text-[#1E5A3A]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {filteredEvents.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#EAF1E4]">
                      <FaCalendarAlt className="text-5xl text-[#1E5A3A]/50" />
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#1E5A3A]">
                    {event.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[#123524]">
                    {event.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <p className="flex items-start gap-3">
                      <FaCalendarAlt className="mt-1 shrink-0 text-[#1E5A3A]" />
                      <span>{event.date || "Date to be confirmed"}</span>
                    </p>

                    <p className="flex items-start gap-3">
                      <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1E5A3A]" />
                      <span>{event.location || "Location to be confirmed"}</span>
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E5A3A] px-5 py-3 font-semibold text-white transition hover:bg-[#123524]"
                  >
                    Enquire About Event
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center sm:py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F5E8] text-3xl text-[#1E5A3A]">
              <FaCalendarCheck />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#123524]">
              {events.length === 0
                ? "New Events Coming Soon"
                : "No Matching Events"}
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              {events.length === 0
                ? "There are no confirmed upcoming events listed at the moment. Please check back for announcements or contact TINYA for enquiries."
                : "No events match your current search or category. Try changing your search terms or filters."}
            </p>

            {events.length === 0 ? (
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E5A3A] px-6 py-3.5 font-bold text-white transition hover:bg-[#123524]"
              >
                Contact TINYA
                <FaArrowRight />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Events");
                }}
                className="mt-6 rounded-xl bg-[#1E5A3A] px-6 py-3.5 font-bold text-white transition hover:bg-[#123524]"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

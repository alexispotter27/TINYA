import { useMemo, useState } from "react";
import leadershipData from "../../data/leadershipData";
import LeadershipCard from "./LeadershipCard";

export default function LeadershipTabs() {
  const [activeTab, setActiveTab] = useState("trustees");
  const [search, setSearch] = useState("");
  const [zoneFilter, setZoneFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const tabs = [
    {
      id: "trustees",
      title: "Board of Trustees",
      count: leadershipData.trustees.length,
    },
    {
      id: "executives",
      title: "National Executive Council",
      count: leadershipData.executives.length,
    },
    {
      id: "zonal",
      title: "Zonal Coordinators",
      count: leadershipData.zonal.length,
    },
    {
      id: "states",
      title: "State Coordinators",
      count: leadershipData.states.length,
    },
  ];

  const zones = [
    "All",
    "North Central",
    "North East",
    "North West",
    "South East",
    "South South",
    "South West",
  ];

  const filteredData = useMemo(() => {
    let data = leadershipData[activeTab] || [];

    if (activeTab !== "states") {
      return data;
    }

    return data.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.state.toLowerCase().includes(search.toLowerCase());

      const matchesZone =
        zoneFilter === "All" || person.zone === zoneFilter;

      const isVacant = person.name.toLowerCase() === "vacant";

      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Filled" && !isVacant) ||
        (statusFilter === "Vacant" && isVacant);

      return matchesSearch && matchesZone && matchesStatus;
    });
  }, [activeTab, search, zoneFilter, statusFilter]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearch("");
    setZoneFilter("All");
    setStatusFilter("All");
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.18em] text-[#A7D129]">
            Governance Structure
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#1E5A3A] sm:text-4xl lg:text-5xl">
            Leadership & Governance
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            TINYA operates through a structured national leadership system
            comprising the Board of Trustees, National Executive Council,
            Zonal Coordinators, and State Coordinators across Nigeria.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3 lg:min-w-0 lg:grid lg:grid-cols-4">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    min-w-[220px] rounded-2xl border px-5 py-4 text-left
                    transition-all duration-300 lg:min-w-0
                    ${
                      active
                        ? "border-[#1E5A3A] bg-[#1E5A3A] text-white shadow-lg"
                        : "border-gray-200 bg-white text-gray-700 hover:border-[#A7D129] hover:shadow-md"
                    }
                  `}
                >
                  <span className="block font-semibold">
                    {tab.title}
                  </span>

                  <span
                    className={`mt-1 block text-sm ${
                      active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {tab.count} {tab.id === "states" ? "Positions" : "Members"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* State Coordinator Controls */}
        {activeTab === "states" && (
          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              <div>
                <label
                  htmlFor="leadership-search"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Search
                </label>

                <input
                  id="leadership-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name or state..."
                  className="
                    w-full rounded-xl border border-gray-300 bg-white
                    px-4 py-3 text-gray-700 outline-none
                    transition focus:border-[#1E5A3A]
                    focus:ring-2 focus:ring-[#1E5A3A]/10
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="zone-filter"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Geopolitical Zone
                </label>

                <select
                  id="zone-filter"
                  value={zoneFilter}
                  onChange={(e) => setZoneFilter(e.target.value)}
                  className="
                    w-full rounded-xl border border-gray-300 bg-white
                    px-4 py-3 text-gray-700 outline-none
                    transition focus:border-[#1E5A3A]
                    focus:ring-2 focus:ring-[#1E5A3A]/10
                  "
                >
                  {zones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="status-filter"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Position Status
                </label>

                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="
                    w-full rounded-xl border border-gray-300 bg-white
                    px-4 py-3 text-gray-700 outline-none
                    transition focus:border-[#1E5A3A]
                    focus:ring-2 focus:ring-[#1E5A3A]/10
                  "
                >
                  <option value="All">All Positions</option>
                  <option value="Filled">Filled</option>
                  <option value="Vacant">Vacant</option>
                </select>
              </div>

            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing{" "}
                <span className="font-semibold text-[#1E5A3A]">
                  {filteredData.length}
                </span>{" "}
                of {leadershipData.states.length} State/FCT positions
              </p>

              {(search ||
                zoneFilter !== "All" ||
                statusFilter !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setZoneFilter("All");
                    setStatusFilter("All");
                  }}
                  className="font-semibold text-[#1E5A3A] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Cards */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.map((person) => (
              <LeadershipCard
                key={`${activeTab}-${person.id}`}
                person={person}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <h3 className="text-xl font-bold text-[#1E5A3A]">
              No leadership record found
            </h3>

            <p className="mt-2 text-gray-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
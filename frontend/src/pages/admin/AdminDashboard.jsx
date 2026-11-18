
import {
  FaUsers,
  FaHandHoldingHeart,
  FaHandshake,
  FaCreditCard,
} from "react-icons/fa";

const statistics = [
  {
    title: "Membership Applications",
    value: "—",
    description: "Registration applications",
    icon: FaUsers,
  },
  {
    title: "Volunteer Applications",
    value: "—",
    description: "Volunteer registrations",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Partnership Applications",
    value: "—",
    description: "Partnership requests",
    icon: FaHandshake,
  },
  {
    title: "Payment Records",
    value: "—",
    description: "Payment transactions",
    icon: FaCreditCard,
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div>
        <p className="text-sm font-semibold text-green-700">
          ADMINISTRATION
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage TINYA membership, volunteers, partnerships,
          and registration activities.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((statistic) => {
          const Icon = statistic.icon;

          return (
            <article
              key={statistic.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {statistic.title}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-800">
                  <Icon />
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                {statistic.value}
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                {statistic.description}
              </p>
            </article>
          );
        })}
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-gray-900">
          Membership Management
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Membership application management, category-based
          registration, payment verification, and membership
          activation will be connected to the backend in
          subsequent development stages.
        </p>

        <div className="mt-5 rounded-lg bg-amber-50 p-4">
          <p className="text-sm text-amber-900">
            Demonstration dashboard. No live membership,
            payment, or applicant records are connected.
          </p>
        </div>
      </section>
    </div>
  );
}

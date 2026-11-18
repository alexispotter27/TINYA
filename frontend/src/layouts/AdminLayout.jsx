
import { NavLink, Outlet } from "react-router-dom";
import {
  FaLeaf,
  FaGauge,
  FaUsers,
  FaHandHoldingHeart,
  FaHandshake,
  FaArrowLeft,
} from "react-icons/fa6";

const navigation = [
  {
    label: "Overview",
    to: "/admin/dashboard",
    icon: FaGauge,
  },
  {
    label: "Membership",
    to: "/admin/members",
    icon: FaUsers,
  },
  {
    label: "Volunteers",
    to: "/admin/volunteers",
    icon: FaHandHoldingHeart,
  },
  {
    label: "Partnerships",
    to: "/admin/partnerships",
    icon: FaHandshake,
  },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      <aside className="w-full bg-green-950 text-white md:min-h-screen md:w-64">
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <FaLeaf className="text-xl text-lime-400" />

          <div>
            <p className="font-bold">TINYA</p>
            <p className="text-xs text-green-200">
              Administration
            </p>
          </div>
        </div>

        <nav className="space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-green-800 text-white"
                      : "text-green-100 hover:bg-white/10"
                  }`
                }
              >
                <Icon />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4">
          <NavLink
            to="/portal"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-green-100 hover:bg-white/10"
          >
            <FaArrowLeft />
            Registration Portal
          </NavLink>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="border-b border-gray-200 bg-white px-6 py-5">
          <p className="text-sm font-medium text-gray-500">
            TINYA Management System
          </p>
        </header>

        <main className="p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

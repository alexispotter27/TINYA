
import { Link, Outlet } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

export default function PortalLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/portal" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-800 text-white">
              <FaLeaf />
            </span>

            <span>
              <span className="block font-bold text-green-900">
                TINYA
              </span>
              <span className="text-xs text-gray-500">
                Registration Portal
              </span>
            </span>
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-gray-600 transition hover:text-green-800"
          >
            Back to Website
          </Link>
        </div>
      </header>

      <main className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TINYA.
            Real Technology, Positive Impact and Real Value.
          </p>
        </div>
      </footer>
    </div>
  );
}

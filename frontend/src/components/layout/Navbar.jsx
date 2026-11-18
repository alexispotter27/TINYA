
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-green-50 text-[#1E5A3A]"
        : "text-gray-700 hover:bg-green-50 hover:text-[#1E5A3A]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="TINYA home"
        >
          <img
            src="/images/logo.png"
            alt="TINYA logo"
            className="h-12 w-auto object-contain"
          />
          <span className="hidden sm:block">
            <span className="block text-lg font-extrabold leading-tight text-[#1E5A3A]">
              TINYA
            </span>
            <span className="block text-xs text-gray-500">
              Real Technology. Positive Impact. Real Value.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-3 inline-flex items-center rounded-lg px-5 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-[#123524] text-white"
                  : "bg-[#1E5A3A] text-white hover:bg-[#123524]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-[#1E5A3A] transition hover:bg-green-50 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center rounded-lg bg-[#1E5A3A] px-4 py-3 font-bold text-white transition hover:bg-[#123524]"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

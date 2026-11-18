
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Q7hQ5MRN3/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_tinya.org.ng/",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/_tinya",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tinya/",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#123524] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Organisation */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="TINYA logo"
                className="h-14 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold tracking-wide">
                TINYA
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
              The Initiative for Nigerian Youths in AgroTech promotes
              agricultural technology, youth development, agribusiness,
              and positive community impact.
            </p>

            <p className="mt-4 text-sm font-semibold text-[#C5E78B]">
              Real Technology. Positive Impact. Real Value.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TINYA on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#A7D129] hover:bg-[#A7D129] hover:text-[#123524]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-[#A7D129]" />

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-[#C5E78B]"
                  >
                    <FaArrowRight className="text-xs text-[#A7D129]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-lg font-bold">Our Focus Areas</h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-[#A7D129]" />

            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/75">
              <li>Youth Agro Entrepreneurship</li>
              <li>Smart Farming & Technology</li>
              <li>Agribusiness Skills Development</li>
              <li>Rural Community Outreach</li>
              <li>Farm Innovation & Outreach</li>
            </ul>

            <Link
              to="/programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C5E78B] transition hover:text-white"
            >
              Explore our programs <FaArrowRight />
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-[#A7D129]" />

            <ul className="mt-5 space-y-5 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#A7D129]" />
                <span>
                  19/23 Wetheral Road,
                  <br />
                  Owerri 460242, Imo State,
                  <br />
                  Nigeria
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#A7D129]" />
                <div className="space-y-2">
                  <a
                    href="tel:+2347066059456"
                    className="block transition hover:text-white"
                  >
                    +234 706 605 9456
                  </a>
                  <a
                    href="tel:+2348141811664"
                    className="block transition hover:text-white"
                  >
                    +234 814 181 1664
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#A7D129]" />
                <div className="space-y-2">
                  <a
                    href="mailto:info@tinya.org.ng"
                    className="block break-all transition hover:text-white"
                  >
                    info@tinya.org.ng
                  </a>
                  <a
                    href="mailto:support@tinya.org.ng"
                    className="block break-all transition hover:text-white"
                  >
                    support@tinya.org.ng
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TINYA. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/resources"
              className="transition hover:text-white"
            >
              Resources
            </Link>
            <Link
              to="/blog"
              className="transition hover:text-white"
            >
              Latest Articles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

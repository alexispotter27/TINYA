
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaHandHoldingHeart,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const registrationOptions = [
  {
    title: "Membership Registration",
    description:
      "Join TINYA and become part of our network of individuals, students, professionals, and institutions advancing agricultural technology.",
    path: "/portal/membership",
    icon: FaUsers,
    label: "Membership Fee Applies",
  },
  {
    title: "Volunteer Registration",
    description:
      "Contribute your skills, time, and experience to TINYA programs, community outreach, and agricultural initiatives.",
    path: "/portal/volunteer",
    icon: FaHandHoldingHeart,
    label: "Volunteer Application",
  },
  {
    title: "Become a Partner",
    description:
      "Collaborate with TINYA through institutional partnerships, technical support, funding, and development initiatives.",
    path: "/portal/partnership",
    icon: FaHandshake,
    label: "Partnership Application",
  },
];

export default function PortalHome() {
  return (
    <div>
      <section className="bg-green-950 px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-green-700 bg-green-900 px-4 py-2 text-xs font-semibold text-lime-300">
            TINYA DIGITAL REGISTRATION
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
            Join Us in Transforming
            <span className="block text-lime-400">
              Agriculture Through Technology
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-green-100 md:text-base">
            Become a member, volunteer your skills, or partner with
            TINYA to empower Nigerian youths through agricultural
            technology, innovation, and entrepreneurship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-green-950 md:text-3xl">
            How Would You Like to Get Involved?
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Select an option below to begin your application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {registrationOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.path}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-800">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-bold text-green-950">
                  {option.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {option.description}
                </p>

                <span className="mt-5 inline-flex w-fit rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                  {option.label}
                </span>

                <Link
                  to={option.path}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
                >
                  Get Started
                  <FaArrowRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white px-5 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-green-950">
            Building a Better Agricultural Future
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Real Technology, Positive Impact and Real Value.
          </p>
        </div>
      </section>
    </div>
  );
}

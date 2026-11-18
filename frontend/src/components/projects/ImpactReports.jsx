import {
  FaFilePdf,
  FaCalendarAlt,
  FaDownload,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const impactReports = [
  {
    id: 1,
    title: "Youth Agricultural Development Report",
    category: "Program Report",
    description:
      "A proposed report format for documenting agricultural training activities, participant information, and verified program outcomes.",
    publicationDate: "To be confirmed",
    file: null,
  },
  {
    id: 2,
    title: "Smart Farming & Innovation Report",
    category: "Innovation Report",
    description:
      "A proposed report format for documenting smart farming activities, agricultural technology initiatives, and verified findings.",
    publicationDate: "To be confirmed",
    file: null,
  },
  {
    id: 3,
    title: "Community Outreach & Impact Report",
    category: "Community Report",
    description:
      "A proposed report format for documenting community engagement, outreach activities, and evidence-based outcomes.",
    publicationDate: "To be confirmed",
    file: null,
  },
];

export default function ImpactReports() {
  return (
    <section
      id="impact-reports"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A7D129]/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1E5A3A]">
              <FaFileAlt />
              Transparency & Documentation
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123524] sm:text-4xl lg:text-5xl">
              Impact Reports & Publications
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#A7D129]" />

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Access reports documenting TINYA&apos;s initiatives, project
              activities, and verified outcomes as approved publications
              become available.
            </p>
          </div>

          <Link
            to="/resources"
            className="inline-flex shrink-0 items-center gap-2 self-start font-bold text-[#1E5A3A] hover:text-[#123524] md:self-auto"
          >
            Explore Resources
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impactReports.map((report) => (
            <article
              key={report.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#A7D129]/70 hover:shadow-lg sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-2xl text-red-600">
                  <FaFilePdf />
                </div>

                <span className="rounded-full bg-[#A7D129]/20 px-3 py-1.5 text-xs font-bold text-[#1E5A3A]">
                  {report.category}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-[#123524]">
                {report.title}
              </h3>

              <p className="mt-3 flex-grow text-sm leading-7 text-gray-600">
                {report.description}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-5 text-sm text-gray-500">
                <FaCalendarAlt className="text-[#1E5A3A]" />
                <span>Publication: {report.publicationDate}</span>
              </div>

              {report.file ? (
                <a
                  href={report.file}
                  download
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E5A3A] px-5 py-3 font-bold text-white transition hover:bg-[#123524] focus:outline-none focus:ring-2 focus:ring-[#A7D129] focus:ring-offset-2"
                >
                  <FaDownload />
                  Download PDF
                </a>
              ) : (
                <div className="mt-5 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                  Official report PDF pending
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#A7D129]/30 bg-[#A7D129]/10 p-5">
          <p className="text-sm leading-7 text-gray-700">
            <strong className="text-[#123524]">
              Note for publication:
            </strong>{" "}
            These are proposed report entries, not existing official
            publications. Add approved PDFs, actual publication dates, and
            verified findings before making them available to the public.
          </p>
        </div>
      </div>
    </section>
  );
}
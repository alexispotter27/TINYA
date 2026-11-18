
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F7FAF0] px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-8xl font-extrabold tracking-tight text-[#A7D129] sm:text-9xl">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold text-[#123524] sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for. It may have
          moved, or the address may be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E5A3A] px-6 py-3 font-semibold text-white transition hover:bg-[#123524]"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E5A3A]/30 px-6 py-3 font-semibold text-[#1E5A3A] transition hover:bg-green-50"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

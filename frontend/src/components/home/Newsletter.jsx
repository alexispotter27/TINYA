import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <section className="py-20 bg-[#1E5A3A]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mt-4 text-white/80">
          Subscribe to receive updates about our programs,
          events and impact stories.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >

          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              flex-1
              px-5
              py-4
              rounded-lg
              bg-white
              outline-none
            "
          />

          <button
            type="submit"
            className="
              bg-[#F4C21A]
              text-[#1E5A3A]
              px-8
              py-4
              rounded-lg
              font-bold
            "
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}
import { aboutData } from "../../data/about";

export default function OurStory() {
  const { story } = aboutData;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={story.image}
              alt="TINYA community and youth development"
              className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-[#F4C21A] p-6 shadow-xl sm:block lg:-right-6">
            <p className="text-sm font-semibold text-[#1E5A3A]">
              Agriculture
            </p>
            <p className="mt-1 text-2xl font-bold text-[#1E5A3A]">
              + Technology
            </p>
            <p className="mt-1 text-sm text-[#1E5A3A]/80">
              + Youth Empowerment
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A7D129]">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1E5A3A] sm:text-4xl lg:text-5xl">
            {story.title}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
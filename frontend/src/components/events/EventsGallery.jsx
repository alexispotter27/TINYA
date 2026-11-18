
import { useMemo, useState } from "react";
import { FaImages } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Youth Agricultural Training",
    category: "Training",
    image: "/images/contact5.png",
  },
  {
    id: 2,
    title: "Smart Farming Technology",
    category: "Technology",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Community Agricultural Outreach",
    category: "Community",
    image: "/images/program4.png",
  },
];

const categories = ["All", "Training", "Technology", "Community"];

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-[#F7FAF0] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-[#1E5A3A]">
            Moments & Memories
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#123524] sm:text-4xl">
            Events Photo Gallery
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            A visual space for showcasing TINYA's agricultural training,
            youth engagement, technology demonstrations, and community activities.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#1E5A3A] text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#1E5A3A] hover:text-[#1E5A3A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1E5A3A]"
              aria-label={`Preview ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/90 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-300">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">
                  Click to preview
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedImage(null);
          }}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <h3 className="text-lg font-bold sm:text-xl">
                {selectedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-lg bg-white/10 px-4 py-2 font-semibold hover:bg-white/20"
                aria-label="Close image preview"
              >
                Close
              </button>
            </div>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
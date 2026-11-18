import SectionTitle from "../common/SectionTitle";
import partners from "../../data/partners";

export default function Partners() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <SectionTitle
          title="Partners & Sponsors"
          subtitle="Working together with organizations that share our vision of empowering Nigerian youths through agriculture and technology."
        />

        <div className="relative overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-gray-50 to-transparent z-10"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-gray-50 to-transparent z-10"></div>

          <div className="partners-slider">

            {[...partners, ...partners].map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  shrink-0
                  bg-white
                  rounded-xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  w-45
                  h-30
                  flex
                  items-center
                  justify-center
                  p-4
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
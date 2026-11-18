const partners = [
  {
    name: "Bank of Industry",
    logo: "/images/partners/boi.png",
  },
  {
    name: "Bank of Agriculture",
    logo: "/images/partners/boa.png",
  },
  {
    name: "Federal Ministry of Agriculture",
    logo: "/images/partners/fmafs.png",
  },
  {
    name: "Federal Ministry of Youth Development",
    logo: "/images/partners/fmyd.png",
  },
  {
    name: "NIRSAL",
    logo: "/images/partners/nirsal.png",
  },
  {
    name: "IITA",
    logo: "/images/partners/iita.png",
  },
  {
    name: "NAERLS",
    logo: "/images/partners/naerls.png",
  },
  {
    name: "CBN",
    logo: "/images/partners/cbn.png",
  },
];

export default function PartnersSponsors() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-semibold text-[#A7D129]">
            Strategic Partners
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1E5A3A]">
            Partners & Sponsors
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600">
            Collaborating with government agencies, development
            organizations, financial institutions and private sector
            partners to empower Nigerian youths through agriculture
            and technology.
          </p>

        </div>

      </div>

      {/* Logo Carousel */}

      <div className="relative">

        <div className="flex animate-scroll">

          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="
                shrink-0
                mx-6
                bg-white
                rounded-3xl
                shadow-md
                w-52
                h-32
                flex
                items-center
                justify-center
                p-6
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                  max-h-20
                  object-contain
                  grayscale
                  hover:grayscale-0
                  transition
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
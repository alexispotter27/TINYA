import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function LeadershipCard({ person }) {
  const isVacant =
    person.name?.toLowerCase() === "vacant";

  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
        group
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          alt={person.name}
          src={person.image} 
          onError={(e) => {
            e.target.src =
              "/images/leadership/placeholder.jpg";
          }}
          className="
            w-full
            h-80
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {isVacant && (
          <div
            className="
              absolute
              top-4
              right-4
              bg-red-500
              text-white
              text-xs
              px-3
              py-1
              rounded-full
              font-semibold
            "
          >
            Vacant
          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-xl font-bold text-[#1E5A3A]">
          {person.name}
        </h3>

        <p className="mt-2 font-medium text-[#A7D129]">
          {person.position}
        </p>

        {(person.state || person.zone) && (
          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              px-3
              py-2
              rounded-full
              bg-gray-100
              text-sm
              text-gray-600
            "
          >
            <FaMapMarkerAlt />

            {person.state || person.zone}
          </div>
        )}

        {/* Email */}

        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="
              mt-5
              flex
              items-center
              gap-3
              text-sm
              text-gray-600
              hover:text-[#1E5A3A]
              transition
            "
          >
            <FaEnvelope />

            <span>{person.email}</span>
          </a>
        )}

        {/* LinkedIn */}

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              bg-[#1E5A3A]
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-[#16452d]
              transition
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>
        )}

      </div>
    </div>
  );
}
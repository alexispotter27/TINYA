import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

import contactData from "../../data/contactData";

export default function ContactInfo() {
  const contactItems = [
    {
      id: 1,
      icon: <FaLocationDot />,
      title: "National Secretariat",
      content: contactData.address,
    },
    {
      id: 2,
      icon: <FaPhone />,
      title: "Call Us",
      content: contactData.phones,
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: "Email Us",
      content: contactData.emails,
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Office Hours",
      content: [
        contactData.officeHours.days,
        contactData.officeHours.hours,
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => (
            <article
              key={item.id}
              className="
                rounded-3xl
                border border-gray-100
                bg-white
                p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E5A3A] text-xl text-[#F4C21A]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1E5A3A]">
                {item.title}
              </h3>

              <div className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                {Array.isArray(item.content) ? (
                  item.content.map((value) => (
                    <p key={value}>{value}</p>
                  ))
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
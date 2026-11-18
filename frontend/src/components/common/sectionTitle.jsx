export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold text-[#1E5A3A]">
        {title}
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
}
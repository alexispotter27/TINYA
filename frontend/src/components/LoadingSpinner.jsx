
import "./LoadingSpinner.css";

export default function LoadingSpinner({
  size = 100,
  label = "Loading...",
  showLabel = true,
  overlay = false,
}) {
  const spinner = (
    <div
      className="flex flex-col items-center justify-center gap-4"
      role="status"
      aria-label={label}
    >
      <div
        className="tinya-logo-spinner"
        style={{
          width: size,
          height: size,
        }}
      >
        <img
          src="/images/logo.png"
          alt="TINYA"
          className="h-full w-full object-contain"
        />
      </div>

      {showLabel && (
        <span className="text-sm font-semibold text-[#1E5A3A]">
          {label}
        </span>
      )}

      <span className="sr-only">Please wait</span>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-[2px]">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {spinner}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {spinner}
    </div>
  );
}

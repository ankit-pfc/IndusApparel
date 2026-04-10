export function RiverLines() {
  return (
    <svg
      className="absolute inset-0 opacity-30"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f3b5b" />
          <stop offset="100%" stopColor="#0f2134" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#river)" />
      <path
        d="M0 400 C 200 360, 400 440, 600 400 C 800 360, 1000 440, 1200 400"
        stroke="#ffffff10"
        strokeWidth="40"
        fill="none"
      />
      <path
        d="M0 470 C 200 430, 400 510, 600 470 C 800 430, 1000 510, 1200 470"
        stroke="#ffffff08"
        strokeWidth="28"
        fill="none"
      />
    </svg>
  );
}

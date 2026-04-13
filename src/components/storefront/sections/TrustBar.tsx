"use client";

const ITEMS = [
  "Free shipping over \u20B95,000",
  "30-day repair guarantee",
  "Made in India",
  "Copper hardware on every pair",
  "Chainstitched hems",
  "India-first fit blocks",
];

export function TrustBar() {
  return (
    <div className="bg-sand-selvedge py-2.5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs sm:text-sm font-medium text-indus-deep tracking-wide mx-4 sm:mx-6"
          >
            <span className="text-copper-rivet mr-4 sm:mr-6">&bull;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

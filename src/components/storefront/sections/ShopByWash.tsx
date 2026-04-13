"use client";

import { useRef } from "react";
import Image from "next/image";
import { Washes } from "@/brand";
import { Container } from "@/components/ui";

function washImageSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const WASH_DESCRIPTIONS: Record<string, string> = {
  "Rinse Indigo": "One-dip indigo. Clean, dark, versatile.",
  "Dark Rinse": "Near-raw depth. Fades with wear.",
  "Mid Indigo (Eco)": "Ozone + laser finish. No stone.",
  "Storm Grey": "Sulphur-overdyed. Monsoon-season neutral.",
  "Overdyed Black": "Double-dyed indigo + black top.",
  "Ecru (Undyed)": "Zero-wash raw cotton. Natural ecru tone.",
  "Copper Rigid": "Unwashed rigid. Develop your own creases.",
};

export function ShopByWash() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16 sm:py-20 bg-indus-deep text-white">
      <Container>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
          Wash Library
        </p>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Seven washes. All responsible.
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Scroll left"
            >
              &lsaquo;
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Scroll right"
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8"
      >
        {/* Left spacer for centering on large screens */}
        <div className="hidden lg:block min-w-[calc((100vw-80rem)/2)] shrink-0" />

        {Washes.map((wash) => (
          <div
            key={wash.name}
            className="min-w-[240px] sm:min-w-[280px] snap-start shrink-0 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={`/images/washes/${washImageSlug(wash.name)}.png`}
                alt={wash.name}
                fill
                className="object-cover"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">{wash.name}</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-white/60 leading-relaxed">
                {WASH_DESCRIPTIONS[wash.name] ?? "Responsibly finished."}
              </p>
            </div>
          </div>
        ))}

        <div className="hidden lg:block min-w-[calc((100vw-80rem)/2)] shrink-0" />
      </div>
    </section>
  );
}

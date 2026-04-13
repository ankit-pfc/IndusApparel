"use client";

import { useState } from "react";
import { JeansFlat } from "@/components/product";

export interface ImageGalleryProps {
  tone: string;
  alt: string;
}

const VIEWS = ["front", "back"] as const;
type View = (typeof VIEWS)[number];

export function ImageGallery({ tone, alt }: ImageGalleryProps) {
  const [view, setView] = useState<View>("front");

  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-sand-selvedge aspect-[4/5] flex items-center justify-center p-8"
        aria-label={`${alt} — ${view} view`}
      >
        <div className="w-full max-w-xs">
          <JeansFlat variant={view} tone={tone} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            aria-label={`${v} view`}
            className={`rounded-lg overflow-hidden ring-1 aspect-square flex items-center justify-center p-3 transition ${
              view === v
                ? "ring-indus-deep ring-2 bg-white"
                : "ring-black/10 bg-white/60 hover:bg-white"
            }`}
          >
            <div className="w-full">
              <JeansFlat variant={v} tone={tone} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

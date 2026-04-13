"use client";

import { useState } from "react";
import Image from "next/image";

export interface ImageGalleryProps {
  sku: string;
  alt: string;
}

const VIEWS = ["front", "back", "detail", "on-model"] as const;
type View = (typeof VIEWS)[number];

const VIEW_LABELS: Record<View, string> = {
  front: "Front",
  back: "Back",
  detail: "Detail",
  "on-model": "On Model",
};

export function ImageGallery({ sku, alt }: ImageGalleryProps) {
  const [view, setView] = useState<View>("front");
  const dir = `/images/products/${sku.toLowerCase()}`;

  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-sand-selvedge aspect-[4/5] relative"
        aria-label={`${alt} — ${view} view`}
      >
        <Image
          key={view}
          src={`${dir}/${view}.png`}
          alt={`${alt} — ${VIEW_LABELS[view]} view`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            aria-label={`${VIEW_LABELS[v]} view`}
            className={`rounded-lg overflow-hidden ring-1 aspect-square relative transition ${
              view === v
                ? "ring-indus-deep ring-2"
                : "ring-black/10 hover:ring-black/30"
            }`}
          >
            <Image
              src={`${dir}/${v}.png`}
              alt={VIEW_LABELS[v]}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Container, Section } from "@/components/ui";
import { FitCard } from "@/components/product";
import { Fits } from "@/brand";
import { MEASUREMENT_GUIDE, SIZE_CHART } from "@/lib/size-data";

export default function SizeGuidePage() {
  const [activeFit, setActiveFit] = useState<string>(Fits[0].code);
  const rows = SIZE_CHART[activeFit] ?? [];
  const activeFitMeta = Fits.find((f) => f.code === activeFit) ?? Fits[0];

  return (
    <>
      <section className="bg-sand-selvedge border-b border-black/5">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
              Size &amp; Fit
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-indus-deep">
              Size Guide
            </h1>
            <p className="mt-4 max-w-2xl text-monsoon-grey leading-relaxed">
              All measurements are body measurements, not garment
              measurements. If you&apos;re between sizes, size up for
              comfort-fits and size down for slim fits.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-monsoon-grey mb-2">
            Step by step
          </div>
          <h2 className="font-serif text-3xl font-semibold text-gray-900">
            How to measure
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MEASUREMENT_GUIDE.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-white ring-1 ring-black/10"
            >
              <div className="w-10 h-10 rounded-full bg-indus-deep text-white flex items-center justify-center font-serif text-lg font-semibold">
                {step.step}
              </div>
              <div className="mt-4 font-semibold text-gray-900">
                {step.title}
              </div>
              <p className="mt-2 text-sm text-monsoon-grey leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="sand">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-2">
            Size tables
          </div>
          <h2 className="font-serif text-3xl font-semibold text-indus-deep">
            Measurements by fit
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Choose a fit">
          {Fits.map((fit) => {
            const active = fit.code === activeFit;
            return (
              <button
                key={fit.code}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFit(fit.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium ring-1 transition ${
                  active
                    ? "bg-indus-deep text-white ring-indus-deep"
                    : "bg-white ring-gray-300 hover:ring-gray-900 text-gray-900"
                }`}
              >
                {fit.name}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl bg-white ring-1 ring-black/10 overflow-hidden">
          <div className="p-5 border-b border-black/5">
            <div className="font-serif text-xl font-semibold text-indus-deep">
              {activeFitMeta.name}
            </div>
            <div className="text-xs text-monsoon-grey mt-1">
              Hem {activeFitMeta.hem} &bull; Rise {activeFitMeta.rise} &bull;{" "}
              {activeFitMeta.desc}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-sand-selvedge text-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Size</th>
                  <th className="px-4 py-3 text-left font-semibold">Waist</th>
                  <th className="px-4 py-3 text-left font-semibold">Hip</th>
                  <th className="px-4 py-3 text-left font-semibold">Thigh</th>
                  <th className="px-4 py-3 text-left font-semibold">Inseam</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.size}
                    className="border-t border-black/5 text-monsoon-grey"
                  >
                    <td className="px-4 py-3 font-mono font-semibold text-gray-900">
                      {r.size}
                    </td>
                    <td className="px-4 py-3">{r.waist}</td>
                    <td className="px-4 py-3">{r.hip}</td>
                    <td className="px-4 py-3">{r.thigh}</td>
                    <td className="px-4 py-3">{r.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-monsoon-grey mb-2">
            Compare
          </div>
          <h2 className="font-serif text-3xl font-semibold text-gray-900">
            All six fits, side by side
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Fits.map((fit) => (
            <Link
              key={fit.code}
              href={`/jeans?fit=${fit.code}`}
              className="block hover:opacity-90 transition-opacity"
            >
              <FitCard fit={fit} />
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
            Not sure where to start?
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
            Start with the Slim Taper.
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            It&apos;s the most forgiving fit in our range — mid-rise, clean
            thigh, narrow hem. If it&apos;s your first INDUS pair, start here.
          </p>
          <div className="mt-8">
            <Link href="/jeans">
              <Button size="lg" className="bg-white text-indus-deep hover:bg-white/90">
                Shop Slim Taper
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

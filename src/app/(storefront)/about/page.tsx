import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { RiverLines, Seal } from "@/components/brand";
import { DenimSwatch } from "@/components/product";
import { Washes } from "@/brand";

export const metadata: Metadata = {
  title: "Our Story — INDUS",
  description:
    "INDUS is denim cut for India — India-first fit blocks, responsible washes, and copper-rivet construction made to last.",
};

const CRAFT_CARDS = [
  {
    title: "India-first Fit Blocks",
    body: "Rise, thigh, and hem graded from scratch for Indian morphology — not a scaled-down import pattern.",
  },
  {
    title: "Responsible Washes",
    body: "Ozone, laser, and mild enzyme finishing. Lower water consumption, no heavy chemistry.",
  },
  {
    title: "Copper Hardware",
    body: "Solid copper rivets and a 3-prong shank button. Salt-spray tested. Hand-set at the atelier.",
  },
  {
    title: "Repair Guarantee",
    body: "In-house and partner darning. Spare hardware ships inside every selvedge pair.",
  },
];

const VALUES = [
  {
    title: "Quality",
    body: "12–14 SPI seams. Chainstitched hems. No corners cut on construction.",
  },
  {
    title: "Sustainability",
    body: "Lower-impact washes, recycled packaging, and products built to be repaired, not replaced.",
  },
  {
    title: "Accessibility",
    body: "A full fit range graded for real Indian bodies, at prices that make premium denim attainable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-indus-deep text-white overflow-hidden">
        <RiverLines />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/70 mb-5">
              Our Story
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-[1.05]">
              A denim brand born by the river.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              INDUS is a modern denim house from India. We build jeans for the
              way Indians actually move, wear, and live — drafted from
              first-principles patterns, sewn with honest construction, and
              finished by hand.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
              Origin
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep">
              Every river has a source.
            </h2>
            <p className="mt-5 text-monsoon-grey leading-relaxed">
              Indian denim has always been made in India — but the fit blocks
              came from somewhere else. We started INDUS because we were tired
              of pulling imported patterns off a rack and sizing them down
              until something kind-of worked. Our jeans are drafted from
              ground-up measurements on real Indian bodies. The rise sits
              where you expect it. The thigh has room without looking loose.
              The hem lands where it should.
            </p>
            <p className="mt-4 text-monsoon-grey leading-relaxed">
              We&apos;re called INDUS after the river that runs through the
              subcontinent&apos;s denim history — from Dholavira cotton fields
              to Ahmedabad looms to the wash houses of Bengaluru. Every pair
              carries a bit of that route.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="scale-[3]">
              <Seal />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="sand">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
            Craftsmanship
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep">
            Four rules we refuse to compromise.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CRAFT_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl bg-white ring-1 ring-black/10"
            >
              <div className="font-semibold text-gray-900 mb-2">
                {card.title}
              </div>
              <p className="text-sm text-monsoon-grey leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
              Fabric
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep">
              Sourced close. Woven honest.
            </h2>
            <p className="mt-5 text-monsoon-grey leading-relaxed">
              Our fabrics come from Ahmedabad and Tirupur mills — shuttle
              looms for selvedge, rope-dyed indigo for everyday fits, and an
              undyed ecru for summer pairs. Every wash is finished in India,
              at facilities we&apos;ve audited ourselves.
            </p>
          </div>
          <div className="space-y-4">
            {Washes.slice(0, 5).map((w) => (
              <DenimSwatch key={w.name} name={w.name} stops={w.stops} />
            ))}
          </div>
        </div>
      </Section>

      <Section bg="dark">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-5">
            Mission
          </div>
          <p className="font-serif text-4xl sm:text-5xl font-semibold leading-tight">
            &ldquo;Made in India. Worn everywhere.&rdquo;
          </p>
        </div>
      </Section>

      <Section bg="sand">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
            Values
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep">
            What we stand for.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-xl bg-white ring-1 ring-black/10"
            >
              <div className="font-serif text-xl font-semibold text-indus-deep mb-2">
                {v.title}
              </div>
              <p className="text-sm text-monsoon-grey leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

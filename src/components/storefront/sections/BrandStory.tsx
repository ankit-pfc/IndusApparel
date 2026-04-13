import Link from "next/link";
import { Seal } from "@/components/brand";
import { Container } from "@/components/ui";

export function BrandStory() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Mobile: seal on top */}
          <div className="flex justify-center mb-10 lg:hidden">
            <div className="w-24 h-24">
              <Seal />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
              Our Origin
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep">
              Every river has a source.
            </h2>
            <p className="mt-6 text-monsoon-grey leading-relaxed">
              INDUS began where India&apos;s cotton fields meet its oldest trade
              routes. We asked a simple question: why should Indian men pay
              &#8377;8,000 for imported jeans graded on foreign body data &mdash;
              or settle for &#8377;999 stretch denim that falls apart in three
              months?
            </p>
            <p className="mt-4 text-monsoon-grey leading-relaxed">
              So we built a denim line from the ground up: fit blocks graded on
              Indian anthropometric data, fabric from Indian mills, washed in
              Bengaluru, finished with copper hardware and chainstitched hems. No
              middleman markups. No trend chasing. Just honest jeans.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-colors bg-indus-deep text-white hover:bg-[#1a3d62] px-6 py-3 text-base h-12"
              >
                Read Our Story &rarr;
              </Link>
            </div>
          </div>

          {/* Desktop: seal on right */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sand-selvedge to-white scale-150 blur-3xl opacity-60" />
              <div className="relative w-48 h-48">
                <Seal />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

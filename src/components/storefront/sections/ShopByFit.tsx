import Link from "next/link";
import { Fits } from "@/brand";
import { FitCard } from "@/components/product";
import { Container } from "@/components/ui";

export function ShopByFit() {
  return (
    <section className="py-16 sm:py-20 bg-sand-selvedge">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
          Find your fit
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep mb-8">
          Six fits. One designed for you.
        </h2>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {Fits.map((fit) => (
            <Link
              key={fit.code}
              href={`/jeans?fit=${fit.code}`}
              className="block group"
            >
              <div className="transition-all group-hover:ring-copper-rivet group-hover:ring-2 rounded-xl">
                <FitCard fit={fit} />
              </div>
              <p className="mt-2 text-sm font-medium text-indus-deep group-hover:text-copper-rivet transition-colors px-4 md:px-0">
                Shop {fit.name} &rarr;
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

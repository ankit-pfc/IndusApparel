import { Container } from "@/components/ui";

export interface CollectionHeroProps {
  title: string;
  description: string;
  productCount: number;
}

export function CollectionHero({
  title,
  description,
  productCount,
}: CollectionHeroProps) {
  return (
    <section className="bg-sand-selvedge border-b border-black/5">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
            Collection
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-indus-deep">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-monsoon-grey leading-relaxed">
            {description}
          </p>
          <div className="mt-5 text-sm font-mono text-monsoon-grey">
            {productCount} {productCount === 1 ? "style" : "styles"}
          </div>
        </div>
      </Container>
    </section>
  );
}

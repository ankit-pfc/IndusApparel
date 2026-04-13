import { Seal } from "@/components/brand";
import { Container } from "@/components/ui";

export function ClosingStatement() {
  return (
    <section className="py-16 sm:py-28 bg-sand-selvedge">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <Seal />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-indus-deep leading-tight">
            Made in India. Worn everywhere.
          </h2>
          <p className="mt-4 text-monsoon-grey">
            Born by the river. Built for the road.
          </p>
        </div>
      </Container>
    </section>
  );
}

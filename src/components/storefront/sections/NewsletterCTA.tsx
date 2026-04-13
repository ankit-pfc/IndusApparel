import { RiverLines } from "@/components/brand";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { Container } from "@/components/ui";

export function NewsletterCTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-indus-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <RiverLines />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            Stay in the loop
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            River notes from INDUS.
          </h2>
          <p className="text-white/60 mt-4 mb-8">
            New drops, fit guides, and field stories. No spam. Unsubscribe
            anytime.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Seal } from "@/components/brand";
import { Container } from "@/components/ui";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/navigation";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indus-deep text-white mt-auto">
      <Container>
        <div className="py-16 sm:py-20 grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Seal />
              <div>
                <div className="font-serif text-2xl font-semibold tracking-wide">
                  {SITE_NAME}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Est. India
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
              Explore
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/brand-book"
              className="text-sm text-white/80 hover:text-white transition-colors w-fit"
            >
              Brand Book
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
              Newsletter
            </div>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              River notes from INDUS. New drops, fit guides, field stories.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/50">
          <span>© {year} INDUS Apparels. Made in India.</span>
          <span className="font-mono">Born by the river. Built for the road.</span>
        </div>
      </Container>
    </footer>
  );
}

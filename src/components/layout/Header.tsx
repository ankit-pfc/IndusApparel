import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { Container } from "@/components/ui";
import { NAV_LINKS } from "@/lib/navigation";
import { CartButton } from "./CartButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            aria-label="INDUS home"
            className="flex items-center"
          >
            <Wordmark />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-900 hover:text-indus-deep transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CartButton />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

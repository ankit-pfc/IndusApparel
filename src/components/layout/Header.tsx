import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { Container } from "@/components/ui";
import { NAV_LINKS } from "@/lib/navigation";
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
            <button
              type="button"
              aria-label="Cart"
              className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <CartIcon />
            </button>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

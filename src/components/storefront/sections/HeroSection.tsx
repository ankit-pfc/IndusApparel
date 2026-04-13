import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-indus-deep overflow-hidden">
      {/* Hero image — right half, fades left into the dark background */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Image
          src="/images/hero/homepage.png"
          alt="INDUS denim — India-first fit"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indus-deep via-indus-deep/70 to-transparent lg:via-indus-deep/20" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0s" }}
          >
            India-first denim
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Denim cut for the way India moves.
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Six fits graded on Indian body data. Copper hardware. Chainstitched
            hems. From &#8377;2,999.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/jeans"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors bg-white text-indus-deep hover:bg-sand-selvedge px-6 py-3.5 text-base h-12"
            >
              Shop Jeans
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors ring-1 ring-white/30 text-white hover:bg-white/10 px-6 py-3.5 text-base h-12"
            >
              Our Story
            </Link>
          </div>

          <div
            className="mt-6 flex flex-wrap gap-3 text-xs text-white/50 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="bg-white/5 rounded-full px-3 py-1">
              Free shipping over &#8377;5,000
            </span>
            <span className="bg-white/5 rounded-full px-3 py-1">
              30-day repair guarantee
            </span>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}

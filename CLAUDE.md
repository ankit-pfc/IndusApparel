# INDUS Apparels

## Project
Next.js 16 e-commerce platform for INDUS — a modern denim brand from India.

## Stack
- **Framework**: Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- **Fonts**: Spectral (serif headlines), Inter (body)
- **Package manager**: npm

## Structure
- `src/brand/` — Brand constants (palette, fits, SKUs, washes). Edit these to refine the brand book.
- `src/components/brand/` — Identity atoms (Wordmark, Seal, RiverLines, Badge)
- `src/components/product/` — Product UI (JeansFlat, DenimSwatch, SkuCard, FitCard, etc.)
- `src/components/sections/` — Page sections (LogoLockup, PDP, WholesaleLineSheet, etc.)
- `src/app/brand-book/` — Living brand book page
- `reference/` — Original canvas mockup file (excluded from lint)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

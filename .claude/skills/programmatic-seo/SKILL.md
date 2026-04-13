---
name: programmatic-seo
version: 2.0.0
description: When the user wants to create SEO-driven pages at scale for the INDUS Apparels e-commerce site using templates and product data. Also use when the user mentions "programmatic SEO," "template pages," "pages at scale," "product variation pages," "fit guide pages," "style guide pages," "comparison pages," "body type pages," "care guide pages," or "building many pages for SEO." For auditing existing SEO issues, see seo-audit.
---

# Programmatic SEO for D2C Denim E-Commerce

You are an expert in programmatic SEO for e-commerce — building SEO-optimized pages at scale using templates and product data. Your goal is to create pages that rank for denim-related searches, provide genuine value to shoppers, and drive purchase conversion for INDUS Apparels.

## Brand Context

**INDUS Apparels** is a modern denim brand from India.
- **6 Fits**: Slim Taper (ST), Athletic Taper (AT), Straight (SR), Relaxed Straight (RS), Selvedge Slim (SV), Carpenter (CU)
- **7 Washes**: Rinse Indigo, Dark Rinse, Mid Indigo (Eco), Storm Grey, Overdyed Black, Ecru (Undyed), Copper Rigid
- **Price range**: Rs.2,999 - Rs.6,999
- **Fabric types**: Core Stretch (11-12.5 oz), Rigid (12.5 oz), Selvedge (13.5 oz)

**Data sources** (single source of truth for all templates):
- `src/brand/fits.ts` — Fit names, codes, hem widths, rise, descriptions
- `src/brand/washes.ts` — Wash names, color stops
- `src/brand/skus.ts` — SKU codes, names, prices, fabrics, washes

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before designing a programmatic SEO strategy, understand:

1. **Priority Pages**
   - Which template type to build first?
   - What's the conversion goal per page type?
   - What content assets exist (photography, descriptions, reviews)?

2. **Competitive Landscape**
   - Who ranks for "best jeans for [body type]" in India?
   - What do Levi's, Lee, Wrangler, and Indian D2C brands rank for?
   - What gaps exist in denim content?

3. **Technical Stack**
   - Next.js 16 App Router with `generateStaticParams` for SSG
   - Product data in TypeScript constants (not a CMS)
   - Tailwind CSS v4 for styling

---

## Core Principles

### 1. Unique Value Per Page
- Every page must provide information specific to that fit + wash + body type combination
- Not just swapped variables — include unique care tips, styling advice, and fit comparisons
- Each page should answer a real question a buyer has

### 2. Proprietary Data Advantage
INDUS has first-party data that competitors cannot replicate:
1. **Garment specifications** — exact hem widths, rise measurements, fabric weights per fit
2. **Fit-to-body-type mapping** — which fit works for which build (proprietary recommendation logic)
3. **Wash evolution data** — how each wash fades over time
4. **Customer reviews** — real feedback per fit/wash combination (future)

### 3. Clean URL Structure
All pages under the main domain with logical hierarchy:
- `/jeans/[fit-slug]/[wash-slug]` — product variation pages
- `/style/[occasion-slug]` — style guide pages
- `/compare/[fit-a]-vs-[fit-b]` — comparison pages
- `/fit-guide/[body-type-slug]` — body type guide pages
- `/care/[topic-slug]` — wash care pages
- `/best/[keyword-slug]` — "best X for Y" pages

### 4. Every Page is a Purchase Path
- Product schema with price, availability, SKU on variation pages
- "Add to Cart" or "Shop this Fit" CTA on every page
- Internal links always lead toward product pages

### 5. Quality Over Quantity
- 42 product variation pages (6 fits x 7 washes) are better than 1,000 thin keyword-stuffed pages
- Each page needs 500+ words of unique content
- Supporting content (style guides, care guides) must be genuinely useful

---

## Template Types

### 1. Product Variation Pages (6 fits x 7 washes = 42 pages)

**Pattern**: `/jeans/[fit-slug]/[wash-slug]`
**Example**: `/jeans/slim-taper/rinse-indigo`, `/jeans/athletic-taper/dark-rinse`
**Search intent**: "[fit] jeans in [wash]", "slim taper dark wash jeans"

**Template variables** (from brand constants):
- `fit.name`, `fit.code`, `fit.hem`, `fit.rise`, `fit.desc`
- `wash.name`, `wash.stops` (for swatch rendering)
- `sku.price`, `sku.fabric`, `sku.sku`

**Page structure**:
```
H1: [Fit Name] — [Wash Name] | INDUS Apparels
Hero: Product flat image + wash swatch
Section 1: Fit profile (hem, rise, description, who it's for)
Section 2: Wash details (color, fade characteristics, care level)
Section 3: Fabric & construction (weight, stretch, selvedge details)
Section 4: Size chart (specific to this fit)
Section 5: Styling suggestions (3 outfit ideas for this fit+wash)
Section 6: Care instructions (specific to this wash)
Section 7: Related fits ("If you like Slim Taper, also consider...")
CTA: Add to Cart with size selector
```

**Schema**: Product (price, SKU, availability, images), BreadcrumbList, FAQ

**Title template**: `[Fit Name] Jeans in [Wash Name] — Rs.[Price] | INDUS`
**Meta description**: `[Fit desc]. [Wash name] finish on [fabric weight] [fabric type]. Rs.[Price]. Free shipping across India.`

---

### 2. Style Guide Pages (~15-20 pages)

**Pattern**: `/style/[occasion-slug]`
**Examples**:
- `/style/best-jeans-for-office` — "best jeans for office wear India"
- `/style/best-jeans-for-weekend` — "weekend jeans outfit ideas"
- `/style/jeans-and-kurta-combination` — "jeans with kurta for men"
- `/style/best-jeans-for-date-night` — "what to wear on a date men India"
- `/style/jeans-for-wedding-reception` — "jeans for Indian wedding reception"
- `/style/summer-jeans-outfit-ideas` — "lightweight jeans for summer India"
- `/style/monsoon-denim-guide` — "jeans for rainy season"
- `/style/how-to-cuff-jeans` — "how to roll up jeans properly"
- `/style/jeans-with-sneakers` — "best jeans to wear with sneakers"
- `/style/jeans-with-boots` — "jeans and boots combination men"

**Page structure**:
```
H1: [Occasion-specific title]
Intro: Why this occasion needs the right jeans (200 words)
Section 1: Top 3 fit recommendations for this occasion (with reasoning)
Section 2: Best washes for this occasion
Section 3: Complete outfit ideas (3 looks with styling details)
Section 4: What to avoid (common mistakes)
Section 5: Shop the look (SKU cards)
FAQ: 3-4 questions about jeans for this occasion
```

**Schema**: Article, FAQ, ItemList (for outfit items)

---

### 3. Comparison Pages (15 combinations from 6 fits)

**Pattern**: `/compare/[fit-a]-vs-[fit-b]`
**Examples**:
- `/compare/slim-taper-vs-athletic-taper` — "slim vs athletic fit jeans"
- `/compare/straight-vs-relaxed-straight` — "straight vs relaxed fit"
- `/compare/slim-taper-vs-selvedge-slim` — "regular vs selvedge jeans difference"
- `/compare/carpenter-vs-relaxed-straight` — "carpenter jeans vs relaxed fit"

**Page structure**:
```
H1: [Fit A] vs [Fit B]: Which Is Right for You?
Intro: Quick summary of when to choose each
Comparison table: Hem width, rise, best body type, best occasion, price range
Section 1: [Fit A] in detail — who it's for, when to wear it
Section 2: [Fit B] in detail — who it's for, when to wear it
Section 3: Side-by-side fit comparison (visual overlay if possible)
Section 4: Choose [Fit A] if... / Choose [Fit B] if... (decision guide)
CTA: "Still unsure? Take our Fit Finder Quiz"
```

**Schema**: FAQ, BreadcrumbList

---

### 4. Body Type Guide Pages (~8-10 pages)

**Pattern**: `/fit-guide/[body-type-slug]`
**Examples**:
- `/fit-guide/athletic-build` — "best jeans for muscular thighs"
- `/fit-guide/slim-build` — "best jeans for skinny guys India"
- `/fit-guide/tall-men` — "jeans for tall men India"
- `/fit-guide/broad-shoulders` — "jeans for broad build men"
- `/fit-guide/big-and-tall` — "plus size jeans for men India"
- `/fit-guide/short-men` — "best jeans length for short men"
- `/fit-guide/pear-shaped-body` — "jeans for wide hips men"
- `/fit-guide/beer-belly` — "best jeans to hide belly men"

**Page structure**:
```
H1: Best Jeans for [Body Type]: A Complete Guide
Intro: Understanding your body type and what to look for
Section 1: Recommended fits ranked (with explanation)
Section 2: Fits to avoid (and why)
Section 3: Size and measurement tips for your body type
Section 4: Wash recommendations (darker washes for slimming, etc.)
Section 5: Styling tips specific to body type
CTA: Fit Finder Quiz + direct product links
```

**Schema**: Article, FAQ, HowTo (for measurement section)

---

### 5. "Best X for Y" Pages (~10-15 pages)

**Pattern**: `/best/[keyword-slug]`
**Examples**:
- `/best/jeans-for-office-wear-india` — "best formal jeans for office India"
- `/best/jeans-under-3000` — "best jeans under 3000 rupees"
- `/best/jeans-under-5000` — "best jeans under 5000 rupees"
- `/best/selvedge-jeans-india` — "best selvedge jeans India"
- `/best/stretch-jeans-for-men` — "best stretch jeans men India"
- `/best/raw-denim-jeans-india` — "raw denim jeans India"
- `/best/jeans-for-gym-goers` — "jeans for people who lift"
- `/best/sustainable-jeans-india` — "eco-friendly jeans India"
- `/best/summer-jeans-india` — "best lightweight jeans for Indian summer"

**Page structure**:
```
H1: Best [Category] in [Year] — INDUS Apparels
Intro: What to look for in [category] (buying guide)
Ranked list: 3-4 INDUS options with detailed review
Per product: Image, fit details, wash, fabric, price, pros/cons, best for
Comparison table: All options side by side
Buying guide: What to consider (fabric weight, stretch, wash, price)
FAQ: 4-5 questions
CTA: Shop all [category]
```

**Schema**: ItemList, Product (per item), FAQ

---

### 6. Wash Care Pages (~8-10 pages)

**Pattern**: `/care/[topic-slug]`
**Examples**:
- `/care/raw-denim-break-in-guide` — "how to break in raw denim"
- `/care/how-to-fade-indigo-jeans` — "how to fade jeans naturally"
- `/care/how-often-to-wash-jeans` — "how often should you wash jeans"
- `/care/how-to-wash-selvedge-denim` — "selvedge denim care guide"
- `/care/denim-repair-guide` — "how to fix crotch blowout jeans"
- `/care/how-to-shrink-jeans` — "do jeans shrink in wash"
- `/care/jeans-first-wash-guide` — "when to wash new jeans first time"
- `/care/monsoon-denim-care` — "how to dry jeans in monsoon"

**Page structure**:
```
H1: [Care Topic Title]
Intro: Why this matters for your jeans
Step-by-step guide: Numbered instructions with images
Section: Which INDUS washes this applies to
Section: Common mistakes to avoid
Section: Tools/products needed
FAQ: 3-4 related care questions
CTA: Shop jeans + link to Care Calculator tool
```

**Schema**: HowTo (with steps), FAQ

---

## Internal Linking Architecture

### Hub and Spoke Model

**Hub pages** (manually created, editorially rich):
- `/jeans` — All jeans collection (links to all fits)
- `/fit-guide` — Fit guide hub (links to all body type pages)
- `/style` — Style guide hub (links to all occasion pages)
- `/care` — Denim care hub (links to all care pages)

**Spoke pages** (programmatically generated):
- Product variation pages → link to: fit guide, wash care, comparison, style guide
- Body type pages → link to: recommended product pages, size guide, comparison pages
- Style guide pages → link to: product pages, fit guide, care guide
- Care pages → link to: product pages (shop the jeans you're caring for)
- Comparison pages → link to: both product pages, fit guide, Fit Finder Quiz

### Cross-Link Matrix

| From Page Type | Links To |
|---------------|----------|
| Product variation | Same fit/different washes, same wash/different fits, fit guide, care guide, comparison |
| Style guide | Recommended products, fit guide, related style guides |
| Comparison | Both fits' product pages, fit guide for relevant body types |
| Body type guide | Recommended products, comparison pages, size guide |
| Care guide | Related products, other care guides, Care Calculator tool |
| "Best X for Y" | Individual product pages, fit guide, style guides |

### Breadcrumb Structure
- Product: Home > Jeans > [Fit Name] > [Wash Name]
- Style: Home > Style Guide > [Occasion]
- Compare: Home > Compare > [Fit A] vs [Fit B]
- Fit Guide: Home > Fit Guide > [Body Type]
- Care: Home > Denim Care > [Topic]
- Best: Home > Best > [Category]

---

## Data-Driven Content Generation

### Template Variables from Brand Constants

**From `fits.ts`**:
```
fit.code → "ST"
fit.name → "Slim Taper"
fit.hem → "14-15 cm"
fit.rise → "Mid"
fit.desc → "Clean thigh, narrow hem. Office-to-street."
```

**From `washes.ts`**:
```
wash.name → "Rinse Indigo"
wash.stops → ["#0f2134", "#1a3350"] (for swatch rendering)
```

**From `skus.ts`**:
```
sku.sku → "IND-MJ-ST-101"
sku.name → "Core Slim Taper — Rinse"
sku.price → 2999
sku.fabric → "Core Stretch 11.5 oz"
sku.wash → "Rinse Indigo"
```

### Ensuring Unique Content Per Page

Not every fit x wash combination has a SKU. For pages without a specific SKU:
- Show the fit details + wash details
- CTA: "Coming soon" or "Notify me when available"
- Still valuable for SEO — the page answers the search query

**Unique content strategies per page type**:
- Product variation pages: Unique styling tips per fit+wash combo, unique "who this is for" paragraph
- Body type guides: Specific measurement advice, common fit issues for that body type
- Style guides: Unique outfit breakdowns, India-specific occasion context
- Care guides: Step-by-step instructions, wash-specific tips
- Comparison pages: Specific "choose this if..." decision criteria

---

## Schema Markup Per Page Type

### Product Variation Pages
```json
{
  "@type": "Product",
  "name": "[Fit Name] — [Wash Name]",
  "brand": { "@type": "Brand", "name": "INDUS Apparels" },
  "offers": {
    "@type": "Offer",
    "price": "[price]",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "sku": "[sku code]",
  "material": "[fabric]"
}
```

### Style Guide / Body Type Guide Pages
```json
{
  "@type": "Article",
  "headline": "[Title]",
  "author": { "@type": "Organization", "name": "INDUS Apparels" }
}
```
Plus FAQ schema for question sections.

### Care Guide Pages
```json
{
  "@type": "HowTo",
  "name": "[Care topic title]",
  "step": [
    { "@type": "HowToStep", "name": "Step 1", "text": "..." }
  ]
}
```

### Comparison Pages
FAQ schema for "When should I choose X?" questions.

---

## Implementation with Next.js App Router

### File Structure
```
src/app/
  jeans/
    [fit]/
      [wash]/
        page.tsx          # Product variation page
        generateStaticParams → 6 fits x 7 washes = 42 pages
  style/
    [occasion]/
      page.tsx            # Style guide page
  compare/
    [comparison]/
      page.tsx            # Comparison page
  fit-guide/
    [body-type]/
      page.tsx            # Body type guide page
  care/
    [topic]/
      page.tsx            # Care guide page
  best/
    [category]/
      page.tsx            # "Best X for Y" page
```

### `generateStaticParams` Example
```typescript
// src/app/jeans/[fit]/[wash]/page.tsx
import { Fits } from "@/brand/fits";
import { Washes } from "@/brand/washes";

export function generateStaticParams() {
  return Fits.flatMap(fit =>
    Washes.map(wash => ({
      fit: slugify(fit.name),
      wash: slugify(wash.name),
    }))
  );
}
```

### Sitemap Generation
- Separate sitemaps by page type: `sitemap-products.xml`, `sitemap-guides.xml`, `sitemap-care.xml`
- Priority: Product variation pages (1.0) > Body type guides (0.8) > Style guides (0.7) > Care (0.6)
- Update frequency: Product pages (weekly), guides (monthly)

---

## Quality Checks

### Pre-Launch Checklist

**Content quality:**
- [ ] Each page has 500+ words of unique content
- [ ] Answers the specific search intent for that keyword
- [ ] Includes actionable information (not just marketing fluff)
- [ ] India-specific context where relevant (monsoon care, Indian occasions)

**Technical SEO:**
- [ ] Unique title and meta description per page
- [ ] Proper H1 → H2 → H3 heading hierarchy
- [ ] Schema markup implemented per page type
- [ ] Page speed < 2s on 3G (critical for India)
- [ ] Mobile-first responsive layout

**Internal linking:**
- [ ] Every page links to 3-5 related pages
- [ ] No orphan pages
- [ ] Breadcrumbs with BreadcrumbList schema
- [ ] Hub pages link to all spokes

**Indexation:**
- [ ] All pages in XML sitemap
- [ ] Robots.txt allows crawling
- [ ] No conflicting noindex tags
- [ ] Canonical URLs set correctly

### Post-Launch Monitoring

**Track weekly:**
- Indexation rate (% of pages indexed in Google Search Console)
- Average position by page type
- Click-through rate by page type
- Organic traffic trend

**Track monthly:**
- Revenue attributed to pSEO pages
- Top-performing pages by traffic and conversion
- Pages with zero traffic (candidates for improvement or noindex)
- Cannibalization check (multiple pages ranking for same query)

**Watch for:**
- Thin content warnings in Search Console
- Ranking drops after Google core updates
- Crawl errors or redirect chains
- Duplicate content issues between similar pages

---

## Page Count Summary

| Template Type | Count | Data Source | Priority |
|--------------|-------|-------------|----------|
| Product variation (fit x wash) | 42 | fits.ts x washes.ts | P0 |
| Body type guides | 8-10 | Editorial + fit data | P1 |
| Style guide pages | 15-20 | Editorial + product data | P1 |
| Comparison pages | 15 | fits.ts combinations | P2 |
| "Best X for Y" pages | 10-15 | Editorial + product data | P2 |
| Wash care pages | 8-10 | Editorial + wash data | P2 |
| **Total** | **~100-110** | | |

This is a manageable, high-quality page set — not thousands of thin pages.

---

## Common Mistakes to Avoid

- **Thin product pages**: Don't just swap fit/wash names — each page needs unique styling and care content
- **Ignoring Indian context**: Monsoon care, Indian wedding occasions, kurta pairings matter to this audience
- **Keyword cannibalization**: "Best slim jeans" and "best slim taper jeans" may compete — consolidate
- **No purchase path**: Every page must have a clear CTA to a product
- **Duplicate care content**: Each wash needs genuinely different care advice, not copy-paste
- **Over-indexing low-value combos**: If a fit+wash combo has no SKU and never will, consider noindex

---

## Task-Specific Questions

1. Which template type do you want to build first?
2. What product photography is available for template pages?
3. Do you have editorial content for style guides, or should we generate it?
4. Are all 42 fit x wash combinations currently available, or only some?
5. What's the site's current domain authority?
6. Who are the main competitors ranking for Indian denim keywords?

---

## Related Skills

- **free-tool-strategy**: For interactive tools (Fit Finder, Measurement Tool) that link to pSEO pages
- **schema-markup**: For implementing structured data on template pages
- **seo-audit**: For auditing programmatic pages after launch
- **page-cro**: For optimizing individual template page conversion rates

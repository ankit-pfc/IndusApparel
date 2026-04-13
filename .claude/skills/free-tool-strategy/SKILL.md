---
name: free-tool-strategy
version: 2.0.0
description: When the user wants to plan, evaluate, or build interactive tools for the INDUS Apparels e-commerce site — fit finders, style quizzes, measurement calculators, denim care tools, or any engagement-driven tool that captures leads, generates SEO-valuable pages, and drives purchase conversion. Also use when the user mentions "quiz," "fit finder," "style recommender," "measurement tool," "interactive tool," "lead gen tool," "denim calculator," or "wardrobe builder."
---

# Interactive Tool Strategy (Engagement as Marketing)

You are an expert in building interactive e-commerce tools that drive engagement, capture leads, and generate SEO-valuable pages for a D2C denim brand.

## Brand Context

**INDUS Apparels** is a modern denim brand from India.
- **6 Fits**: Slim Taper (ST), Athletic Taper (AT), Straight (SR), Relaxed Straight (RS), Selvedge Slim (SV), Carpenter (CU)
- **7 Washes**: Rinse Indigo, Dark Rinse, Mid Indigo (Eco), Storm Grey, Overdyed Black, Ecru (Undyed), Copper Rigid
- **Price range**: Rs.2,999 - Rs.6,999
- **Fabric weights**: 11 oz - 13.5 oz (core stretch, rigid, selvedge)

**Data sources**: `src/brand/fits.ts`, `src/brand/washes.ts`, `src/brand/skus.ts` contain all product constants. Tools should pull from these as the single source of truth.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before designing a tool strategy, understand:

1. **Goal Priority** — Lead capture (email/phone)? Purchase conversion? SEO traffic? Social sharing? Brand education?

2. **Audience Segment** — First-time denim buyers? Premium denim enthusiasts? Body-conscious shoppers unsure about fit? Gift buyers?

3. **Technical Constraints** — Build within Next.js App Router? Need external quiz platform? Mobile-first requirement? WhatsApp integration needed?

---

## Core Principles

### 1. Solve a Real Denim Shopping Problem
- Fit uncertainty is the #1 barrier to online jeans purchase
- Wash/color looks different on every screen — tools must bridge the gap
- Buyers need confidence that the jeans will work for their body and lifestyle

### 2. Every Tool Leads to a Product
- Quiz result = specific SKU recommendation with "Add to Cart" CTA
- No dead-end tools — every output maps to a purchasable product
- Recommendation should show fit, wash, price, and fabric weight

### 3. Simple, Mobile-First, Fast
- Indian audience is 85%+ mobile
- WhatsApp share buttons on every result
- Tool must complete in under 60 seconds
- Minimal text input — use visual selectors (body silhouettes, lifestyle images, color swatches)

### 4. Worth the Investment
- Email capture value x expected captures > build cost + maintenance
- Each tool should generate indexable pages that rank for long-tail keywords

---

## Tool Types for INDUS

| Tool | Primary Goal | Lead Capture | SEO Value |
|------|-------------|--------------|-----------|
| Fit Finder Quiz | Purchase conversion | Email for saved result | "best jeans for athletic build" |
| Wash Guide | Product discovery | Email for care tips | "dark vs light wash jeans" |
| Style Recommender | Average order value | Email for lookbook | "what jeans to wear to office" |
| Body Measurement Tool | Reduce returns | Email for size card | "how to measure for jeans" |
| Denim Care Calculator | Post-purchase retention | Email for care schedule | "how often to wash raw denim" |
| Wardrobe Builder | Cross-sell / AOV | Email for outfit saves | "jeans outfit ideas men" |

**For detailed tool specifications**: See [references/tool-types.md](references/tool-types.md)

---

## Tool #1: Fit Finder Quiz (Highest Priority)

### User Flow
```
Body Type Select → Lifestyle Questions → Style Preference → Fit Recommendation → SKU Card + Add to Cart
```

### Questions Framework
1. **Body shape**: Visual silhouette selector (athletic, slim, average, broad, tall)
2. **Primary use**: Office / Weekend / Both / Active lifestyle
3. **Current jeans problem**: Too tight in thighs? Too loose? Wrong length? No taper?
4. **Style preference**: Classic / Modern / Workwear / Clean minimal
5. **Budget range**: Under Rs.3,000 / Rs.3,000-4,000 / Premium (Rs.5,000+)

### Recommendation Logic
| Body Type | Lifestyle | Recommended Fit |
|-----------|-----------|----------------|
| Athletic / Broad thighs | Any | Athletic Taper (AT) |
| Slim build | Office / Minimal | Slim Taper (ST) |
| Slim build | Premium / Enthusiast | Selvedge Slim (SV) |
| Average | Casual / Weekend | Straight (SR) |
| Average / Broad | Comfort-first | Relaxed Straight (RS) |
| Any | Workwear / Utility | Carpenter (CU) |

### Result Page (Indexable)
- URL: `/fit-finder/result/athletic-taper` or `/fit-finder/result/slim-build-office`
- Title: "Your Perfect Fit: Athletic Taper — Built for Your Build"
- Content: Fit details, wash options, fabric info, size chart, related fits
- CTA: "Add to Cart" + "Share My Result" + "Save to Email"
- Schema: Product + FAQ

---

## Tool #2: Wash Guide

### User Flow
```
Style Vibe → Wardrobe Colors → Care Preference → Wash Recommendation
```

### Questions
1. **Your vibe**: Dark & sharp / Faded & lived-in / Neutral & minimal / Bold & different
2. **Wardrobe colors**: Black & grey / Earth tones / Blue & white / Mixed
3. **Care attitude**: I follow instructions carefully / I just throw them in / I want zero-maintenance
4. **Fade preference**: Love visible fading / Want it to stay consistent / Don't care

### Recommendation Matrix
| Vibe | Care Level | Recommended Wash |
|------|-----------|-----------------|
| Dark & sharp | Any | Overdyed Black or Dark Rinse |
| Faded & lived-in | Low maintenance | Mid Indigo (Eco) |
| Neutral & minimal | Careful | Ecru (Undyed) or Storm Grey |
| Bold & different | Enthusiast | Copper Rigid |
| Classic | Any | Rinse Indigo |

---

## Tool #3: Body Measurement Tool

### Flow
- Visual guide: "How to measure at home" with illustrations
- Input: Waist, hip, inseam, thigh circumference (in inches or cm)
- Output: Recommended size per fit + confidence score
- Lead capture: "Email me my size card" (saves measurements for future orders)

### Reducing Returns
- Show "fit prediction" based on measurements vs. garment specs
- Flag if between sizes: "You're between 32 and 34 in Slim Taper — we recommend 34 for comfort"
- Compare to garment measurements, not just generic S/M/L

---

## Lead Capture Strategy

### Capture Points

| Moment | What to Capture | Value Exchange |
|--------|----------------|----------------|
| Quiz start | Nothing — zero friction | Let them begin immediately |
| Quiz result | Email | "Email me my recommendation + size card" |
| Quiz result | Phone/WhatsApp | "Get restock alerts on WhatsApp" |
| Measurement save | Email | "Save my measurements for easy reorder" |
| Care calculator | Email | "Email me my personalized care schedule" |

### Best Practices
- Never gate the quiz itself — only gate saving/sharing the result
- Offer WhatsApp opt-in alongside email (India-first channel)
- Single qualifying question in capture form: "Have you bought jeans online before?" (segments new vs. experienced buyers)
- Pre-checked SMS consent box for launch/drop alerts

---

## SEO Strategy for Tool Pages

### Indexable Result Pages
Each quiz result combination generates an indexable page:

**Fit Finder results:**
- `/fit-finder/result/best-jeans-for-athletic-build`
- `/fit-finder/result/best-jeans-for-slim-men`
- `/fit-finder/result/best-jeans-for-office-wear`
- `/fit-finder/result/best-workwear-jeans`

**Wash Guide results:**
- `/wash-guide/result/best-dark-wash-jeans`
- `/wash-guide/result/best-jeans-for-fading`
- `/wash-guide/result/low-maintenance-jeans`

**Measurement tool:**
- `/size-guide/how-to-measure-for-jeans`
- `/size-guide/jeans-size-chart-india`

**Care calculator:**
- `/care/raw-denim-break-in-guide`
- `/care/how-often-to-wash-jeans`
- `/care/denim-fade-timeline`

### Keyword Targeting
- "best jeans for [body type]" — Fit Finder results
- "how to measure for jeans at home" — Measurement Tool
- "[wash type] jeans" — Wash Guide results
- "how to care for raw denim" — Care Calculator
- "jeans outfit ideas for [occasion]" — Style Recommender

### Schema Markup Per Tool Page
- **Fit Finder results**: Product schema + FAQ schema
- **Measurement tool**: HowTo schema
- **Care calculator**: HowTo schema + FAQ schema
- **Style Recommender**: ItemList schema

---

## Social Sharing

### Shareable Results
Each quiz result generates a share card:
- "I'm an Athletic Taper guy — find your perfect fit at INDUS"
- "My denim DNA: Dark Rinse x Slim Taper"
- Visual: Product image + fit name + brand logo

### Share Channels (India Priority)
1. **WhatsApp** — Primary. Deep link with preview image
2. **Instagram Stories** — Shareable story card template
3. **X/Twitter** — Text + image card
4. **Copy Link** — For any platform

### Viral Mechanics
- "Challenge a friend to find their fit" — sends quiz link
- "Compare fits" — side-by-side result with a friend
- Instagram Stories template: "My INDUS Fit" with drag-and-drop style

---

## Build Approach

### Recommended: Build Within Next.js
Since the site is Next.js 16 App Router:
- Quiz as a client component with state management
- Result pages as dynamic routes with `generateStaticParams` for SEO
- Pull product data from `src/brand/` constants
- Share cards generated via `og:image` dynamic generation

### No-Code Alternatives (For Speed)
- **Typeform** embedded with webhook to email platform
- **Outgrow** for calculators with built-in lead capture
- **Octane AI** for Shopify-style quiz (if migrating to Shopify)

### MVP Scope
1. **Week 1**: Fit Finder Quiz — 5 questions, 6 fit results, email capture
2. **Week 2**: Body Measurement Tool — input form, size recommendation, email save
3. **Week 3**: Wash Guide — 4 questions, 7 wash results
4. **Month 2**: Style Recommender, Care Calculator, Wardrobe Builder

---

## Evaluation Scorecard

Rate each tool 1-5:

| Factor | Fit Finder | Wash Guide | Measurement | Style Rec | Care Calc | Wardrobe |
|--------|-----------|-----------|-------------|-----------|-----------|----------|
| Purchase intent | 5 | 4 | 5 | 3 | 2 | 3 |
| Email capture potential | 4 | 3 | 5 | 3 | 4 | 3 |
| SEO value | 5 | 4 | 5 | 4 | 4 | 3 |
| Share-worthiness | 5 | 3 | 2 | 4 | 2 | 4 |
| Build complexity (inverse) | 4 | 5 | 3 | 3 | 4 | 2 |
| Return reduction | 3 | 2 | 5 | 1 | 1 | 1 |
| **Total** | **26** | **21** | **25** | **18** | **17** | **16** |

**Priority**: Fit Finder > Measurement Tool > Wash Guide > Style Recommender > Care Calculator > Wardrobe Builder

---

## Metrics to Track

### Engagement Metrics
- Quiz start rate (visitors who begin the quiz)
- Quiz completion rate (target: 70%+)
- Average time in quiz
- Drop-off by question (identify friction points)

### Conversion Metrics
- Email capture rate (target: 30% of quiz completers)
- WhatsApp opt-in rate
- Quiz-to-cart rate (target: 15%+)
- Quiz-to-purchase rate (target: 5-8%)
- Revenue attributed to quiz users vs. non-quiz users

### SEO Metrics
- Organic traffic to result pages
- Rankings for "best jeans for [body type]" keywords
- Backlinks to tool pages
- Time on page for result pages

### Sharing Metrics
- Share rate (% of result viewers who share)
- Shares by channel (WhatsApp vs. Instagram vs. other)
- Referred visits from shared links
- Referred visit-to-quiz-start rate

---

## Task-Specific Questions

1. Which tool do you want to build first?
2. Do you want to build within Next.js or use an external quiz platform?
3. What email/SMS platform will you use for lead capture (e.g., Klaviyo, Mailchimp)?
4. Do you have product photography for quiz result cards?
5. Should the quiz support Hindi/regional languages?

---

## Related Skills

- **programmatic-seo**: For generating indexable result pages at scale
- **page-cro**: For optimizing quiz landing page conversion
- **analytics-tracking**: For measuring quiz engagement and conversion
- **email-sequence**: For nurturing leads captured from quizzes
- **schema-markup**: For adding structured data to result pages

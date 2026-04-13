# Interactive Tool Types for INDUS Apparels

Detailed specifications for each interactive tool in the INDUS e-commerce toolkit.

## Fit Finder Quiz

**Primary goal**: Convert undecided browsers into confident buyers by recommending the right fit
**Secondary goal**: Email capture + SEO-valuable result pages

**User flow**:
1. Visual body type selector (silhouette illustrations, not text-heavy)
2. Lifestyle/occasion question (office, weekend, active, utility)
3. Current jeans pain point (too tight thighs, no taper, wrong length, too stiff)
4. Style preference (clean minimal, classic, workwear, streetwear)
5. Budget range selector (under Rs.3,000 / Rs.3,000-4,000 / Rs.5,000+)

**Recommendation mapping**:

| Input Combination | Primary Fit | Secondary Fit | Wash Suggestion |
|-------------------|-------------|---------------|-----------------|
| Athletic + Office | Athletic Taper (AT) | Slim Taper (ST) | Dark Rinse |
| Athletic + Weekend | Athletic Taper (AT) | Relaxed Straight (RS) | Mid Indigo (Eco) |
| Slim + Office | Slim Taper (ST) | Selvedge Slim (SV) | Rinse Indigo |
| Slim + Casual | Slim Taper (ST) | Straight (SR) | Mid Indigo (Eco) |
| Average + Office | Straight (SR) | Slim Taper (ST) | Dark Rinse |
| Average + Weekend | Straight (SR) | Relaxed Straight (RS) | Rinse Indigo |
| Broad + Comfort | Relaxed Straight (RS) | Athletic Taper (AT) | Storm Grey |
| Any + Workwear | Carpenter (CU) | Relaxed Straight (RS) | Copper Rigid |
| Enthusiast + Premium | Selvedge Slim (SV) | Slim Taper (ST) | Copper Rigid |

**Result page content**:
- Hero: Product flat image in recommended wash
- Fit profile: Name, hem width, rise, description (from `fits.ts`)
- Why this fit works for you (personalized paragraph based on inputs)
- Wash options available in this fit (with swatches)
- Size chart specific to this fit
- "Add to Cart" CTA with recommended SKU pre-selected
- "Not quite right?" link to secondary fit recommendation
- Social share card: "I'm a [Fit Name] guy — find your fit at INDUS"

**SEO output**:
- `/fit-finder/result/best-jeans-for-athletic-build`
- `/fit-finder/result/best-office-jeans-for-men`
- `/fit-finder/result/best-workwear-jeans-india`
- Each page: unique H1, 300+ words of unique content, Product schema

---

## Wash Guide

**Primary goal**: Help buyers choose the right wash/color when they already know their fit
**Secondary goal**: Educate on wash differences, reduce "looks different in person" returns

**User flow**:
1. Style vibe selector (visual mood boards: dark & sharp, faded & relaxed, neutral & clean, bold & unique)
2. Wardrobe color palette (what colors do you wear most?)
3. Care preference (meticulous, casual, zero-effort)
4. Fade attitude (love evolving fades, want consistent color, no preference)

**Recommendation mapping**:

| Vibe | Fade Preference | Primary Wash | Secondary Wash |
|------|----------------|--------------|----------------|
| Dark & sharp | Consistent | Overdyed Black | Dark Rinse |
| Dark & sharp | Fading OK | Dark Rinse | Rinse Indigo |
| Faded & relaxed | Love fades | Mid Indigo (Eco) | Rinse Indigo |
| Neutral & clean | Consistent | Ecru (Undyed) | Storm Grey |
| Bold & unique | Enthusiast | Copper Rigid | Ecru (Undyed) |
| Classic / Default | Any | Rinse Indigo | Mid Indigo (Eco) |

**Result page content**:
- Wash swatch (large, color-accurate as possible, with note about screen variation)
- Wash characteristics: initial color, 6-month fade preview, 1-year fade preview
- Fabric pairings available (which fabrics come in this wash)
- Fits available in this wash
- Care instructions specific to this wash
- "Pair with" suggestions (belt, tee, shoes — brand-adjacent styling)

---

## Body Measurement Tool

**Primary goal**: Reduce size-related returns (return rate target: under 10%)
**Secondary goal**: Email capture via "Save my measurements" + long-tail SEO

**User flow**:
1. Visual "how to measure" guide (animated illustrations):
   - Waist: natural waist at navel
   - Hip: fullest part of seat
   - Thigh: 1 inch below crotch
   - Inseam: crotch to ankle bone
2. Input form: 4 measurements (inches or cm toggle)
3. Algorithm: Compare user measurements to garment spec for each fit
4. Output: Size recommendation per fit with confidence indicator

**Measurement-to-size logic**:
- Compare user waist to garment waist (allow 1-2" ease depending on fit)
- Compare user thigh to garment thigh (AT and RS allow more ease)
- Flag "between sizes" cases with recommendation ("Size up for comfort, size down for fitted look")
- Account for fabric stretch (Core Stretch vs. Rigid vs. Selvedge)

**Result page content**:
- Your measurements summary
- Recommended size per fit (table: Fit | Size | Confidence)
- "Best bet" highlight: the fit + size with highest confidence
- "Email me my size card" — saves measurements for future orders
- Link to Fit Finder if they haven't chosen a fit yet

**SEO output**:
- `/size-guide/how-to-measure-for-jeans-at-home` (HowTo schema)
- `/size-guide/jeans-size-chart-india` (Table schema)
- `/size-guide/denim-stretch-vs-rigid-sizing`

---

## Style Recommender

**Primary goal**: Increase average order value through outfit-based shopping
**Secondary goal**: SEO for occasion-based searches ("what jeans to wear to...")

**User flow**:
1. Occasion selector: Office / Date night / Weekend brunch / Travel / Festival / Everyday
2. Style archetype: Minimal / Classic / Street / Workwear
3. Top preference: T-shirt / Button-down / Kurta / Jacket
4. Footwear: Sneakers / Loafers / Boots / Chappals

**Output**:
- Complete outfit recommendation with jeans as hero product
- Fit + wash recommendation for the occasion
- Styling tips (tuck/no tuck, cuff/no cuff, belt suggestion)
- "Shop this look" with SKU card
- "Share my style" card for social

**SEO output**:
- `/style/best-jeans-for-office-india`
- `/style/what-to-wear-with-raw-denim`
- `/style/jeans-and-kurta-outfit-ideas`
- `/style/best-jeans-for-date-night`

---

## Denim Care Calculator

**Primary goal**: Post-purchase retention — keep customers engaged after buying
**Secondary goal**: SEO for denim care searches + reduce care-related returns

**User flow**:
1. Which jeans did you buy? (SKU selector or fit + wash)
2. How often do you wear them? (daily, 3-4x/week, 1-2x/week, weekend only)
3. Activity level when wearing? (desk job, walking, active/manual)
4. Climate? (Hot & humid, moderate, cold & dry)

**Output**:
- Personalized wash schedule ("Wash every 8-10 wears for your usage pattern")
- Fade timeline ("Expect visible whiskers at month 3, honeycomb fades at month 6")
- Repair schedule ("Check crotch area at month 9 for wear — we offer free repairs")
- Care tips specific to their wash (e.g., Ecru needs different care than Overdyed Black)
- "Email me my care schedule" — drip care reminders at the right intervals

**SEO output**:
- `/care/how-often-to-wash-jeans`
- `/care/raw-denim-break-in-guide`
- `/care/denim-fade-timeline-guide`
- `/care/how-to-repair-jeans-crotch-blowout`

---

## Wardrobe Builder

**Primary goal**: Cross-sell — help customers build a multi-pair denim wardrobe
**Secondary goal**: Social sharing of "my denim collection" builds brand identity

**User flow**:
1. What do you already own? (Select existing INDUS pairs or describe current jeans)
2. What gaps do you have? (Need something for office / weekend / heavy use)
3. Budget for next pair?

**Output**:
- "Your denim wardrobe" visual — shows current collection
- "Next recommended pair" — fills the gap in their wardrobe
- "Complete wardrobe" vision — 3-pair ideal wardrobe for their lifestyle
- Example: "You have Slim Taper in Dark Rinse (office). Add Carpenter in Copper Rigid (weekend) and Athletic Taper in Mid Indigo (everyday)."

---

## Implementation Priorities

### Phase 1 (Week 1-2): Fit Finder Quiz
- Highest purchase intent
- Highest SEO value
- Generates the most shareable result pages
- Core recommendation logic reusable by other tools

### Phase 2 (Week 3-4): Body Measurement Tool
- Directly reduces returns (high ROI)
- Email capture with strongest value exchange
- Complements Fit Finder (fit + size = confident purchase)

### Phase 3 (Month 2): Wash Guide + Care Calculator
- Wash Guide completes the product selection journey
- Care Calculator drives post-purchase engagement
- Both have strong SEO long-tail value

### Phase 4 (Month 3): Style Recommender + Wardrobe Builder
- AOV-focused tools (less urgent than conversion tools)
- Require more content/photography assets
- Build on foundation of fit/wash recommendations

---

## Technical Implementation Notes

### Within Next.js App Router
- Quiz state: React `useState` or `useReducer` — no external state management needed
- Result pages: Dynamic routes `/fit-finder/result/[slug]` with `generateStaticParams`
- Product data: Import directly from `src/brand/fits.ts`, `src/brand/washes.ts`, `src/brand/skus.ts`
- Share cards: Next.js `ImageResponse` for dynamic OG images
- Email capture: API route → Klaviyo/Mailchimp webhook

### Performance Targets
- Quiz load: < 1s on 3G (critical for India)
- Quiz interaction: no loading between questions (all client-side)
- Result page: SSG with ISR for SEO + speed
- Share card generation: < 500ms

### Analytics Events
- `quiz_start` — which quiz, entry point
- `quiz_question_answer` — question number, answer value
- `quiz_complete` — result shown
- `quiz_email_capture` — email submitted
- `quiz_result_share` — channel (WhatsApp, Instagram, copy link)
- `quiz_result_add_to_cart` — SKU added
- `quiz_result_purchase` — attributed purchase

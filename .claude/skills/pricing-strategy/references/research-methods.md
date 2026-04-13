# Pricing Research Methods for D2C E-Commerce

## Van Westendorp Price Sensitivity Meter

The Van Westendorp survey identifies the acceptable price range for your product. Run it separately for each product line (Core, Premium, Heritage).

### The Four Questions

Ask each respondent (show them the actual product — photo, fabric swatch, or in-person):

1. "At what price would you consider this pair of jeans to be so expensive that you would not consider buying it?" (Too expensive)
2. "At what price would you consider this pair of jeans to be priced so low that you would question the quality of the denim?" (Too cheap)
3. "At what price would you consider this pair of jeans to be starting to get expensive, but you'd still consider buying?" (Expensive/high side)
4. "At what price would you consider this pair of jeans to be a bargain — great jeans for the money?" (Cheap/good value)

### How to Analyze

1. Plot cumulative distributions for each question
2. Find the intersections:
   - **Point of Marginal Cheapness (PMC):** "Too cheap" crosses "Expensive"
   - **Point of Marginal Expensiveness (PME):** "Too expensive" crosses "Cheap"
   - **Optimal Price Point (OPP):** "Too cheap" crosses "Too expensive"
   - **Indifference Price Point (IDP):** "Expensive" crosses "Cheap"

**The acceptable price range:** PMC to PME
**Optimal pricing zone:** Between OPP and IDP

### Survey Tips for D2C Denim
- Need 100-300 respondents per product line for reliable data
- Segment by persona (college students vs. professionals have very different WTP)
- Show realistic product photos with fabric close-ups
- Run via Instagram Stories polls for quick directional data (not statistically rigorous, but fast)
- Consider running in-person at pop-ups where people can touch the fabric

### Sample Output

```
Price Sensitivity Analysis — Premium Line:
─────────────────────────────────────────
Point of Marginal Cheapness:  ₹2,499
Optimal Price Point:          ₹3,499
Indifference Price Point:     ₹3,999
Point of Marginal Expensiveness: ₹4,999

Recommended range: ₹3,499-₹3,999
Current price: ₹2,999 (below optimal)
Opportunity: ₹500-₹1,000 increase without significant demand impact

Price Sensitivity Analysis — Heritage/Selvedge Line:
─────────────────────────────────────────────────────
Point of Marginal Cheapness:  ₹4,499
Optimal Price Point:          ₹5,999
Indifference Price Point:     ₹6,499
Point of Marginal Expensiveness: ₹7,999

Recommended range: ₹5,999-₹6,499
```

---

## MaxDiff Analysis (Best-Worst Scaling)

MaxDiff identifies which product attributes customers value most, informing product line differentiation and pricing justification.

### How It Works

1. List 8-15 product attributes you could emphasize
2. Show respondents sets of 4-5 attributes at a time
3. Ask: "Which is MOST important when buying jeans? Which is LEAST important?"
4. Repeat across multiple sets until all attributes compared
5. Statistical analysis produces importance scores

### Example Survey Question

```
Which attribute is MOST important to you when buying jeans?
Which attribute is LEAST important to you?

□ Fabric quality (weight, feel, durability)
□ Fit and comfort
□ Wash/color options
□ Brand reputation
□ Price
```

### Denim-Specific Attributes to Test

- Fabric quality and hand-feel
- Fit and comfort
- Wash variety and uniqueness
- Price / value for money
- Brand story and reputation
- Sustainability / eco-friendly production
- Durability / how long they last
- Construction details (stitching, rivets)
- Made in India / origin story
- Easy returns and exchanges
- Packaging and unboxing experience
- Selvedge / premium denim type
- Celebrity/influencer endorsement
- Online reviews and ratings

### Analyzing Results

Attributes are ranked by utility score:
- High utility = Must-communicate on PDP (include in all product descriptions)
- Medium utility = Differentiator (use to justify price differences between lines)
- Low utility = Nice-to-have (mention in brand story, not on product page)

### Using MaxDiff for Product Line Decisions

| Utility Score | Product Line Decision |
|---------------|----------------------|
| Top 20% | Highlight on every PDP, all lines (table stakes) |
| 20-50% | Use to differentiate Core vs. Premium vs. Heritage |
| 50-80% | Heritage line only, or brand story content |
| Bottom 20% | Consider deprioritizing in marketing |

---

## Willingness to Pay Surveys

**Direct method (simple but biased):**
"How much would you pay for a pair of jeans with [X fabric, Y fit, Z wash]?"

**Better: Gabor-Granger method:**
"Would you buy these jeans at ₹3,499?" (Yes/No)
Vary price across respondents: ₹2,499, ₹2,999, ₹3,499, ₹3,999, ₹4,499
Build a demand curve to find the revenue-maximizing price.

**Even better: Conjoint analysis:**
Show product bundles at different prices:
- Core fabric + Slim fit + Dark wash at ₹2,999
- Premium fabric + Taper fit + Vintage wash at ₹3,999
- Selvedge + Straight fit + Raw at ₹5,999
Respondents choose preferred option. Statistical analysis reveals price sensitivity per attribute.

### Quick D2C Research Methods

**Instagram Stories poll:**
- "Would you pay ₹3,499 for jeans with premium Japanese-inspired denim?" (Yes/No)
- "Which would you buy: 1 pair at ₹3,499 or 2 pairs at ₹5,999?"
- Fast, directional, free — run weekly during product development

**WhatsApp focus group:**
- 10-15 target customers in a group
- Share product photos, fabric videos
- Ask pricing questions directly
- Offer early access as incentive

**Pop-up price testing:**
- A/B test prices at physical pop-ups
- Track conversion rate by price point
- Real purchase behavior > survey answers

---

## Purchase Behavior Analysis

### 1. Track customer purchase patterns
Analyze actual D2C sales data:
- Which products sell at full price vs. only on discount?
- What price points have highest sell-through?
- Which washes/fits drive repeat purchases?
- What's the price elasticity (does 10% price drop drive >10% volume increase)?

### 2. Correlate with customer lifetime value
- Which entry product predicts high LTV?
- Do Core buyers upgrade to Premium? At what rate?
- Do bundle buyers have higher repeat rates?
- Which price point attracts "one and done" vs. loyal customers?

### 3. Identify value thresholds
- At what price does conversion drop sharply? (price ceiling)
- At what discount level does conversion spike? (price sensitivity indicator)
- What AOV correlates with highest LTV?
- At what bundle discount do customers buy more units?

### Example Analysis

```
Purchase Behavior Analysis:
─────────────────────────────
Segment: High-LTV customers (3+ purchases, LTV > ₹12,000)
Average first purchase: Premium line (₹3,999)
Average AOV: ₹4,200
Average units per order: 1.3
Repeat purchase within 6 months: 65%

Segment: One-time buyers (single purchase only)
Average first purchase: Core line on discount (₹2,499)
Average AOV: ₹2,499
Units per order: 1.0
Discount used: 85% of purchases

Insight: Full-price Premium buyers have 3x higher LTV than
         discount Core buyers. Price-led acquisition attracts
         low-value customers.

Recommendation: Invest in Premium line as entry point.
                Use Core for volume, but don't discount aggressively.
                Bundle offers > flat discounts for customer quality.
```

---

## Competitor Price Monitoring

### What to Track

| Brand | Category | MRP | Selling Price | Discount % | Channel |
|-------|----------|-----|---------------|------------|---------|
| Levi's 511 | Slim | ₹4,599 | ₹3,219 | 30% | Myntra |
| Pepe Jeans | Slim | ₹3,499 | ₹2,449 | 30% | Ajio |
| Spykar | Slim | ₹2,799 | ₹1,679 | 40% | D2C |
| Korra (D2C) | Selvedge | ₹5,999 | ₹5,999 | 0% | D2C |
| INDUS Core | Slim | ₹3,999 | ₹2,999 | 25% | D2C |

### Monitoring Cadence
- Weekly: Top 5 competitors on Myntra/Ajio (price changes during sales)
- Monthly: Full competitive set on all channels
- Quarterly: Deep analysis with quality comparison (fabric, construction)
- During sales (Myntra EORS, Ajio Big Bold, etc.): Daily monitoring

### Competitive Positioning Map

Plot competitors on two axes:
- X-axis: Price (₹1,500 → ₹7,000)
- Y-axis: Quality perception (basic → premium)

Find white space where INDUS can own a position. Typical D2C denim opportunity: premium quality at accessible-premium price (below Levi's, above Spykar, better fabric than both).

---
name: referral-program
version: 2.0.0
description: "When the user wants to create, optimize, or analyze a referral program, brand ambassador program, or word-of-mouth strategy for INDUS Apparels. Also use when the user mentions 'referral,' 'ambassador,' 'influencer seeding,' 'word of mouth,' 'viral loop,' 'refer a friend,' 'WhatsApp referral,' 'brand ambassador,' or 'influencer program.' This skill covers D2C denim referral design, Indian market distribution channels, and community-driven growth."
---

# Referral & Ambassador Program for D2C Denim

You are an expert in D2C referral marketing and community-driven growth for fashion brands. Your goal is to help design and optimize programs that turn INDUS Apparels customers into brand advocates who drive new customer acquisition through referrals, social sharing, and authentic content creation.

## Brand Context

**INDUS Apparels** is a modern denim brand from India.
- **6 Fits**: Slim Taper (ST), Athletic Taper (AT), Straight (SR), Relaxed Straight (RS), Selvedge Slim (SV), Carpenter (CU)
- **7 Washes**: Rinse Indigo, Dark Rinse, Mid Indigo (Eco), Storm Grey, Overdyed Black, Ecru (Undyed), Copper Rigid
- **Price range**: Rs.2,999 - Rs.6,999
- **Average order value**: ~Rs.3,500 (single pair)
- **Target audience**: Men 22-35, urban India, style-conscious, value quality

**Key context for referral design**:
- Jeans are a considered purchase (not impulse) — referral trust matters more than in low-ticket D2C
- Customers wear the product visibly — organic social proof is built in
- Indian market is WhatsApp-first for sharing
- Price point allows meaningful referral discounts without destroying margin

## Before Starting

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Gather this context (ask if not provided):

### 1. Program Goals
- Primary: New customer acquisition? Repeat purchase? Content generation? Brand awareness?
- Customer LTV estimate (single purchase vs. repeat buyer)?
- Current acquisition cost from paid channels?

### 2. Current State
- Existing customer base size?
- Current organic referral rate (any word-of-mouth tracking)?
- Email/SMS list size?
- Social media following and engagement rate?

### 3. Indian Market Specifics
- WhatsApp Business API integrated?
- Shipping logistics (metro only or pan-India)?
- Payment methods (UPI, COD, cards)?
- Regional language support needed?

---

## Program Types

### 1. Friend Referral Program ("Give Rs.500, Get Rs.500")

**Best for**: Scaling new customer acquisition from existing happy customers

**How it works**:
- Existing customer shares unique referral link/code
- Friend gets Rs.500 off their first order (min. order Rs.2,999)
- Referrer gets Rs.500 store credit when friend's order is delivered (not just placed — prevents COD fraud)
- Store credit valid for 6 months, applicable on next purchase

**Why Rs.500**:
- ~15% of average order value — meaningful enough to share
- At Rs.2,999 base price, friend pays Rs.2,499 (still healthy margin)
- Referrer reward drives repeat purchase (second pair = higher LTV)
- Lower than typical paid acquisition cost for D2C denim

### 2. Brand Ambassador Program

**Best for**: Consistent content creation and community building

**Tiers**:

| Tier | Who | Reward | Commitment |
|------|-----|--------|------------|
| Campus Ambassador | College students (18-24) | 1 free pair + Rs.300/referral sale | 4 posts/month, 5 referrals/quarter |
| Style Ambassador | Fashion/lifestyle enthusiasts (22-30) | 2 free pairs/season + 15% commission | 6 posts/month, 10 referrals/quarter |
| Pro Ambassador | Fitness trainers, stylists (25-35) | Full collection access + 20% commission | 8 posts/month, brand events |

**Selection criteria**:
- Genuine engagement rate (not follower count) — minimum 3% engagement
- Audience overlap with INDUS target demographic
- Authentic personal style that aligns with brand
- Geographic spread across tier-1 and tier-2 Indian cities

### 3. Influencer Seeding Program

**Best for**: Generating authentic user-generated content (UGC) and social proof

**How it works**:
- Send free pairs to 50-100 micro-influencers (5K-50K followers) per quarter
- No scripted posts — just ask them to share if they genuinely like the product
- Track content creation rate and organic mentions
- Convert high-performers into Brand Ambassadors

**Why micro-influencers over macro**:
- Higher trust and engagement (4-8% vs. 1-2%)
- More affordable (free product vs. Rs.50K-5L per post)
- Authentic content that can be repurposed for ads
- Diverse body types and styles = better product representation

---

## The Referral Loop (D2C Denim Specific)

```
Purchase → Delight → Share → Friend Clicks → Friend Buys → Referrer Earns → Repeat Purchase → Share Again
```

### Step 1: Trigger Moments (When to Ask for Referral)

**High-intent moments for denim**:
1. **Post-delivery unboxing** — Package insert with referral code + QR code (highest intent)
2. **7 days after delivery** — "How do your new jeans fit?" email with referral prompt
3. **First positive review** — "Glad you love them! Share with a friend who'd love them too"
4. **30 days in** — "Your jeans are breaking in nicely — know someone who needs a pair?"
5. **Post-customer-service win** — After a smooth exchange/support interaction

**Low-intent moments (avoid asking here)**:
- Before delivery
- During a return/exchange process
- When they haven't engaged with the brand in 60+ days

### Step 2: Share Mechanisms (India-Optimized)

**Ranked by effectiveness in Indian market**:

1. **WhatsApp share** (Primary — 80%+ of Indian sharing happens here)
   - Pre-written WhatsApp message with referral link + product image preview
   - Deep link that opens WhatsApp with pre-filled message
   - "Share on WhatsApp" button is the biggest, most prominent CTA

2. **Referral code on packaging**
   - Printed card inside every order: "Your friend code: [CODE]"
   - QR code that opens referral landing page
   - Offline-first — works when showing jeans to friends in person

3. **Instagram share**
   - "Share my INDUS style" story template
   - Referral link in bio suggestion
   - Tag @indusapparels for repost

4. **Copy link**
   - For any platform (Telegram, email, text)
   - Short, memorable URL: `indus.in/r/[code]`

5. **SMS**
   - Auto-generated SMS with referral code
   - Works for non-smartphone users in tier-2/3 cities

### Step 3: Referral Incentive Structure

**Primary: Double-sided "Give Rs.500, Get Rs.500"**

| Component | Details |
|-----------|---------|
| Friend discount | Rs.500 off first order (min. Rs.2,999) |
| Referrer reward | Rs.500 store credit |
| Reward trigger | After friend's order is delivered + 7-day return window |
| Credit validity | 6 months from earning |
| Stackable | Yes — can accumulate unlimited store credit |
| Max per customer | No cap on referrals |

**Tiered rewards for power referrers**:

| Referrals | Reward |
|-----------|--------|
| 1 referral | Rs.500 store credit |
| 3 referrals | Rs.500 credit + free INDUS leather belt (worth Rs.999) |
| 5 referrals | Rs.500 credit + early access to next collection drop |
| 10 referrals | Rs.500 credit + free pair from new collection + "INDUS Insider" status |
| 25 referrals | Rs.500 credit + lifetime 10% discount + name on brand wall |

**For detailed examples and incentive sizing**: See [references/program-examples.md](references/program-examples.md)

---

## WhatsApp Integration (India-First Channel)

### WhatsApp Business API Setup

**Referral message template** (pre-approved):
```
Hey! I just got these amazing jeans from INDUS Apparels and thought you'd love them too.

Use my code [CODE] to get Rs.500 off your first pair.

Check them out: [referral-link]

They've got 6 different fits, so you'll find one that works for you.
```

**WhatsApp flows**:
1. **Post-purchase**: Order confirmation on WhatsApp → 7 days later → "Share with a friend" message with pre-filled referral
2. **Referral tracking**: Friend clicks WhatsApp link → lands on site with referral code pre-applied → tracks attribution
3. **Restock alerts**: Referred friend opts in for WhatsApp → gets restock/drop notifications

### QR Code on Packaging
- Every package includes a printed card with:
  - Customer's unique referral code
  - QR code linking to `indus.in/r/[code]`
  - "Give Rs.500, Get Rs.500" messaging
  - WhatsApp share shortcut

---

## Social Proof Loop

The referral program creates a self-reinforcing cycle:

```
Referral → Purchase → Unboxing Post → Review → Social Share → New Referral → ...
```

### How to Amplify Each Step

**Purchase → Unboxing**:
- Premium packaging that's worth photographing
- Include a "Show us your INDUS" card encouraging social posts
- Hashtag: #MyINDUS or #INDUSFit

**Unboxing → Review**:
- 14-day post-delivery email: "How's the fit? Leave a review for Rs.100 store credit"
- Photo reviews earn Rs.200 store credit (higher quality UGC)
- Video reviews earn Rs.300 store credit

**Review → Social Share**:
- "Share your review on Instagram" prompt after review submission
- Repost customer content on brand social (with permission)
- Feature top reviews on product pages

**Social Share → New Referral**:
- Every social mention = referral prompt opportunity
- DM customers who post about INDUS with ambassador invite
- Social content becomes ad creative (with permission)

---

## Anti-Fraud Measures

### Common Fraud Vectors for D2C Referral
- Self-referrals (customer creates new account to get own discount)
- Referral code sharing on coupon sites (Grabon, CouponDunia)
- COD orders placed just for referral credit, then returned
- Fake accounts with disposable email addresses
- "Referral rings" — groups who refer each other for credits

### Prevention Rules

**Technical**:
- Referral credit only awarded after delivery + 7-day return window passes
- One referral reward per unique phone number (not email — Indian users have multiple emails)
- Device fingerprinting — flag if referrer and referred use same device
- IP monitoring — flag if same IP refers multiple accounts
- Minimum order value (Rs.2,999) prevents gaming with cheap add-ons

**Policy**:
- Maximum 3 referral redemptions per referred customer (can't keep using different friends' codes)
- Referral codes cannot be shared publicly (auto-disable if detected on coupon sites)
- Store credit is non-transferable and cannot be converted to cash
- COD orders require referral credit to be applied after successful delivery
- Right to revoke credits for suspicious activity

**Structural**:
- Reward in store credit (not cash) — less attractive to fraudsters
- Require phone number verification (OTP) for both parties
- Manual review for accounts with >10 referrals/month
- Block referrals from the same shipping address

---

## Measuring Success

### Key Metrics

**Program health**:
| Metric | Target | Measurement |
|--------|--------|-------------|
| Referral rate (% of customers who refer) | 15-25% | Monthly active referrers / total customers |
| Share rate (% who click share button) | 30%+ | Share clicks / share impressions |
| Referral conversion rate | 20-30% | Referred purchases / referral link clicks |
| Average referrals per referrer | 2-3 | Total referrals / active referrers |
| Time to first referral | < 14 days | Days from purchase to first share |

**Business impact**:
| Metric | Target | Measurement |
|--------|--------|-------------|
| % of new customers from referrals | 20-30% | Referred new customers / total new customers |
| Referred customer LTV vs organic | 1.3-1.5x | Compare LTV cohorts |
| Referral CAC vs paid CAC | 50-70% lower | Cost per referred customer vs. Meta/Google CAC |
| Repeat purchase rate of referrers | 40%+ | Referrers who make 2nd purchase / total referrers |
| Viral coefficient (K-factor) | 0.3-0.5 | Invitations x conversion rate |

**Content & community**:
| Metric | Target | Measurement |
|--------|--------|-------------|
| Ambassador content volume | 50+ posts/month | Total tagged posts + stories |
| UGC repurpose rate | 20% of UGC | Content used in ads or website |
| Ambassador retention rate | 70%+ per quarter | Ambassadors active in current quarter / previous |
| Influencer seeding conversion | 40%+ post rate | Influencers who post / influencers who received product |

### Typical D2C Denim Benchmarks
- Referred customers have 20-30% higher LTV (they trust the brand from day one)
- Referred customers have 25-40% lower return rate (friend's recommendation reduces fit uncertainty)
- Referral CAC is typically 50-70% lower than paid channels
- 10-15% of customers become active referrers in a mature program

---

## Launch Checklist

### Before Launch
- [ ] Define incentive structure (Rs.500/Rs.500 or adjusted amount)
- [ ] Set up referral tracking (unique codes, link attribution)
- [ ] Design referral landing page (friend's experience)
- [ ] Create WhatsApp share template (pre-approved for WhatsApp Business API)
- [ ] Design packaging insert (referral card + QR code)
- [ ] Build referral dashboard (track codes, credits, redemptions)
- [ ] Define fraud prevention rules
- [ ] Write terms and conditions
- [ ] Set up store credit system in checkout
- [ ] Test complete referral flow (share → click → purchase → credit awarded)
- [ ] Brief customer support team on referral program details

### Launch (Week 1)
- [ ] Email existing customers announcing the program
- [ ] WhatsApp broadcast to opted-in customers
- [ ] Add referral prompt to post-purchase flow
- [ ] Add "Refer a Friend" link in site navigation
- [ ] Include referral card in all new shipments
- [ ] Social media announcement post

### Post-Launch (First 30 Days)
- [ ] Review referral funnel (share rate → click rate → conversion rate)
- [ ] Identify top 10 referrers — invite them to ambassador program
- [ ] Monitor for fraud patterns (self-referrals, coupon site leaks)
- [ ] Gather feedback from referrers and referred customers
- [ ] A/B test referral messaging on packaging insert
- [ ] Send reminder to customers who haven't referred yet

### Month 2-3: Ambassador Program Launch
- [ ] Recruit 10-20 Campus Ambassadors across top 5 cities
- [ ] Recruit 5-10 Style Ambassadors from existing top referrers
- [ ] Ship product to first batch of 50 micro-influencers
- [ ] Set up ambassador content tracking
- [ ] Create ambassador community (WhatsApp group or Discord)
- [ ] Establish content guidelines and brand kit for ambassadors

---

## Email & WhatsApp Sequences

### Referral Program Launch (Existing Customers)

**Email:**
```
Subject: Your friends deserve great jeans — and you deserve Rs.500

Hey [Name],

You've got great taste (your [Fit Name] in [Wash] proves it).

Now share the love: give your friends Rs.500 off their first INDUS pair, and you'll get Rs.500 in store credit for every friend who orders.

Your referral link: [link]

Or share your code: [CODE]

No limit on how many friends you can refer.

[Share on WhatsApp button]  [Copy Link button]

— Team INDUS
```

**WhatsApp:**
```
Hey [Name]! Your INDUS referral is ready.

Share your code [CODE] with friends — they get Rs.500 off, you get Rs.500 store credit.

Share now: [WhatsApp deep link]
```

### Referral Nurture Sequence

| Day | Trigger | Message |
|-----|---------|---------|
| Day 0 | Order delivered | Package insert with referral code (physical) |
| Day 7 | Post-delivery | "How's the fit? Share with a friend who'd love them" (email) |
| Day 14 | If no referral | "Your Rs.500 is waiting — share your code" (WhatsApp) |
| Day 30 | If still no referral | "Know someone who's been looking for the right jeans?" (email) |
| Day 45 | After positive review | "Thanks for the review! Your friends would love to know" (email) |
| Day 60 | Re-engagement | "Your referral code is still active — [CODE]" (WhatsApp) |

### Referred Friend Welcome Sequence

| Step | Message |
|------|---------|
| Click referral link | Landing page: "[Referrer name] thinks you'd love INDUS. Here's Rs.500 off." |
| Browse without purchase | Retarget: "Your Rs.500 discount is waiting — expires in 7 days" |
| Purchase | "Welcome to INDUS! [Referrer name] earned Rs.500 thanks to you." |
| Post-delivery | "How did we do? Now it's your turn to share — here's your own referral code" |

---

## Ambassador Content Guidelines

### What Ambassadors Should Post
- Outfit-of-the-day featuring INDUS jeans (real styling, not studio)
- "How I style my [Fit Name]" reels/stories
- Honest fit reviews including what works and what doesn't
- Comparison with other brands (authentic perspective)
- Behind-the-scenes: break-in process, fade diary, styling experiments

### What Ambassadors Should NOT Post
- Scripted, salesy posts that feel like ads
- Misleading claims about the product
- Content that doesn't align with brand values
- Posts with other denim brands in the same frame
- Content that uses discount codes as the primary hook

### Brand Kit for Ambassadors
- Logo files and usage guidelines
- Product photography for reference
- Brand color palette and fonts
- Hashtag list: #MyINDUS #INDUSFit #IndianDenim
- Key messaging points (quality, fit variety, made in India)

---

## Tool Integrations

For implementation, consider these tools suited for Indian D2C:

| Tool | Best For | Notes |
|------|----------|-------|
| **ReferralCandy** | E-commerce referral tracking | Good Shopify integration, supports INR |
| **Friendbuy** | Referral + loyalty combined | Enterprise-grade, higher cost |
| **Viral Loops** | Template-based referral campaigns | Quick setup, lower cost |
| **Wati / Interakt** | WhatsApp Business API | Indian WhatsApp commerce platforms |
| **Gokwik** | COD verification + referral fraud prevention | India-specific COD management |
| **Klaviyo / Mailchimp** | Email sequences for referral nurture | Standard email automation |
| **Custom build** | If using Next.js + own backend | Full control, no per-referral fees |

---

## Task-Specific Questions

1. Do you want to start with friend referral, ambassador program, or both?
2. What's the current customer base size and monthly order volume?
3. Is WhatsApp Business API already integrated?
4. What's your current paid CAC (Meta, Google, etc.)?
5. Do you have e-commerce platform (Shopify, custom) that supports store credits?
6. What's the budget for influencer seeding (free product + shipping)?

---

## Related Skills

- **email-sequence**: For referral nurture campaigns and ambassador onboarding
- **social-content**: For ambassador content strategy and UGC repurposing
- **analytics-tracking**: For tracking referral attribution and conversion
- **page-cro**: For optimizing referral landing page conversion
- **free-tool-strategy**: For Fit Finder Quiz as a referral entry point

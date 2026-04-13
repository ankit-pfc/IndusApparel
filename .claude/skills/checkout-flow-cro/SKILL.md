---
name: checkout-flow-cro
version: 1.0.0
description: When the user wants to optimize the e-commerce checkout flow, cart experience, payment completion, or order placement. Also use when the user mentions "cart abandonment," "checkout completion rate," "payment failure," "COD vs prepaid," "shipping selection," "address form optimization," "checkout friction," or "mobile checkout." For post-purchase experience, see post-purchase-cro. For product page optimization, see page-cro. For lead capture forms (newsletter, waitlist), see form-cro.
---

# Checkout Flow CRO

You are an expert in optimizing D2C e-commerce checkout flows for the Indian market. Your goal is to reduce cart abandonment, increase checkout completion, maximize prepaid order share, and build buyer confidence through every step from cart to order confirmation.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before providing recommendations, understand:

1. **Flow Type**
   - Guest checkout vs. account required
   - Single-page vs. multi-step checkout
   - Mobile-first vs. responsive retrofit
   - Cart drawer (slide-out) vs. dedicated cart page

2. **Current State**
   - What is the cart abandonment rate?
   - Where in the checkout funnel do buyers drop off? (cart, address, payment, confirmation)
   - What is the COD-to-prepaid ratio?
   - What is the payment failure/retry rate?
   - What percentage of traffic is mobile?

3. **Business Constraints**
   - Which payment gateways are integrated? (Razorpay, Cashfree, PhonePe, Paytm)
   - What shipping partners are used? (Delhivery, Shiprocket, DTDC, Bluedart)
   - Are there pincode serviceability limits?
   - Is GST invoicing required for B2B buyers?
   - What is the free shipping threshold?

---

## Core Principles

### 1. Guest Checkout Is the Default
Never force account creation before purchase. The order itself creates the customer record.

**Guest checkout flow:**
- Email + phone at address step (creates ghost account)
- "Save details for faster checkout next time" checkbox (opt-in account creation)
- Post-purchase: "Set a password to track your order and earn loyalty points"

**When to encourage account creation:**
- After order is placed (not before)
- When returning for a second purchase
- To access saved addresses or order history
- For loyalty program enrollment

### 2. Reduce Steps, Not Information
Every click between "Add to Cart" and "Place Order" costs conversions. Combine steps where possible, but never hide costs or surprise the buyer.

### 3. Mobile-First Is Non-Negotiable
70%+ of Indian D2C traffic is mobile. Design for thumb zones, fat fingers, and slow connections first. Desktop is the adaptation, not the other way around.

### 4. Transparency Builds Trust
Show the full price breakdown early. No surprise charges at the last step. Indian buyers are highly price-sensitive and will abandon if the total jumps unexpectedly.

---

## Cart Page Optimization

### Product Summary
- Product thumbnail (the specific wash/color they selected)
- Product name, size, fit, wash clearly displayed
- Quantity selector (easy increment/decrement)
- Remove item option (not hidden)
- "Move to Wishlist" as alternative to remove

### Price Display
- MRP with strikethrough if discounted
- Selling price prominent
- Savings amount shown ("You save Rs 800")
- Per-item and subtotal clearly separated

### Promo Code Experience
- Single input field, always visible (not hidden behind "Have a coupon?" link)
- Apply button with clear success/failure feedback
- Show discount amount after applying
- "Remove" option to try a different code
- Auto-apply codes from UTM parameters or referral links
- Show available offers: "Use FIRST10 for 10% off your first order"

### Estimated Delivery
- Show estimated delivery date on cart page itself (before address entry, use IP-based city detection)
- Update dynamically once pincode is entered
- "Free delivery on orders above Rs X" progress bar

### Cart Abandonment Prevention
- Sticky "Proceed to Checkout" button on mobile
- Cart persistence (don't lose items on session expiry; 30-day cart memory)
- Low stock urgency: "Only 2 left in this size" (only if true)
- Recently viewed / "Complete the look" cross-sell below cart

---

## Address Entry Optimization

### Indian Address Form Design

**Field order (optimized for Indian addresses):**
1. Full Name
2. Phone Number (10-digit, with +91 prefix)
3. Pincode (6-digit, triggers auto-fill of city + state)
4. House/Flat/Building number
5. Area/Street/Locality
6. Landmark (optional but common in India)
7. City (auto-filled from pincode)
8. State (auto-filled from pincode)

### Pincode Auto-Fill
- On entering 6-digit pincode, auto-populate city and state
- Validate pincode against serviceability database
- Show "Delivery available" / "We don't deliver here yet" immediately
- If not serviceable, offer email notification when available
- Show estimated delivery date based on pincode

### Saved Addresses
- For returning customers, show saved addresses with one-tap selection
- "Home" and "Work" quick labels
- Edit option without re-entering everything
- "Use a different address" clearly available

### GST Billing Address
- Optional "Add GST details" toggle (not shown by default)
- GSTIN field with validation (15-character format)
- Separate billing address option if different from shipping
- Company name field appears when GST toggle is on

### Phone Number
- Required field (delivery partner needs it)
- Auto-format as they type: +91 XXXXX XXXXX
- Validate 10-digit format inline
- WhatsApp opt-in checkbox: "Send order updates on WhatsApp"

---

## Payment Flow Optimization

### Indian Payment Landscape Priority

Order payment methods by popularity and conversion rate for Indian D2C:

1. **UPI** (highest conversion, lowest cost)
   - Show UPI apps detected on device (GPay, PhonePe, Paytm)
   - QR code option for desktop
   - UPI ID input as fallback
   - Intent-based flow on mobile (opens UPI app directly)

2. **Credit/Debit Cards**
   - Save card for returning customers (tokenized via gateway)
   - Card number formatting as they type
   - Auto-detect card network (Visa, Mastercard, Rupay) and show logo
   - CVV field with tooltip explaining where to find it
   - 3D Secure handled seamlessly (redirect back to site, not stuck)

3. **EMI Options**
   - Show "EMI from Rs X/month" on cart and payment page
   - No-cost EMI prominently labeled if available
   - Bank selection with EMI tenure options
   - Clear total interest / "No extra cost" messaging

4. **Wallets** (Paytm, Amazon Pay, Mobikwik)
   - One-click for linked wallets
   - Show wallet balance if available via API

5. **Net Banking**
   - Top banks prominently (SBI, HDFC, ICICI, Axis, Kotak)
   - Others in searchable dropdown
   - Warn about redirect: "You'll be redirected to your bank's website"

6. **Cash on Delivery (COD)**
   - Show but don't lead with it (prepaid is better for business)
   - Add small COD fee (Rs 30-50) to incentivize prepaid
   - "Pay online and get Rs 50 off" nudge
   - Phone verification via OTP before COD orders (reduces RTO)
   - COD availability check by pincode (some pincodes are prepaid-only)

### Payment Failure Recovery
- Clear error message: what went wrong, what to do next
- "Try another payment method" prominent button
- Don't clear the order; keep it intact for retry
- Auto-retry UPI if timeout (with user consent)
- Send "Complete your payment" link via SMS/WhatsApp for abandoned payment attempts
- Razorpay Magic Checkout or similar for saved payment methods

---

## Shipping Selection

### Standard vs. Express
- Show delivery date estimates, not just "5-7 business days"
- Express option with specific date: "Get it by Wednesday, April 15"
- Free shipping threshold with progress: "Add Rs 300 more for free shipping"
- If only one shipping option, don't make them "select" it; just show the info

### Delivery Date Estimates
- Calculate from pincode + warehouse location
- Show date range: "Estimated delivery: April 14-16"
- Account for weekends, holidays, and known delays
- Update estimate if shipping method changes

### Free Shipping Strategy
- Clear threshold communicated early (cart page, not just checkout)
- Progress bar: "Rs 200 away from free shipping"
- Suggest add-on products to reach threshold (socks, belt, care kit)
- Free shipping on first order as acquisition incentive

---

## Order Summary and Confirmation

### Order Summary (Before Placing Order)
- Complete item list with thumbnails
- Price breakdown: Subtotal, Discount, Shipping, COD fee (if any), GST, Total
- Delivery address with edit option
- Payment method with edit option
- Estimated delivery date
- "Place Order" as single prominent CTA
- Return/exchange policy reminder: "Easy 7-day exchange if the fit isn't right"

### Order Confirmation Page
- Order number prominently displayed
- "Order placed successfully" with estimated delivery
- Order summary (items, total, address)
- "Track your order" link
- Cross-sell: "Complete the look" recommendations
- Referral prompt: "Share INDUS with a friend, both get Rs 200 off"
- Account creation prompt for guest users
- Download invoice option

---

## Size and Fit Confidence at Checkout

### Cart-Level Size Reassurance
- Link to size guide from cart (opens modal, doesn't navigate away)
- "Not sure about your size? Our exchange is free and easy" messaging
- Show fit description next to size: "32 - Slim Fit (fits true to size)"

### Checkout-Level Trust
- "Free size exchange" badge near order total
- "90% of customers find their size matches our guide"
- For first-time buyers: "Our most popular size in Slim Fit is 32"

---

## Cart Abandonment Recovery

### Exit Intent (Desktop)
- Overlay on mouse-leave: "Leaving? Your cart is saved. We'll email you a reminder."
- Don't offer discount on first exit (save for second reminder)
- Optional: Show limited-time free shipping offer

### Email Recovery Sequence
1. **1 hour post-abandonment**: "You left something behind" - show cart items, direct link to resume
2. **24 hours**: "Your [product name] is waiting" - add social proof (reviews, ratings)
3. **72 hours**: "Last chance + free shipping" or small discount (5-10%)
4. **7 days**: Final reminder, consider stronger incentive for first-time buyers

### WhatsApp Recovery (High-Performing in India)
- 30 minutes post-abandonment: Cart reminder with product image
- Quick reply buttons: "Complete Order" / "Need Help"
- Higher open rates than email (80%+ vs 20%)
- Requires WhatsApp Business API (Gupshup, Wati, Interakt)

### SMS Recovery
- 2 hours post-abandonment: Short message with cart link
- Keep it under 160 characters
- Include brand name and a reason to return

---

## Mobile Checkout Optimization

### Thumb-Zone Design
- Primary CTAs in bottom 40% of screen (natural thumb reach)
- Sticky bottom bar with "Proceed" / "Place Order" button
- Avoid top-of-screen interactions for critical actions
- Minimum touch target: 48px height

### Input Optimization
- Numeric keyboard for phone, pincode, card number, CVV
- Email keyboard (with @ and .com) for email field
- Auto-advance between fields where possible
- Paste support for OTP, UPI ID, coupon codes

### Performance
- Checkout page should load in under 2 seconds on 4G
- Lazy-load non-critical elements (cross-sell, reviews)
- Skeleton loaders for payment method list
- No full-page reloads between checkout steps

### Mobile-Specific Patterns
- Bottom sheet for address selection (not a new page)
- Swipeable payment method cards
- Haptic feedback on "Order Placed" (where supported)
- Deep link to UPI apps (intent-based payment)
- Camera-based card scanning for card entry

---

## Trust Signals Throughout Checkout

### Security
- "100% Secure Payments" with lock icon near payment section
- Payment gateway logos (Razorpay, Visa Secure, Mastercard SecureCode)
- SSL badge (subtle, near footer)
- "Your card details are encrypted and never stored"

### Policy Reminders
- "7-day easy exchange" near size display
- "Free shipping above Rs X" near shipping section
- "COD available" badge (builds trust for new D2C brands)
- "Genuine products" or "Made in India" badge

### Social Proof
- "X orders placed today" (if significant volume)
- Product rating stars next to item in cart
- "Trusted by X+ customers" near checkout CTA

---

## Measurement

### Key Metrics

| Metric | Description | Benchmark (Indian D2C) |
|--------|-------------|----------------------|
| Cart abandonment rate | % who add to cart but don't complete | 65-75% |
| Checkout completion rate | % who start checkout and finish | 40-55% |
| Payment failure rate | % of payment attempts that fail | 5-15% |
| COD-to-prepaid ratio | Share of COD vs. online payments | Target: 30% COD / 70% prepaid |
| Average order value (AOV) | Average cart total at purchase | Track and optimize |
| Checkout time | Seconds from cart to order placed | Under 120 seconds |
| Mobile checkout rate | Completion rate on mobile vs. desktop | Mobile typically 10-20% lower |
| Return to cart rate | % who abandon but come back | 15-25% |

### What to Track

- Step-by-step drop-off: Cart > Address > Payment > Confirmation
- Payment method selection distribution
- Promo code usage rate and impact on AOV
- Pincode serviceability rejection rate
- Payment failure reasons (insufficient balance, bank decline, timeout)
- Cart recovery email/WhatsApp click-through and conversion rates
- Time spent on each checkout step
- Address auto-fill usage rate
- COD OTP verification completion rate

---

## Output Format

### Audit Findings
For each issue found:
- **Issue**: What's wrong
- **Impact**: Why it matters (with estimated conversion impact if possible)
- **Fix**: Specific recommendation with implementation detail
- **Priority**: High / Medium / Low

### Recommended Changes
Organized by:
1. Quick wins (same-day fixes: copy changes, field reordering, trust badges)
2. High-impact changes (week-level effort: payment method ordering, cart recovery setup)
3. Test hypotheses (things to A/B test before full rollout)

### Checkout Redesign (if requested)
- Recommended step flow with rationale
- Field set for each step
- Copy for labels, placeholders, buttons, error messages
- Payment method ordering and presentation
- Mobile wireframe suggestions
- Trust signal placement

---

## Experiment Ideas

### Cart Page Experiments

**Layout & Structure**
- Cart drawer (slide-out) vs. dedicated cart page
- Single-page checkout vs. multi-step (address > payment > confirm)
- Accordion checkout vs. linear steps
- Progress bar vs. step indicators vs. none
- Sticky cart summary on scroll vs. fixed sidebar

**Price & Urgency**
- Show savings amount vs. don't
- Free shipping progress bar vs. static message
- Low stock indicator ("Only 3 left") vs. no urgency
- Limited-time discount timer vs. no timer
- MRP strikethrough vs. showing only selling price

**Cross-Sell**
- "Complete the look" suggestions in cart vs. not
- "Customers also bought" vs. "Goes well with"
- Add-on products to reach free shipping threshold
- Cross-sell placement: in cart vs. after order

---

### Address & Shipping Experiments

**Address Form**
- Pincode-first flow (auto-fill city/state) vs. traditional top-down
- Single address form vs. separate shipping/billing
- Landmark field: shown vs. hidden behind "Add landmark" link
- Saved address one-tap vs. always show form
- Map-based address selection vs. form-only

**Shipping**
- Show delivery date estimates vs. "5-7 business days"
- Express shipping upsell: prominent vs. subtle
- Free shipping threshold: Rs 999 vs. Rs 1499 vs. Rs 1999
- "Add Rs X for free shipping" product suggestions vs. no suggestions

---

### Payment Experiments

**Method Ordering**
- UPI-first vs. Cards-first vs. dynamic ordering based on user
- Show all methods vs. "More payment options" expandable
- Recommended method badge ("Most popular") vs. no badge
- COD position: last vs. mixed in vs. hidden behind "More options"

**COD Optimization**
- COD fee (Rs 30/50/99) vs. no COD fee
- "Save Rs X by paying online" nudge vs. no nudge
- COD OTP verification vs. no verification
- Prepaid discount messaging placement and amount

**Payment UX**
- Saved cards for returning users vs. always re-enter
- UPI intent flow (auto-open app) vs. QR code vs. UPI ID entry
- EMI calculator on payment page vs. pre-calculated display
- Payment failure retry flow: same method vs. switch method prompt

---

### Trust & Confidence Experiments

**Trust Signals**
- Security badges placement: near CTA vs. near payment fields vs. both
- Return policy reminder in checkout vs. not
- Customer count social proof vs. no social proof
- "Made in India" badge impact on conversion

**Size Confidence**
- Size guide link in cart vs. not
- "Free exchange" messaging prominence: badge vs. banner vs. tooltip
- Fit recommendation based on previous orders (returning customers)
- "Most popular size" data display vs. not

---

### Recovery Experiments

**Exit Intent**
- Exit popup: save cart reminder vs. discount offer vs. no popup
- Exit popup timing: on first exit vs. after 30 seconds of inactivity
- Mobile: back-button intercept vs. no intercept

**Cart Recovery**
- Email timing: 1h vs. 4h vs. 24h for first reminder
- WhatsApp vs. email vs. both for recovery
- Recovery message: cart contents vs. social proof vs. discount
- Number of recovery touches: 2 vs. 3 vs. 4
- Personalized discount in recovery vs. flat offer

---

## Task-Specific Questions

1. What is your current cart abandonment rate and checkout completion rate?
2. What is your COD-to-prepaid ratio?
3. Which payment gateway are you using, and what payment methods are enabled?
4. What percentage of your traffic is mobile?
5. Do you have cart recovery (email/WhatsApp) set up today?
6. What is your free shipping threshold, and what is the average order value?
7. Do you support guest checkout or is account creation required?

---

## Related Skills

- **post-purchase-cro**: For optimizing what happens after order placement
- **page-cro**: For product page and landing page optimization leading to cart
- **form-cro**: For non-checkout forms (newsletter signup, contact)
- **ab-test-setup**: For testing checkout flow changes
- **email-sequence**: For cart recovery email sequences

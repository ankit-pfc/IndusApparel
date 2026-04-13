# Shopify Skills Reference

A comprehensive guide to all 16 Shopify skills available via the `shopify-plugin`.

---

## 1. shopify-admin

**Purpose:** Build apps and integrations that extend and enhance the Shopify admin using the Admin GraphQL API.

**Use when:** You need to query or mutate Shopify admin data — products, orders, customers, inventory, etc.

**Invoke:** `shopify-plugin:shopify-admin`

---

## 2. shopify-dev

**Purpose:** Search Shopify developer documentation across all APIs.

**Use when:** No API-specific skill applies and you need general Shopify development guidance.

**Invoke:** `shopify-plugin:shopify-dev`

---

## 3. shopify-functions

**Purpose:** Customize backend logic that powers parts of Shopify using Shopify Functions.

**Available APIs:**
- Discount
- Cart and Checkout Validation
- Cart Transform
- Pickup Point Delivery Option Generator
- Delivery Customization
- Fulfillment Constraints
- Local Pickup Delivery Option Generator
- Order Routing Location Rule
- Payment Customization

**Invoke:** `shopify-plugin:shopify-functions`

---

## 4. shopify-partner

**Purpose:** Programmatically access data about your Partner Dashboard — apps, themes, and affiliate referrals.

**Use when:** You need Partner API data for managing apps or themes in the partner ecosystem.

**Invoke:** `shopify-plugin:shopify-partner`

---

## 5. shopify-polaris-admin-extensions

**Purpose:** Add custom actions and blocks from your app at contextually relevant spots throughout the Shopify Admin.

**Use when:** Building Admin UI Extensions. Also supports scaffolding new admin extensions using Shopify CLI.

**Invoke:** `shopify-plugin:shopify-polaris-admin-extensions`

---

## 6. shopify-customer

**Purpose:** Allow customers to access their own data including orders, payment methods, and addresses via the Customer Account API.

**Use when:** Building customer-facing account features.

**Invoke:** `shopify-plugin:shopify-customer`

---

## 7. shopify-payments-apps

**Purpose:** Enable payment providers to integrate their payment solutions with Shopify's checkout.

**Use when:** Building a payment gateway or payment integration for Shopify.

**Invoke:** `shopify-plugin:shopify-payments-apps`

---

## 8. shopify-hydrogen

**Purpose:** Hydrogen storefront implementation cookbooks and recipes.

**Available Recipes:**
- B2B Commerce
- Bundles
- Combined Listings
- Custom Cart Method
- Dynamic Content with Metaobjects
- Express Server
- Google Tag Manager Integration
- Infinite Scroll
- Legacy Customer Account Flow
- Markets
- Partytown + Google Tag Manager
- Subscriptions
- Third-party API Queries and Caching

**Important:** Always use this skill for any Hydrogen storefront question — do NOT use Storefront GraphQL when "Hydrogen" is mentioned.

**Invoke:** `shopify-plugin:shopify-hydrogen`

---

## 9. shopify-custom-data

**Purpose:** Model and store custom data using Metafields and Metaobjects.

- **Metafields** extend built-in Shopify data types (products, customers, etc.)
- **Metaobjects** are custom data types for bespoke data structures
- **Definitions** provide schema and configuration for values

**Important:** Must be used first when prompts mention Metafields or Metaobjects.

**Invoke:** `shopify-plugin:shopify-custom-data`

---

## 10. shopify-admin-execution

**Purpose:** Run validated Admin GraphQL operations against a specific store using Shopify CLI.

**Use when:** The user wants to execute store workflows (not just query/mutation text). Look for phrases like "my store", "this store", a store domain, product reads, low-inventory lookups, product updates, and inventory changes.

**Examples:**
- "Show me the first 10 products on my store"
- "Find products with low inventory on my store"
- "Set inventory at the Toronto warehouse so SKU ABC-123 is 12"

**Invoke:** `shopify-plugin:shopify-admin-execution`

---

## 11. shopify-polaris-app-home

**Purpose:** Build your app's primary user interface embedded in the Shopify admin using Polaris.

**Use when:** The prompt mentions "Polaris" without specifying a particular API — default to this skill.

**Invoke:** `shopify-plugin:shopify-polaris-app-home`

---

## 12. shopify-polaris-checkout-extensions

**Purpose:** Build custom functionality at defined points in the checkout flow.

**Supported Areas:**
- Product information
- Shipping
- Payment
- Order summary
- Shop Pay

**Also supports:** Scaffolding new checkout extensions using Shopify CLI.

**Invoke:** `shopify-plugin:shopify-polaris-checkout-extensions`

---

## 13. shopify-polaris-customer-account-extensions

**Purpose:** Build custom functionality on the Order index, Order status, and Profile pages in customer accounts.

**Also supports:** Scaffolding new customer account extensions using Shopify CLI.

**Invoke:** `shopify-plugin:shopify-polaris-customer-account-extensions`

---

## 14. shopify-storefront-graphql

**Purpose:** Direct GraphQL queries/mutations for custom storefronts — full control over data fetching and rendering.

**Use when:** You need custom storefront data fetching and cart operations with your own UI.

**Important:** NOT for Web Components. If the prompt mentions HTML tags like `<shopify-store>` or `<shopify-cart>`, use `storefront-web-components` instead.

**Invoke:** `shopify-plugin:shopify-storefront-graphql`

---

## 15. shopify-liquid

**Purpose:** Liquid templating language for Shopify themes — load dynamic content on storefronts.

**Keywords:** liquid, theme, shopify-theme, liquid-component, liquid-block, liquid-section, liquid-snippet, liquid-schemas, shopify-theme-schemas

**Use when:** Working with Shopify theme development or Liquid templates.

**Invoke:** `shopify-plugin:shopify-liquid`

---

## 16. shopify-pos-ui

**Purpose:** Build retail point-of-sale applications using Shopify's POS UI components.

**Keywords:** POS, Retail, smart grid

**Also supports:** Scaffolding new POS extensions using Shopify CLI.

**Invoke:** `shopify-plugin:shopify-pos-ui`

---

## Quick Reference Table

| # | Skill | Category |
|---|-------|----------|
| 1 | `shopify-admin` | Backend / Data |
| 2 | `shopify-dev` | Documentation |
| 3 | `shopify-functions` | Backend Logic |
| 4 | `shopify-partner` | Partner Ecosystem |
| 5 | `shopify-polaris-admin-extensions` | Admin UI |
| 6 | `shopify-customer` | Customer Accounts |
| 7 | `shopify-payments-apps` | Payments |
| 8 | `shopify-hydrogen` | Storefront (React) |
| 9 | `shopify-custom-data` | Metafields / Metaobjects |
| 10 | `shopify-admin-execution` | Store Operations |
| 11 | `shopify-polaris-app-home` | App UI (Polaris) |
| 12 | `shopify-polaris-checkout-extensions` | Checkout UI |
| 13 | `shopify-polaris-customer-account-extensions` | Customer Account UI |
| 14 | `shopify-storefront-graphql` | Storefront (GraphQL) |
| 15 | `shopify-liquid` | Themes / Liquid |
| 16 | `shopify-pos-ui` | POS / Retail |

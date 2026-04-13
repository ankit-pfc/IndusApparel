import {
  HeroSection,
  TrustBar,
  FeaturedProducts,
  ShopByFit,
  BrandStory,
  ShopByWash,
  ConstructionDetails,
  ComparisonTable,
  IndusPromise,
  Testimonials,
  NewsletterCTA,
  ClosingStatement,
} from "@/components/storefront/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <ShopByFit />
      <BrandStory />
      <ShopByWash />
      <ConstructionDetails />
      <ComparisonTable />
      <IndusPromise />
      <Testimonials />
      <NewsletterCTA />
      <ClosingStatement />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import {
  ConstructionHighlights,
  ImageGallery,
  ProductInfo,
  RelatedProducts,
} from "@/components/storefront";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} — INDUS`,
    description: `${product.fit.name} · ${product.fabric} · ${product.wash}. ${product.fit.desc}`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  return (
    <>
      <Container>
        <nav aria-label="Breadcrumb" className="pt-8 text-xs text-monsoon-grey font-mono">
          <Link href="/" className="hover:text-indus-deep">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/jeans" className="hover:text-indus-deep">Jeans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </Container>

      <Container>
        <div className="py-10 lg:py-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ImageGallery sku={product.sku} alt={product.name} />
          <ProductInfo product={product} />
        </div>
      </Container>

      <Section bg="sand">
        <ConstructionHighlights product={product} />
      </Section>

      <Section>
        <RelatedProducts products={related} />
      </Section>
    </>
  );
}

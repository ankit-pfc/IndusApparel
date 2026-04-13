"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";
import { VariantSelector } from "./VariantSelector";

export interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [size, setSize] = useState<number | null>(null);
  const [length, setLength] = useState<string | null>(null);
  const { addItem, openCart } = useCart();

  const canAdd = size !== null && length !== null;

  const handleAddToCart = () => {
    if (!canAdd) return;

    addItem(product, size, length);
    openCart();
  };

  return (
    <div>
      <div className="text-xs font-mono text-monsoon-grey">{product.sku}</div>
      <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-semibold text-gray-900">
        {product.name}
      </h1>
      <div className="mt-2 text-sm text-monsoon-grey">
        {product.fabric} &bull; {product.fit.name} &bull; Hem {product.fit.hem}{" "}
        &bull; Rise {product.fit.rise}
      </div>

      <div className="mt-5 text-3xl font-bold text-indus-deep">
        &#8377;{product.price.toLocaleString()}
      </div>
      <div className="text-xs text-monsoon-grey">
        Inclusive of all taxes
      </div>

      <div className="mt-8">
        <VariantSelector
          sizes={product.sizes}
          lengths={product.lengths}
          selectedSize={size}
          selectedLength={length}
          onSizeChange={setSize}
          onLengthChange={setLength}
        />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button
          size="lg"
          disabled={!canAdd}
          onClick={handleAddToCart}
          className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {canAdd ? "Add to Cart" : "Select size and length"}
        </Button>
        <Link href="/size-guide">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Size Guide
          </Button>
        </Link>
      </div>

      <ul className="mt-8 space-y-2 text-sm text-monsoon-grey leading-relaxed">
        <li>&bull; 12–14 SPI seams, chainstitched hems</li>
        <li>&bull; Copper rivets, YKK zipper, reinforced pocket bags</li>
        <li>&bull; Lower-impact {product.wash.toLowerCase()} wash</li>
        <li>&bull; Repair-first guarantee</li>
      </ul>
    </div>
  );
}

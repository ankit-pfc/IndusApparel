import type { ReactNode } from "react";
import { StorefrontShell } from "@/components/layout";
import { CartDrawer } from "@/components/storefront";
import { CartProvider } from "@/lib/cart-context";

export default function StorefrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CartProvider>
      <CartDrawer />
      <StorefrontShell>{children}</StorefrontShell>
    </CartProvider>
  );
}

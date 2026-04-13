"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { JeansFlat } from "@/components/product";
import { Button, Container } from "@/components/ui";
import { useCart } from "@/lib/cart-context";

function formatPrice(amount: number) {
    return `₹${amount.toLocaleString()}`;
}

export function CartDrawer() {
    const {
        items,
        isOpen,
        subtotal,
        closeCart,
        updateQuantity,
        removeItem,
    } = useCart();
    const pathname = usePathname();
    const [trackedPath, setTrackedPath] = useState(pathname);

    if (trackedPath !== pathname) {
        setTrackedPath(pathname);
        closeCart();
    }

    useEffect(() => {
        if (!isOpen) return;

        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeCart();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = original;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [closeCart, isOpen]);

    return (
        <div
            aria-hidden={!isOpen}
            className={`fixed inset-0 z-50 transition-opacity duration-200 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
        >
            <button
                type="button"
                aria-label="Close cart"
                onClick={closeCart}
                className="absolute inset-0 bg-black/35"
            />

            <aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-drawer-title"
                className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="border-b border-black/5">
                    <Container>
                        <div className="flex items-center justify-between py-5">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey">
                                    Your bag
                                </p>
                                <h2 id="cart-drawer-title" className="mt-1 font-serif text-2xl font-semibold text-indus-deep">
                                    Cart
                                </h2>
                            </div>
                            <button
                                type="button"
                                aria-label="Close cart"
                                onClick={closeCart}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    </Container>
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                        <div className="w-28 text-indus-deep/80">
                            <JeansFlat tone="#112B4A" />
                        </div>
                        <h3 className="mt-6 font-serif text-2xl font-semibold text-indus-deep">
                            Your cart is empty
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-monsoon-grey">
                            Choose your fit, size, and inseam to start building your INDUS order.
                        </p>
                        <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
                            <Link href="/jeans" className="flex-1" onClick={closeCart}>
                                <Button size="lg" className="w-full">
                                    Shop jeans
                                </Button>
                            </Link>
                            <Button variant="secondary" size="lg" className="flex-1" onClick={closeCart}>
                                Continue browsing
                            </Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            <div className="space-y-5">
                                {items.map((item) => (
                                    <div key={item.id} className="rounded-2xl border border-black/5 p-4">
                                        <div className="flex gap-4">
                                            <div className="w-20 shrink-0 rounded-xl bg-sand-selvedge p-2 text-indus-deep">
                                                <JeansFlat tone={item.product.color} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <Link
                                                            href={`/jeans/${item.product.slug}`}
                                                            onClick={closeCart}
                                                            className="font-semibold text-gray-900 hover:text-indus-deep transition-colors"
                                                        >
                                                            {item.product.name}
                                                        </Link>
                                                        <p className="mt-1 text-sm text-monsoon-grey">
                                                            {item.product.fit.name} • Size {item.size} • {item.length}
                                                        </p>
                                                        <p className="mt-1 text-sm text-monsoon-grey">
                                                            {item.product.fabric} • {item.product.wash}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-semibold text-indus-deep">
                                                            {formatPrice(item.product.price * item.quantity)}
                                                        </p>
                                                        <p className="mt-1 text-xs text-monsoon-grey">
                                                            {formatPrice(item.product.price)} each
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex items-center justify-between gap-3">
                                                    <div className="inline-flex items-center rounded-lg border border-black/10">
                                                        <button
                                                            type="button"
                                                            aria-label={`Decrease quantity for ${item.product.name}`}
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="h-10 w-10 rounded-l-lg text-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="inline-flex min-w-10 items-center justify-center text-sm font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            aria-label={`Increase quantity for ${item.product.name}`}
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="h-10 w-10 rounded-r-lg text-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-sm font-medium text-monsoon-grey underline decoration-black/20 underline-offset-4 hover:text-indus-deep"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-black/5 px-6 py-6">
                            <div className="flex items-center justify-between text-sm text-monsoon-grey">
                                <span>Subtotal</span>
                                <span className="font-semibold text-indus-deep">{formatPrice(subtotal)}</span>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-monsoon-grey">
                                Shipping and taxes calculated at checkout.
                            </p>

                            <div className="mt-5 flex flex-col gap-3">
                                <Link href="/checkout" onClick={closeCart}>
                                    <Button size="lg" className="w-full">
                                        Proceed to checkout
                                    </Button>
                                </Link>
                                <Button variant="secondary" size="lg" className="w-full" onClick={closeCart}>
                                    Continue shopping
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}

function CloseIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
        >
            <path d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}
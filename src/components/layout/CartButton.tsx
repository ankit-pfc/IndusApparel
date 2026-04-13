"use client";

import { useCart } from "@/lib/cart-context";

export function CartButton() {
    const { totalItems, openCart } = useCart();
    const badge = totalItems > 9 ? "9+" : totalItems;

    return (
        <button
            type="button"
            aria-label={`Cart${totalItems > 0 ? `, ${totalItems} item${totalItems === 1 ? "" : "s"}` : ""}`}
            onClick={openCart}
            className="relative hidden md:inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors"
        >
            <CartIcon />
            {totalItems > 0 ? (
                <span className="absolute -right-1 -top-1 min-w-5 h-5 px-1 rounded-full bg-river-clay text-white text-[10px] font-semibold flex items-center justify-center">
                    {badge}
                </span>
            ) : null}
        </button>
    );
}

function CartIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    );
}
import { describe, expect, it } from "vitest";
import type { Product } from "@/lib/types";
import {
    cartReducer,
    initialCartState,
    type CartAction,
    type CartState,
} from "./cart-context";

const productA: Product = {
    sku: "IND-MJ-ST-101",
    slug: "core-slim-taper-rinse",
    name: "Core Slim Taper — Rinse",
    price: 2999,
    fabric: "Core Stretch 11.5 oz",
    wash: "Rinse Indigo",
    color: "#1b3252",
    fitCode: "ST",
    fit: {
        code: "ST",
        name: "Slim Taper",
        rise: "Mid",
        hem: "Tapered",
        desc: "Balanced through the thigh with a clean taper below the knee.",
    },
    washInfo: undefined,
    sizes: [28, 30, 32, 34, 36, 38, 40],
    lengths: ["L30", "L32", "L34"],
    images: { alt: "Core Slim Taper — Rinse", variant: "front" },
};

const productB: Product = {
    sku: "IND-MJ-SR-121",
    slug: "straight-copper-rigid",
    name: "Straight — Copper Rigid",
    price: 3299,
    fabric: "Rigid 12.5 oz",
    wash: "Copper Rinse",
    color: "#263f5f",
    fitCode: "SR",
    fit: {
        code: "SR",
        name: "Straight",
        rise: "Mid",
        hem: "Straight",
        desc: "Room through the leg with a clean straight fall from knee to hem.",
    },
    washInfo: undefined,
    sizes: [28, 30, 32, 34, 36, 38, 40],
    lengths: ["L30", "L32", "L34"],
    images: { alt: "Straight — Copper Rigid", variant: "front" },
};

function reduce(state: CartState, action: CartAction) {
    return cartReducer(state, action);
}

describe("cartReducer", () => {
    it("returns the initial state for unknown hydration-free default behavior", () => {
        expect(reduce(initialCartState, { type: "CLOSE_CART" })).toEqual(initialCartState);
    });

    it("adds a new item to an empty cart", () => {
        const state = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        expect(state.items).toHaveLength(1);
        expect(state.items[0]).toMatchObject({
            id: `${productA.sku}::32::L32`,
            size: 32,
            length: "L32",
            quantity: 1,
        });
    });

    it("stores a product snapshot when adding an item", () => {
        const state = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 30, length: "L30" },
        });

        expect(state.items[0]?.product).toMatchObject({
            sku: productA.sku,
            slug: productA.slug,
            name: productA.name,
            price: productA.price,
        });
    });

    it("increments quantity for the same sku-size-length combination", () => {
        const once = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });
        const twice = reduce(once, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        expect(twice.items).toHaveLength(1);
        expect(twice.items[0]?.quantity).toBe(2);
    });

    it("creates separate lines for different sizes", () => {
        const state = reduce(
            reduce(initialCartState, {
                type: "ADD_ITEM",
                payload: { product: productA, size: 30, length: "L32" },
            }),
            {
                type: "ADD_ITEM",
                payload: { product: productA, size: 32, length: "L32" },
            }
        );

        expect(state.items).toHaveLength(2);
    });

    it("creates separate lines for different lengths", () => {
        const state = reduce(
            reduce(initialCartState, {
                type: "ADD_ITEM",
                payload: { product: productA, size: 32, length: "L30" },
            }),
            {
                type: "ADD_ITEM",
                payload: { product: productA, size: 32, length: "L34" },
            }
        );

        expect(state.items).toHaveLength(2);
    });

    it("creates separate lines for different products", () => {
        const state = reduce(
            reduce(initialCartState, {
                type: "ADD_ITEM",
                payload: { product: productA, size: 32, length: "L32" },
            }),
            {
                type: "ADD_ITEM",
                payload: { product: productB, size: 32, length: "L32" },
            }
        );

        expect(state.items).toHaveLength(2);
    });

    it("removes an item by id", () => {
        const state = reduce(
            reduce(initialCartState, {
                type: "ADD_ITEM",
                payload: { product: productA, size: 32, length: "L32" },
            }),
            { type: "REMOVE_ITEM", payload: { id: `${productA.sku}::32::L32` } }
        );

        expect(state.items).toEqual([]);
    });

    it("ignores removing an unknown id", () => {
        const state = reduce(initialCartState, {
            type: "REMOVE_ITEM",
            payload: { id: "missing" },
        });

        expect(state).toEqual(initialCartState);
    });

    it("updates quantity for an existing item", () => {
        const added = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        const state = reduce(added, {
            type: "UPDATE_QUANTITY",
            payload: { id: `${productA.sku}::32::L32`, quantity: 4 },
        });

        expect(state.items[0]?.quantity).toBe(4);
    });

    it("removes an item when quantity is updated to zero", () => {
        const added = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        const state = reduce(added, {
            type: "UPDATE_QUANTITY",
            payload: { id: `${productA.sku}::32::L32`, quantity: 0 },
        });

        expect(state.items).toEqual([]);
    });

    it("removes an item when quantity is updated to a negative number", () => {
        const added = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        const state = reduce(added, {
            type: "UPDATE_QUANTITY",
            payload: { id: `${productA.sku}::32::L32`, quantity: -1 },
        });

        expect(state.items).toEqual([]);
    });

    it("leaves items unchanged when updating an unknown id", () => {
        const added = reduce(initialCartState, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        const state = reduce(added, {
            type: "UPDATE_QUANTITY",
            payload: { id: "missing", quantity: 2 },
        });

        expect(state).toEqual(added);
    });

    it("opens the cart", () => {
        const state = reduce(initialCartState, { type: "OPEN_CART" });
        expect(state.isOpen).toBe(true);
    });

    it("closes the cart", () => {
        const state = reduce({ ...initialCartState, isOpen: true }, { type: "CLOSE_CART" });
        expect(state.isOpen).toBe(false);
    });

    it("toggles the cart open state", () => {
        const open = reduce(initialCartState, { type: "TOGGLE_CART" });
        const closed = reduce(open, { type: "TOGGLE_CART" });

        expect(open.isOpen).toBe(true);
        expect(closed.isOpen).toBe(false);
    });

    it("clears items while preserving drawer state", () => {
        const added = reduce({ ...initialCartState, isOpen: true }, {
            type: "ADD_ITEM",
            payload: { product: productA, size: 32, length: "L32" },
        });

        const state = reduce(added, { type: "CLEAR_CART" });

        expect(state.items).toEqual([]);
        expect(state.isOpen).toBe(true);
    });

    it("hydrates cart state from payload", () => {
        const state = reduce(initialCartState, {
            type: "HYDRATE_CART",
            payload: {
                isOpen: true,
                items: [
                    {
                        id: `${productA.sku}::34::L34`,
                        product: {
                            sku: productA.sku,
                            slug: productA.slug,
                            name: productA.name,
                            price: productA.price,
                            color: productA.color,
                            fit: productA.fit,
                            fabric: productA.fabric,
                            wash: productA.wash,
                        },
                        size: 34,
                        length: "L34",
                        quantity: 2,
                    },
                ],
            },
        });

        expect(state.isOpen).toBe(true);
        expect(state.items[0]?.quantity).toBe(2);
    });
});
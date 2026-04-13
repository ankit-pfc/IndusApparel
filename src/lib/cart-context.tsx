"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    type ReactNode,
} from "react";
import type { Product } from "@/lib/types";

const CART_STORAGE_KEY = "indus-cart";

export interface CartProductSnapshot {
    sku: Product["sku"];
    slug: Product["slug"];
    name: Product["name"];
    price: Product["price"];
    color: Product["color"];
    fit: Product["fit"];
    fabric: Product["fabric"];
    wash: Product["wash"];
}

export interface CartItem {
    id: string;
    product: CartProductSnapshot;
    size: number;
    length: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

export type CartAction =
    | {
        type: "ADD_ITEM";
        payload: { product: Product; size: number; length: string };
    }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
    | { type: "OPEN_CART" }
    | { type: "CLOSE_CART" }
    | { type: "TOGGLE_CART" }
    | { type: "CLEAR_CART" }
    | { type: "HYDRATE_CART"; payload: CartState };

export interface CartContextValue extends CartState {
    subtotal: number;
    totalItems: number;
    addItem: (product: Product, size: number, length: string) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    clearCart: () => void;
}

const initialCartState: CartState = {
    items: [],
    isOpen: false,
};

const CartContext = createContext<CartContextValue | null>(null);

function createCartItemId(sku: string, size: number, length: string) {
    return `${sku}::${size}::${length}`;
}

function toCartProductSnapshot(product: Product): CartProductSnapshot {
    return {
        sku: product.sku,
        slug: product.slug,
        name: product.name,
        price: product.price,
        color: product.color,
        fit: product.fit,
        fabric: product.fabric,
        wash: product.wash,
    };
}

function sanitizeCartState(value: unknown): CartState {
    if (!value || typeof value !== "object") {
        return initialCartState;
    }

    const candidate = value as Partial<CartState>;
    const items = Array.isArray(candidate.items)
        ? candidate.items.filter((item): item is CartItem => {
            if (!item || typeof item !== "object") return false;

            const cartItem = item as Partial<CartItem>;
            return (
                typeof cartItem.id === "string" &&
                !!cartItem.product &&
                typeof cartItem.product === "object" &&
                typeof cartItem.size === "number" &&
                typeof cartItem.length === "string" &&
                typeof cartItem.quantity === "number" &&
                cartItem.quantity > 0
            );
        })
        : [];

    return {
        items,
        isOpen: Boolean(candidate.isOpen),
    };
}

function loadCartState(): CartState {
    if (typeof window === "undefined") return initialCartState;

    try {
        const stored = window.localStorage.getItem(CART_STORAGE_KEY);
        if (!stored) return initialCartState;
        return sanitizeCartState(JSON.parse(stored));
    } catch {
        return initialCartState;
    }
}

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            const { product, size, length } = action.payload;
            const id = createCartItemId(product.sku, size, length);
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id,
                        product: toCartProductSnapshot(product),
                        size,
                        length,
                        quantity: 1,
                    },
                ],
            };
        }

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };

        case "UPDATE_QUANTITY": {
            const { id, quantity } = action.payload;

            if (quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter((item) => item.id !== id),
                };
            }

            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                ),
            };
        }

        case "OPEN_CART":
            return { ...state, isOpen: true };

        case "CLOSE_CART":
            return { ...state, isOpen: false };

        case "TOGGLE_CART":
            return { ...state, isOpen: !state.isOpen };

        case "CLEAR_CART":
            return { ...state, items: [] };

        case "HYDRATE_CART":
            return sanitizeCartState(action.payload);

        default:
            return state;
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialCartState, loadCartState);

    useEffect(() => {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const subtotal = useMemo(
        () => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        [state.items]
    );

    const totalItems = useMemo(
        () => state.items.reduce((sum, item) => sum + item.quantity, 0),
        [state.items]
    );

    const addItem = useCallback((product: Product, size: number, length: string) => {
        dispatch({ type: "ADD_ITEM", payload: { product, size, length } });
    }, []);

    const removeItem = useCallback((id: string) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
    }, []);

    const updateQuantity = useCallback((id: string, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }, []);

    const openCart = useCallback(() => {
        dispatch({ type: "OPEN_CART" });
    }, []);

    const closeCart = useCallback(() => {
        dispatch({ type: "CLOSE_CART" });
    }, []);

    const toggleCart = useCallback(() => {
        dispatch({ type: "TOGGLE_CART" });
    }, []);

    const clearCart = useCallback(() => {
        dispatch({ type: "CLEAR_CART" });
    }, []);

    const value = useMemo<CartContextValue>(
        () => ({
            ...state,
            subtotal,
            totalItems,
            addItem,
            removeItem,
            updateQuantity,
            openCart,
            closeCart,
            toggleCart,
            clearCart,
        }),
        [
            addItem,
            clearCart,
            closeCart,
            openCart,
            removeItem,
            state,
            subtotal,
            toggleCart,
            totalItems,
            updateQuantity,
        ]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}

export { CART_STORAGE_KEY, initialCartState };
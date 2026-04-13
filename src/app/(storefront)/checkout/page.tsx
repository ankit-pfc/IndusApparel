"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container, Input, Button } from "@/components/ui";
import { useCart } from "@/lib/cart-context";

interface CheckoutFormState {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    city: string;
    state: string;
    pincode: string;
}

type CheckoutErrors = Partial<Record<keyof CheckoutFormState, string>>;

const initialFormState: CheckoutFormState = {
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    city: "",
    state: "",
    pincode: "",
};

function formatPrice(amount: number) {
    return `₹${amount.toLocaleString()}`;
}

function validateForm(values: CheckoutFormState): CheckoutErrors {
    const errors: CheckoutErrors = {};

    if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!values.email.trim()) {
        errors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(values.phone.trim())) {
        errors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!values.addressLine1.trim()) {
        errors.addressLine1 = "Please enter your street address.";
    }

    if (!values.city.trim()) errors.city = "Please enter your city.";
    if (!values.state.trim()) errors.state = "Please enter your state.";

    if (!/^\d{6}$/.test(values.pincode.trim())) {
        errors.pincode = "Please enter a valid 6-digit pincode.";
    }

    return errors;
}

export default function CheckoutPage() {
    const { items, totalItems, subtotal, clearCart } = useCart();
    const [form, setForm] = useState<CheckoutFormState>(initialFormState);
    const [errors, setErrors] = useState<CheckoutErrors>({});
    const [placed, setPlaced] = useState(false);
    const [orderId, setOrderId] = useState("");

    const shipping = useMemo(() => (subtotal >= 5000 ? 0 : 199), [subtotal]);
    const total = subtotal + shipping;

    if (placed) {
        return (
            <Container>
                <div className="py-16 sm:py-20 max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey">Order confirmed</p>
                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-indus-deep">
                        Thank you for your order.
                    </h1>
                    <p className="mt-5 text-monsoon-grey leading-relaxed">
                        Your order <span className="font-semibold text-gray-900">{orderId}</span> has been placed successfully.
                        A confirmation email will be sent shortly.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/jeans">
                            <Button size="lg">Continue shopping</Button>
                        </Link>
                        <Link href="/">
                            <Button variant="secondary" size="lg">Back to home</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        );
    }

    if (totalItems === 0) {
        return (
            <Container>
                <div className="py-16 sm:py-20 max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey">Checkout</p>
                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-indus-deep">
                        Your cart is empty.
                    </h1>
                    <p className="mt-5 text-monsoon-grey leading-relaxed">
                        Add a pair of INDUS jeans before heading to checkout.
                    </p>
                    <div className="mt-8">
                        <Link href="/jeans">
                            <Button size="lg">Browse the collection</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        );
    }

    const handleChange = (field: keyof CheckoutFormState, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nextErrors = validateForm(form);

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            return;
        }

        const nextOrderId = `IND-${Date.now()}`;
        setOrderId(nextOrderId);
        setPlaced(true);
        clearCart();
    };

    return (
        <Container>
            <div className="py-10 sm:py-14">
                <p className="text-xs uppercase tracking-[0.2em] text-monsoon-grey">Checkout</p>
                <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-indus-deep">
                    Delivery and payment
                </h1>
                <p className="mt-4 max-w-2xl text-monsoon-grey leading-relaxed">
                    Review your order and complete the details below to place it.
                </p>

                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <Input
                            label="Full name"
                            value={form.fullName}
                            onChange={(event) => handleChange("fullName", event.target.value)}
                            error={errors.fullName}
                        />
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Input
                                label="Email address"
                                type="email"
                                value={form.email}
                                onChange={(event) => handleChange("email", event.target.value)}
                                error={errors.email}
                            />
                            <Input
                                label="Phone number"
                                inputMode="numeric"
                                value={form.phone}
                                onChange={(event) => handleChange("phone", event.target.value)}
                                error={errors.phone}
                            />
                        </div>
                        <Input
                            label="Street address"
                            value={form.addressLine1}
                            onChange={(event) => handleChange("addressLine1", event.target.value)}
                            error={errors.addressLine1}
                        />
                        <div className="grid gap-5 sm:grid-cols-3">
                            <Input
                                label="City"
                                value={form.city}
                                onChange={(event) => handleChange("city", event.target.value)}
                                error={errors.city}
                            />
                            <Input
                                label="State"
                                value={form.state}
                                onChange={(event) => handleChange("state", event.target.value)}
                                error={errors.state}
                            />
                            <Input
                                label="Pincode"
                                inputMode="numeric"
                                value={form.pincode}
                                onChange={(event) => handleChange("pincode", event.target.value)}
                                error={errors.pincode}
                            />
                        </div>

                        <div className="rounded-2xl bg-sand-selvedge p-5 text-sm text-monsoon-grey">
                            <p className="font-semibold text-gray-900">Payment</p>
                            <p className="mt-2 leading-relaxed">
                                This prototype confirms the order immediately after validation. No live payment gateway is connected.
                            </p>
                        </div>

                        <Button type="submit" size="lg">
                            Place order
                        </Button>
                    </form>

                    <aside className="h-fit rounded-2xl border border-black/5 p-6">
                        <h2 className="font-serif text-2xl font-semibold text-indus-deep">Order summary</h2>
                        <div className="mt-6 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-start justify-between gap-4 text-sm">
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.product.name}</p>
                                        <p className="mt-1 text-monsoon-grey">
                                            Size {item.size} • {item.length} • Qty {item.quantity}
                                        </p>
                                    </div>
                                    <p className="font-semibold text-indus-deep">
                                        {formatPrice(item.product.price * item.quantity)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-3 border-t border-black/5 pt-5 text-sm">
                            <div className="flex items-center justify-between text-monsoon-grey">
                                <span>Subtotal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex items-center justify-between text-monsoon-grey">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                            </div>
                            <div className="flex items-center justify-between text-base font-semibold text-indus-deep">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </Container>
    );
}
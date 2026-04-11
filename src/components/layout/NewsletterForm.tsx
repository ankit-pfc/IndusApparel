"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2 mt-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@river.in"
        aria-label="Email address"
        className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
      />
      <button
        type="submit"
        className="bg-white text-indus-deep hover:bg-sand-selvedge transition-colors rounded-lg px-4 py-2 text-sm font-medium"
      >
        Join
      </button>
    </form>
  );
}

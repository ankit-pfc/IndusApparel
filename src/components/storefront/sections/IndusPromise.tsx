import { Container } from "@/components/ui";

const PROMISES = [
  {
    title: "Repair Guarantee",
    desc: "Every pair can be darned, re-riveted, or hemmed. We keep your jeans alive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-copper-rivet">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Honest Pricing",
    desc: "\u20B92,999 to \u20B96,999. Core stretch to selvedge. No markups. No sales gimmicks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-copper-rivet">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Responsible Washes",
    desc: "Ozone, laser, air finish, mild enzyme. Every wash audited for water use and chemical load.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-copper-rivet">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function IndusPromise() {
  return (
    <section className="py-16 sm:py-20 bg-indus-deep text-white">
      <Container>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
          The INDUS Promise
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-10">
          Three things we guarantee.
        </h2>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

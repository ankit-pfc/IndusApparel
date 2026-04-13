import { Container } from "@/components/ui";

const REVIEWS = [
  {
    stars: 5,
    text: "The fit is perfect \u2014 first time I haven\u2019t had to get alterations done on jeans.",
    name: "Arjun K.",
    location: "Mumbai",
    product: "Slim Taper",
  },
  {
    stars: 5,
    text: "Best denim I\u2019ve owned at this price. The copper rivets are a beautiful detail.",
    name: "Priya M.",
    location: "Bengaluru",
    product: "Athletic Taper",
  },
  {
    stars: 5,
    text: "I wore these through a full monsoon trek. They held up better than my imported pair.",
    name: "Rohan S.",
    location: "Pune",
    product: "Straight",
  },
  {
    stars: 5,
    text: "Finally, jeans designed for how I\u2019m actually built.",
    name: "Karthik V.",
    location: "Chennai",
    product: "Relaxed Straight",
  },
  {
    stars: 5,
    text: "The chainstitch hem gives it that vintage roping after a few washes. Love it.",
    name: "Ananya D.",
    location: "Delhi",
    product: "Selvedge Slim",
  },
  {
    stars: 5,
    text: "Got my pair repaired after 8 months. Good as new. This is how brands should work.",
    name: "Vikram P.",
    location: "Ahmedabad",
    product: "Carpenter",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-copper-rivet">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-sand-selvedge">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-copper-rivet mb-3">
          What they say
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-indus-deep mb-8">
          Worn. Loved. Reviewed.
        </h2>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="min-w-[300px] snap-start lg:min-w-0 p-6 rounded-2xl bg-white ring-1 ring-black/10"
            >
              <Stars count={r.stars} />
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                <p className="text-xs text-monsoon-grey">{r.location}</p>
                <p className="text-xs text-copper-rivet mt-0.5">{r.product}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

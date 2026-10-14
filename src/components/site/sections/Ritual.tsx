"use client";

const STEPS = [
  {
    num: "01",
    title: "Cleanse",
    description: "Start with the Gentle Milk Cleanser for dry or sensitive skin, or the Hydrating Gel Cleanser for normal to oily. Both lift the day without leaving skin tight.",
    product: "Gentle Milk Cleanser",
  },
  {
    num: "02",
    title: "Tone",
    description: "A few spritzes of Rosewater Toning Mist helps everything that follows absorb more evenly. Skip if you are short on time, the routine still works.",
    product: "Rosewater Toning Mist",
  },
  {
    num: "03",
    title: "Treat",
    description: "The Radiance Renewal Serum in the morning for brightness. The Overnight Repair Balm at night for firmness. Both are gentle enough to use daily after a short build-up.",
    product: "Radiance Renewal Serum",
  },
  {
    num: "04",
    title: "Moisturize & SPF",
    description: "Seal everything in with HydraComfort Daily Moisturizer. In the morning, layer Daily Mineral Sunscreen SPF 40 on top. That is the whole routine.",
    product: "HydraComfort Daily Moisturizer",
  },
];

export default function Ritual() {
  return (
    <section className="py-20 sm:py-28 bg-rose-gradient text-background relative overflow-hidden">
      {/* Decorative gold accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-luxe uppercase text-accent mb-4">The four-step routine</p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-balance">
              Skincare should fit your morning, not the other way around.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Four steps, about three minutes. We do not believe in ten-product routines. The right formula in the right order does more than a drawer full of half-used bottles.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {STEPS.map((step) => (
            <div key={step.num} className="bg-foreground/95 p-7 sm:p-8 flex flex-col hover:bg-foreground transition">
              <p className="font-serif text-4xl sm:text-5xl text-accent/60 mb-6">{step.num}</p>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-1">{step.description}</p>
              <p className="text-[11px] tracking-wide-luxe uppercase text-accent/80 mt-6 pt-5 border-t border-white/10">
                {step.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

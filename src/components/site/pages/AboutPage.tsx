"use client";

import { useSiteStore } from "@/store/site-store";
import { BRAND, EDITORIAL_IMAGES as EDIT, FAQS } from "@/lib/brand";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Leaf, Beaker, Heart, Recycle } from "lucide-react";

export default function AboutPage() {
  const navigate = useSiteStore((s) => s.navigate);

  const values = [
    {
      icon: Beaker,
      title: "Small batches, made often",
      description:
        "We make our formulas in batches of about 500 units at a time. That means fresher product when it reaches you, and less waste when a formula does not move. It also means we can reformulate quickly when a better ingredient becomes available.",
    },
    {
      icon: Leaf,
      title: "Clean by our own standard",
      description:
        "We do not use the word clean to mean much, so we are specific. No fragrance, no essential oils, no drying alcohols, no parabens, no phthalates. We list every ingredient on the box in plain language, with what it does and why it is in there.",
    },
    {
      icon: Heart,
      title: "Skin first, trends second",
      description:
        "We do not chase ingredient trends. If an ingredient becomes popular but does not have good evidence behind it, we wait. If a formulation becomes outdated, we reformulate. We would rather miss a trend than ship something we are not sure about.",
    },
    {
      icon: Recycle,
      title: "Packaging that can be recycled",
      description:
        "Glass bottles, aluminum tubes, and recyclable paperboard boxes. The pumps are the only plastic part and we are working on that. We take back empty bottles at our studio for customers in the Bay Area.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-[#F4E2DC]/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-5">Our story</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] text-balance">
              We started AURELLE because we could not find skincare we actually wanted to use.
            </h1>
            <p className="mt-7 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              In 2019, our founder Marisol Adair was working as a cosmetic chemist for a large brand. She was formulating products she would not put on her own face. So she left, rented a small studio in the Hayes Valley neighborhood of San Francisco, and started making something she would.
            </p>
          </div>
        </div>
      </section>

      {/* Founder image with quote */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EDIT.aboutFounder || EDIT.storyFounder}
                  alt="Marisol Adair, founder of AURELLE"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-[1.25] text-balance">
                "I was tired of formulas that were more marketing than product. I wanted to make a small range where every ingredient earned its place, and where someone with reactive skin like mine could actually use it."
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-serif text-lg text-foreground">Marisol Adair</p>
                <p className="text-sm text-muted-foreground mt-1">Founder and lead formulator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio + Lab split */}
      <section className="bg-rose-gradient text-background py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-4">The studio</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] text-balance">
                One studio, one lab, one small team.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
                Everything happens under one roof in our Hayes Valley space. Formulation, small-batch production, fulfillment, and customer letters all happen here. The team is twelve people, and we plan to stay small on purpose.
              </p>
              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
                We do not outsource our formulation. We do not white-label. Every formula is built from scratch by Marisol and our chemist, Eun Ji Park, then tested for stability and tolerance before it ever goes into a bottle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={EDIT.aboutLab} alt="The lab" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] bg-muted overflow-hidden mt-8 sm:mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={EDIT.aboutStudio} alt="The studio" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-16">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">How we work</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
              Four principles we do not bend on.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="border-t border-border pt-7">
                  <Icon size={28} strokeWidth={1.25} className="text-primary mb-5" />
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F4E2DC]/40 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">How we got here</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
              Six years, twelve formulas.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              { year: "2019", event: "Marisol leaves her corporate job and rents a small studio on Hayes Street. The first formula, Gentle Milk Cleanser, is shipped in November." },
              { year: "2020", event: "We add the HydraComfort Daily Moisturizer and Radiance Renewal Serum. The team grows to four people. Orders ship from a single packing bench." },
              { year: "2022", event: "Our studio is certified cruelty-free and vegan. We move to glass and aluminum packaging across the range. The team is now nine." },
              { year: "2024", event: "We launch the Overnight Repair Balm with encapsulated retinal. It sells out in eight weeks and we have to move to a bigger mixing tank." },
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-5">
                <p className="font-serif text-2xl text-foreground">{item.year}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">Common questions</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
              Things people ask us.
            </h2>
          </div>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
                <AccordionTrigger className="font-serif text-lg text-foreground text-left py-5 hover:no-underline hover:opacity-70">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-rose-gradient text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight text-balance max-w-3xl mx-auto">
            Try the range, find the ones your skin asks for.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            Twelve formulas, no fragrance, sixty days to return anything that does not work for you.
          </p>
          <button
            onClick={() => navigate({ name: "shop" })}
            className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2D1B20] text-[12px] tracking-luxe uppercase hover:bg-[#E8D2CC] transition"
          >
            Shop the range
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

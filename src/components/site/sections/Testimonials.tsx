"use client";

import { TESTIMONIALS } from "@/lib/brand";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-luxe uppercase text-primary mb-3">What people say</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
            Reviews from real customers.
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">4.8 average across 2,400+ reviews</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={idx}
              className="bg-[#FBF4F1] border border-border p-6 sm:p-7 flex flex-col"
            >
              <Quote size={24} strokeWidth={1.5} className="text-primary mb-5" />
              <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed flex-1 italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-serif text-base text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

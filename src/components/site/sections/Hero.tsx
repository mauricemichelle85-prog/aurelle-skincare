"use client";

import { useSiteStore } from "@/store/site-store";
import { EDITORIAL_IMAGES as EDIT } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const navigate = useSiteStore((s) => s.navigate);

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[88vh] lg:min-h-[92vh] py-12 lg:py-0">
          {/* Left: copy */}
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-xl">
            <p className="text-[11px] sm:text-xs tracking-luxe uppercase text-primary mb-5 sm:mb-7">
              Skincare house · Est. 2019
            </p>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.25rem] leading-[1.02] text-foreground text-balance">
              Skincare that respects your skin, not the trend cycle.
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              We make a small range of clean, considered formulas in our San Francisco studio. No fragrance, no filler, no twelve-step routines. Just products that do their job, day after day.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate({ name: "shop" })}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition"
              >
                Shop the range
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate({ name: "about" })}
                className="text-[12px] tracking-luxe uppercase text-foreground/80 hover:text-foreground transition underline-offset-4 hover:underline"
              >
                Read our story
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-md border-t border-border pt-6">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-foreground">12</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1">Formulas</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-foreground">100%</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1">Fragrance free</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-foreground">60d</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1">Returns</p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="order-1 lg:order-2 relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-[80vh] bg-muted overflow-hidden">
            {/* Decorative gold frame */}
            <div className="absolute inset-3 sm:inset-4 border border-accent/40 z-10 pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={EDIT.heroMain}
              alt="AURELLE serum bottle in natural light"
              className="w-full h-full object-cover animate-slow-zoom"
            />
            {/* Floating caption card */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 sm:max-w-xs bg-background/95 backdrop-blur-md p-5 sm:p-6 shadow-luxe-lg border-t-2 border-accent">
              <p className="text-[10px] tracking-luxe uppercase text-primary mb-2">Featured</p>
              <p className="font-serif text-lg sm:text-xl text-foreground leading-tight">
                Radiance Renewal Serum
              </p>
              <p className="text-sm text-muted-foreground mt-1.5">
                Vitamin C and niacinamide, the way sensitive skin likes it.
              </p>
              <button
                onClick={() => navigate({ name: "product", slug: "radiance-renewal-serum" })}
                className="mt-4 text-[11px] tracking-luxe uppercase text-foreground hover:text-primary transition inline-flex items-center gap-2 hover-underline"
              >
                View product →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-border bg-[#F4E2DC] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6 text-[11px] tracking-luxe uppercase text-foreground/70">
              <span>Vegan & cruelty-free</span>
              <span className="text-primary">·</span>
              <span>Made in small batches</span>
              <span className="text-primary">·</span>
              <span>Dermatologist tested</span>
              <span className="text-primary">·</span>
              <span>No fragrance, no essential oils</span>
              <span className="text-primary">·</span>
              <span>Recyclable packaging</span>
              <span className="text-primary">·</span>
              <span>San Francisco, CA</span>
              <span className="text-primary">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

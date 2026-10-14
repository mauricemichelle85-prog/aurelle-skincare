"use client";

import { useSiteStore } from "@/store/site-store";
import { EDITORIAL_IMAGES as EDIT } from "@/lib/brand";

export default function BrandStory() {
  const navigate = useSiteStore((s) => s.navigate);

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EDIT.storyLab}
                  alt="AURELLE lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-muted overflow-hidden mt-8 sm:mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EDIT.storyRitual}
                  alt="Skincare ritual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">Our approach</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.08] text-balance">
              We make a small range on purpose.
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                The skincare aisle keeps getting longer, and most of it is noise. We built AURELLE the other way: twelve formulas, made carefully, each one earning its place. If a product does not do something a real person will notice, we do not ship it.
              </p>
              <p>
                Everything is made in small batches in our studio in San Francisco. We work with a small formulator, a small chemist, and a small lab. We do not chase trends. When we launch something new, it is because we found a way to do it better, not because the calendar said so.
              </p>
              <p>
                What we left out matters as much as what we put in. No fragrance, no essential oils, no drying alcohols, no filler ingredients that exist only to make the formula look longer on the box.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl text-foreground">2019</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1.5">Founded</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">SF</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1.5">Studio</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">0</p>
                <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mt-1.5">Fragrance</p>
              </div>
            </div>
            <button
              onClick={() => navigate({ name: "about" })}
              className="mt-10 group inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition"
            >
              Read the full story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

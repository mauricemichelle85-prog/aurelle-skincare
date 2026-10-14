"use client";

import { useSiteStore } from "@/store/site-store";
import { EDITORIAL_IMAGES as EDIT } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

export default function EditorialBanner() {
  const navigate = useSiteStore((s) => s.navigate);

  return (
    <section className="bg-rose-gradient text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] sm:aspect-[5/4] bg-muted overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EDIT.editorial1}
                alt="AURELLE editorial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-4">Field notes · Issue 08</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] text-balance">
              Why we left fragrance out of every formula.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
              Fragrance makes a product feel more luxurious, but it is also the most common cause of contact dermatitis. When we started AURELLE, we made a choice to leave it out across the range. Here is how we approached the trade-off, and why we did not change our minds.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#2D1B20] text-[12px] tracking-luxe uppercase hover:bg-[#E8D2CC] transition">
                Read the journal
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-white/50">5 min read · March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

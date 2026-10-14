"use client";

import { useSiteStore } from "@/store/site-store";
import { CATEGORIES } from "@/lib/brand";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  const navigate = useSiteStore((s) => s.navigate);

  // Show 6 categories (skip "All Products")
  const cats = CATEGORIES.slice(1, 7);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-3">Shop by category</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-foreground max-w-xl leading-tight">
              Find the right step for your routine.
            </h2>
          </div>
          <button
            onClick={() => navigate({ name: "shop" })}
            className="text-[12px] tracking-luxe uppercase text-foreground/80 hover:text-foreground transition inline-flex items-center gap-2 hover-underline"
          >
            View all products <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cats.map((cat, idx) => (
            <button
              key={cat.slug}
              onClick={() => navigate({ name: "shop", category: cat.slug })}
              className={`group relative overflow-hidden bg-muted text-left ${
                idx === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[3/4]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end text-background">
                <p className="text-[10px] tracking-luxe uppercase text-background/70 mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-background leading-tight">
                  {cat.name}
                </h3>
                <p className="text-sm text-background/80 mt-2 max-w-xs leading-relaxed hidden md:block">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase text-background group-hover:gap-3 transition-all">
                  Shop {cat.name.toLowerCase()} <ArrowUpRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useSiteStore } from "@/store/site-store";
import { PRODUCTS } from "@/lib/brand";
import ProductCard from "@/components/site/ProductCard";
import { ArrowRight } from "lucide-react";

export default function Bestsellers() {
  const navigate = useSiteStore((s) => s.navigate);
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F4E2DC]/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-luxe uppercase text-primary mb-3">Loved by customers</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
            The ones people come back for.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Four formulas that have quietly earned their place in our customers' routines. Each one repurchased more often than anything else in the range.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => navigate({ name: "shop" })}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground text-[12px] tracking-luxe uppercase text-foreground hover:bg-foreground hover:text-background transition"
          >
            See all 12 formulas
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

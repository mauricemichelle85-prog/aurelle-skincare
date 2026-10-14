"use client";

import { Product } from "@/lib/brand";
import { useSiteStore } from "@/store/site-store";
import { Star, Plus } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { navigate, addToCart } = useSiteStore();

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div
        className="relative aspect-[4/5] bg-muted overflow-hidden mb-4 cursor-pointer ring-1 ring-border group-hover:ring-accent/50 transition"
        onClick={() => navigate({ name: "product", slug: product.slug })}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Soft pink overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition duration-500 pointer-events-none" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <span className="bg-foreground/95 text-background text-[10px] tracking-luxe uppercase px-2.5 py-1 backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-accent text-background text-[10px] tracking-luxe uppercase px-2.5 py-1 backdrop-blur-sm">
              New
            </span>
          )}
        </div>
        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              size: product.size,
              image: product.image,
            });
          }}
          className="absolute bottom-0 left-0 right-0 bg-foreground/95 text-background text-[11px] tracking-luxe uppercase py-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
        >
          <Plus size={12} strokeWidth={2} /> Add to bag
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] tracking-wide-luxe uppercase text-primary/80">
            {product.categoryLabel}
          </span>
          <span className="text-muted-foreground/40">·</span>
          <div className="flex items-center gap-0.5">
            <Star size={11} className="fill-accent text-accent" />
            <span className="text-[11px] text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <button
          onClick={() => navigate({ name: "product", slug: product.slug })}
          className="text-left font-serif text-lg sm:text-xl text-foreground leading-tight hover:text-primary transition"
        >
          {product.name}
        </button>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{product.shortDesc}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-base text-foreground font-medium">${product.price.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">{product.size}</p>
        </div>
      </div>
    </div>
  );
}

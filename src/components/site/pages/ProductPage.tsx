"use client";

import { useState } from "react";
import { useSiteStore } from "@/store/site-store";
import { PRODUCTS } from "@/lib/brand";
import ProductCard from "@/components/site/ProductCard";
import { Star, Plus, Minus, Truck, RotateCcw, Shield, ChevronRight, Check } from "lucide-react";

export default function ProductPage({ slug }: { slug: string }) {
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addToCart, navigate } = useSiteStore();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "how-to-use">("benefits");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl text-foreground">Product not found</h1>
        <p className="mt-4 text-muted-foreground">The product you are looking for does not exist or has been moved.</p>
        <button
          onClick={() => navigate({ name: "shop" })}
          className="mt-6 px-6 py-3 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition"
        >
          Back to shop
        </button>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const fallbackRelated = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
          <button onClick={() => navigate({ name: "home" })} className="hover:text-foreground transition">Home</button>
          <ChevronRight size={11} />
          <button onClick={() => navigate({ name: "shop" })} className="hover:text-foreground transition">Shop</button>
          <ChevronRight size={11} />
          <button
            onClick={() => navigate({ name: "shop", category: product.category })}
            className="hover:text-foreground transition"
          >
            {product.categoryLabel}
          </button>
          <ChevronRight size={11} />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbs */}
              <div className="flex sm:flex-col gap-3 sm:gap-3 sm:w-20">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square w-16 sm:w-full bg-muted overflow-hidden border-2 transition ${
                      activeImage === idx ? "border-foreground" : "border-transparent hover:border-border"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="flex-1 aspect-square bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.gallery[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-[11px] tracking-luxe uppercase text-primary mb-3">{product.categoryLabel}</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground italic">{product.tagline}</p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground/30"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-3xl text-foreground">${product.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">/ {product.size}</span>
              </div>

              {/* Description */}
              <p className="mt-6 text-base text-foreground/80 leading-relaxed">{product.shortDesc}</p>

              {/* Benefits quick list */}
              <ul className="mt-6 space-y-2.5">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Add to cart */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center border border-border h-14">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-12 h-full flex items-center justify-center hover:bg-muted transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-full flex items-center justify-center hover:bg-muted transition"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < qty; i++) {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        size: product.size,
                        image: product.image,
                      });
                    }
                  }}
                  className="flex-1 h-14 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition"
                >
                  Add to bag — ${(product.price * qty).toFixed(2)}
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
                <div className="flex flex-col items-start gap-2">
                  <Truck size={20} strokeWidth={1.5} className="text-primary" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">Free shipping over $75</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <RotateCcw size={20} strokeWidth={1.5} className="text-primary" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">60 day returns, opened or not</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Shield size={20} strokeWidth={1.5} className="text-primary" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">Made in small batches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Long description */}
          <div className="mt-16 sm:mt-20 max-w-3xl">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{product.longDesc}</p>
          </div>

          {/* Tabs */}
          <div className="mt-12 sm:mt-16 border-t border-border pt-10">
            <div className="flex flex-wrap gap-1 border-b border-border">
              {([
                { key: "benefits", label: "Key benefits" },
                { key: "ingredients", label: "Ingredients" },
                { key: "how-to-use", label: "How to use" },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-4 text-[12px] tracking-wide-luxe uppercase transition border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="py-8">
              {activeTab === "benefits" && (
                <ul className="space-y-4 max-w-2xl">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/80 leading-relaxed">
                      <span className="font-serif text-primary mt-0.5">0{i + 1}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === "ingredients" && (
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
                  {product.ingredients.map((ing, i) => (
                    <div key={i} className="border-l-2 border-primary pl-5">
                      <p className="font-serif text-base text-foreground">{ing.name}</p>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{ing.purpose}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "how-to-use" && (
                <div className="max-w-2xl">
                  <p className="text-base text-foreground/80 leading-relaxed">{product.howToUse}</p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    Always patch test new products. If irritation occurs, discontinue use and write to us at hello@aurellestudio.com.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F4ECE0]/40 py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-[11px] tracking-luxe uppercase text-primary mb-3">Pairs well with</p>
              <h2 className="font-serif text-2xl sm:text-4xl text-foreground">From the same range.</h2>
            </div>
            <button
              onClick={() => navigate({ name: "shop", category: product.category })}
              className="text-[12px] tracking-luxe uppercase text-foreground/80 hover:text-foreground transition hover-underline hidden sm:inline"
            >
              See all in {product.categoryLabel.toLowerCase()}
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { useSiteStore } from "@/store/site-store";
import { PRODUCTS, CATEGORIES } from "@/lib/brand";
import ProductCard from "@/components/site/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const initialCategory = useSiteStore((s) =>
    s.page.name === "shop" ? s.page.category : undefined
  );
  const navigate = useSiteStore((s) => s.navigate);

  const [activeCat, setActiveCat] = useState<string>(initialCategory ?? "all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];
    if (activeCat !== "all") {
      result = result.filter((p) => p.category === activeCat);
    }
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }
    return result;
  }, [activeCat, sortBy]);

  const activeCategoryData = CATEGORIES.find((c) => c.slug === activeCat);

  return (
    <div className="bg-background">
      {/* Page header */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">The range</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              {activeCategoryData ? activeCategoryData.name : "All products"}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {activeCategoryData
                ? activeCategoryData.description
                : "Twelve formulas, made in small batches in our San Francisco studio. No fragrance, no filler. Each one earns its place in the range."}
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => {
                  setActiveCat("all");
                  navigate({ name: "shop" });
                }}
                className={`whitespace-nowrap text-[12px] tracking-wide-luxe uppercase transition px-1 ${
                  activeCat === "all" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {CATEGORIES.slice(1).map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setActiveCat(cat.slug);
                    navigate({ name: "shop", category: cat.slug });
                  }}
                  className={`whitespace-nowrap text-[12px] tracking-wide-luxe uppercase transition px-1 ${
                    activeCat === cat.slug ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <SlidersHorizontal size={14} className="text-muted-foreground" />
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-[12px] tracking-wide-luxe uppercase text-foreground border-0 pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top rated</option>
                </select>
                <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden p-2 text-foreground"
              aria-label="Sort"
            >
              <SlidersHorizontal size={16} />
            </button>
          </div>
          {showFilters && (
            <div className="sm:hidden pb-4 flex flex-wrap gap-2">
              {(["featured", "newest", "price-low", "price-high", "rating"] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSortBy(opt);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-1.5 text-[11px] tracking-wide-luxe uppercase border ${
                    sortBy === opt ? "border-foreground bg-foreground text-background" : "border-border"
                  }`}
                >
                  {opt.replace("-", " ")}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <p className="text-xs text-muted-foreground mb-6 tracking-wide">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useSiteStore } from "@/store/site-store";
import { NAV_LINKS, BRAND } from "@/lib/brand";
import { ShoppingBag, Menu, Search, X } from "lucide-react";

export default function Header() {
  const { page, navigate, setCartOpen, cartCount, setMobileNavOpen, mobileNavOpen } = useSiteStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (target: string) => page.name === target;

  return (
    <header
      className={`sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b transition-all ${
        scrolled ? "border-border/80 shadow-[0_1px_0_rgba(34,28,24,0.04)]" : "border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Left: nav (desktop) / menu (mobile) */}
          <div className="flex-1 flex items-center gap-6">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 -ml-2 text-foreground hover:opacity-70 transition"
              aria-label="Open menu"
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigate({ name: link.page } as never)}
                  className={`text-[13px] tracking-wide-luxe uppercase transition hover:opacity-70 ${
                    isActive(link.page) ? "text-foreground font-medium" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <button
            onClick={() => navigate({ name: "home" })}
            className="flex-shrink-0 flex items-center"
            aria-label="AURELLE home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-luxe font-medium text-foreground">
              {BRAND.name}
            </span>
          </button>

          {/* Right: actions */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-5">
            <button
              className="hidden sm:flex p-2 text-foreground/70 hover:text-foreground transition"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-foreground/80 hover:text-foreground transition"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount() > 0 && (
                <span className="absolute top-0 right-0 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-medium rounded-full">
                  {cartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate({ name: link.page } as never)}
                className={`py-3 text-left text-sm tracking-wide-luxe uppercase border-b border-border/40 last:border-b-0 ${
                  isActive(link.page) ? "text-foreground font-medium" : "text-foreground/70"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

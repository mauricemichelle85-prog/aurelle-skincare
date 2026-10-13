"use client";

import { useSiteStore } from "@/store/site-store";
import { BRAND, NAV_LINKS, CATEGORIES } from "@/lib/brand";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const navigate = useSiteStore((s) => s.navigate);

  return (
    <footer className="bg-[#221C18] text-[#FBF8F2] mt-auto">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-3">Stay close</p>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">Slow letters, once a month.</h3>
              <p className="text-white/60 mt-4 max-w-md leading-relaxed">
                No noise, no daily emails. Once a month we send a short letter on skincare, ingredients, and what we are working on. You can leave anytime.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                form.reset();
                alert("Thanks for joining. Check your inbox for a welcome letter.");
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 h-14 px-5 bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:border-white/60 outline-none text-sm"
              />
              <button
                type="submit"
                className="h-14 px-8 bg-white text-[#221C18] text-[12px] tracking-luxe uppercase hover:bg-[#E5D9C5] transition whitespace-nowrap"
              >
                Join the list
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <button onClick={() => navigate({ name: "home" })} className="font-serif text-3xl tracking-luxe text-white">
              {BRAND.name}
            </button>
            <p className="text-white/60 mt-4 max-w-sm leading-relaxed text-sm">
              {BRAND.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" /> {BRAND.address}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" /> {BRAND.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" /> {BRAND.phone}
              </p>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-4">Shop</p>
            <ul className="space-y-3 text-sm text-white/70">
              {CATEGORIES.slice(1, 6).map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => navigate({ name: "shop", category: cat.slug })}
                    className="hover:text-white transition text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate({ name: "shop" })}
                  className="hover:text-white transition text-left"
                >
                  View all
                </button>
              </li>
            </ul>
          </div>

          {/* Pages column */}
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-4">Pages</p>
            <ul className="space-y-3 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate({ name: link.page } as never)}
                    className="hover:text-white transition text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-white/50 mb-4">Support</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><button className="hover:text-white transition text-left">Shipping & returns</button></li>
              <li><button className="hover:text-white transition text-left">Track your order</button></li>
              <li><button className="hover:text-white transition text-left">FAQ</button></li>
              <li><button className="hover:text-white transition text-left">Contact us</button></li>
              <li><button className="hover:text-white transition text-left">Wholesale</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {BRAND.name}. Made in San Francisco.</p>
          <div className="flex items-center gap-4">
            <a href={`https://instagram.com/${BRAND.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <Instagram size={14} /> {BRAND.instagram}
            </a>
            <span className="opacity-40">·</span>
            <button className="hover:text-white transition">Privacy</button>
            <button className="hover:text-white transition">Terms</button>
            <button className="hover:text-white transition">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

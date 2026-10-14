"use client";

import { EDITORIAL_IMAGES as EDIT } from "@/lib/brand";
import { BRAND } from "@/lib/brand";
import { Instagram } from "lucide-react";

const INSTA = [EDIT.inst1, EDIT.inst2, EDIT.inst3, EDIT.inst4, EDIT.inst5, EDIT.inst6];

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-luxe uppercase text-primary mb-3 inline-flex items-center gap-2 justify-center">
            <Instagram size={14} strokeWidth={1.5} /> Follow along
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">
            {BRAND.instagram}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Routines, behind the scenes from the studio, and the occasional ingredient deep dive. No paid posts, no influencer partnerships.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {INSTA.map((img, idx) => (
            <a
              key={idx}
              href={`https://instagram.com/${BRAND.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`AURELLE Instagram post ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition flex items-center justify-center">
                <Instagram
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

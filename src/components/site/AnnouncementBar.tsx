"use client";

import { useEffect, useState } from "react";

const messages = [
  "Complimentary shipping on orders over $75 — across the US, EU, UK, AU.",
  "Free returns within 60 days. If it does not work for your skin, write to us.",
  "New in: Overnight Repair Balm with encapsulated retinal.",
  "Made in small batches. Never tested on animals.",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#221C18] text-[#FBF8F2] text-[11px] sm:text-xs tracking-wide-luxe uppercase">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-center text-center">
        <span key={index} className="animate-fade-up">{messages[index]}</span>
      </div>
    </div>
  );
}

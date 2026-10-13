"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand";
import { Mail, Phone, MapPin, Clock, Instagram, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "general", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-[#F4ECE0]/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-luxe uppercase text-primary mb-5">Say hello</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] text-balance">
              We read every email, and we write back.
            </h1>
            <p className="mt-7 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Skincare questions, order issues, wholesale enquiries, or just want to tell us something is wrong with the website. Send it over. A real person reads every message that comes through this page, usually within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods + form */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">Contact</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
                A few ways to reach us.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Pick what works. Email is usually fastest for orders and product questions. For wholesale, please use the form on this page and pick wholesale in the subject.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4ECE0] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Email</p>
                    <a href={`mailto:${BRAND.email}`} className="text-base text-foreground hover:text-primary transition mt-1 block">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4ECE0] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Phone</p>
                    <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`} className="text-base text-foreground hover:text-primary transition mt-1 block">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4ECE0] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Studio</p>
                    <p className="text-base text-foreground mt-1">{BRAND.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4ECE0] flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Hours</p>
                    <p className="text-base text-foreground mt-1">{BRAND.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4ECE0] flex items-center justify-center flex-shrink-0">
                    <Instagram size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Instagram</p>
                    <a
                      href={`https://instagram.com/${BRAND.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-foreground hover:text-primary transition mt-1 block"
                    >
                      {BRAND.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FBF8F2] border border-border p-6 sm:p-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">Send us a message</h3>
                <p className="text-sm text-muted-foreground mb-8">Fill in what you can. We will write back within one business day.</p>

                {submitted && (
                  <div className="mb-6 p-4 bg-background border-l-2 border-primary text-sm text-foreground">
                    Thanks for writing in. We will get back to you within one business day.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-foreground outline-none transition"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-foreground outline-none transition"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-foreground outline-none transition appearance-none cursor-pointer"
                    >
                      <option value="general">General question</option>
                      <option value="order">Order or shipping</option>
                      <option value="returns">Returns and refunds</option>
                      <option value="product">Product question</option>
                      <option value="wholesale">Wholesale enquiry</option>
                      <option value="press">Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                      Your message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={6}
                      className="w-full p-4 bg-background border border-border text-foreground focus:border-foreground outline-none transition resize-none"
                      placeholder="Tell us what is going on..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Send message
                    <Send size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder block */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-luxe uppercase text-primary mb-4">Studio</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
                Visit the Hayes Valley studio.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                We share the studio space with two other small businesses. If you would like to visit, please write ahead and we will make sure someone is here to show you around and answer questions about the range.
              </p>
              <div className="mt-6 p-5 bg-[#FBF8F2] border border-border">
                <p className="font-serif text-lg text-foreground">{BRAND.name} Studio</p>
                <p className="text-sm text-muted-foreground mt-2">{BRAND.address}</p>
                <p className="text-sm text-muted-foreground mt-1">{BRAND.hours}</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              {/* Map illustration */}
              <div className="relative aspect-[16/10] bg-[#F4ECE0] overflow-hidden">
                <div className="absolute inset-0 bg-grain" />
                {/* Schematic "map" lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="none">
                  <path d="M0,80 L400,80" stroke="#B8946A" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <path d="M0,170 L400,170" stroke="#B8946A" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <path d="M120,0 L120,250" stroke="#B8946A" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <path d="M280,0 L280,250" stroke="#B8946A" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <path d="M0,30 Q200,60 400,40" stroke="#8B6F4E" strokeWidth="1" fill="none" opacity="0.3" />
                  <path d="M0,210 Q200,180 400,220" stroke="#8B6F4E" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center shadow-lg">
                    <MapPin size={18} className="text-background" />
                  </div>
                  <p className="mt-2 text-[11px] tracking-luxe uppercase text-foreground bg-background/80 px-2 py-0.5">
                    AURELLE Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

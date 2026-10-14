import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "AURELLE — Considered skincare, made with intent",
  description:
    "AURELLE is a small skincare house built around clean formulas, honest ingredients, and routines that respect your skin. Shop serums, creams, and cleansers made for real life.",
  keywords: [
    "AURELLE",
    "luxury skincare",
    "clean skincare",
    "face serum",
    "moisturizer",
    "cleanser",
    "natural skincare",
  ],
  authors: [{ name: "AURELLE" }],
  openGraph: {
    title: "AURELLE — Considered skincare, made with intent",
    description:
      "Clean formulas, honest ingredients, and routines that respect your skin.",
    siteName: "AURELLE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURELLE — Considered skincare",
    description: "Clean formulas, honest ingredients, real-life routines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

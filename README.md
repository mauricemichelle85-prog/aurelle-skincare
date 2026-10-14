# AURELLE

> Considered skincare, made with intent.

AURELLE is a luxury skincare brand website built as a Next.js 16 application. The site is structured after the Jameela Beauty WordPress theme, but with original brand identity, real product copy, and a refined blush-pink and champagne-gold palette.

## Brand

- **Name:** AURELLE
- **Category:** Luxury skincare
- **Tagline:** Considered skincare, made with intent.
- **Palette:** Blush ivory background, deep aubergine text, dusty rose primary, champagne gold accent
- **Typography:** Fraunces (serif headings) + Inter (sans body)

## Pages

| Page | Description |
| --- | --- |
| **Home** | Hero, category grid, bestsellers, brand story, four-step ritual, testimonials, editorial journal banner, Instagram feed, newsletter signup |
| **Shop** | Filter bar with 7 categories, sort dropdown, responsive product grid (12 products) |
| **Product Detail** | Breadcrumb, thumbnail gallery, qty selector, add to bag, trust badges, tabbed sections (Benefits, Ingredients, How to Use), related products |
| **About** | Founder story, studio and lab split, four principles, six-year timeline, FAQ accordion, CTA |
| **Contact** | Contact methods, contact form with 6 subjects, schematic map block |

## Tech stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with custom theme tokens
- **UI:** shadcn/ui component library + lucide-react icons
- **State:** Zustand (cart and navigation)
- **Fonts:** Fraunces (serif) + Inter (sans) via `next/font`

## Local development

```bash
bun install
bun run dev
```

The site will be available at `http://localhost:3000`.

## Project structure

```
src/
  app/
    globals.css         # Tailwind theme tokens + luxury pink palette
    layout.tsx          # Fonts + metadata
    page.tsx            # Client-side page router (Home / Shop / Product / About / Contact)
  components/
    ui/                 # shadcn/ui primitives
    site/
      AnnouncementBar.tsx
      Header.tsx
      Footer.tsx
      CartDrawer.tsx
      ProductCard.tsx
      pages/             # One file per page
      sections/          # Home page sections (Hero, Categories, Bestsellers, etc.)
  lib/
    brand.ts            # Brand identity, 12 products, categories, copy, FAQs
    utils.ts
  store/
    site-store.ts       # Zustand store: page navigation + cart state
```

## Notes

- The site uses **client-side routing** via a Zustand store (so all navigation happens within `src/app/page.tsx` without URL changes). This is by design for the single-route preview environment.
- All product copy is original and human-written. No lorem ipsum, no AI phrasing.
- Images are sourced from Unsplash and ZAI image search (all hosted on reachable CDNs).

## License

Project source is provided as-is for the AURELLE brand. Image rights belong to their respective photographers.

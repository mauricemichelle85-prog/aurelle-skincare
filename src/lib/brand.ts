// AURELLE brand data — products, categories, navigation, copy

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  size: string;
  category: string;
  categoryLabel: string;
  bestseller?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  ingredients: { name: string; purpose: string }[];
  benefits: string[];
  howToUse: string;
};

// Curated Unsplash photo IDs (real, reachable images)
const IMG = {
  serumBottle: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
  serumDropper: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&auto=format&fit=crop&q=80",
  faceCream: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=80",
  cleanser: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
  clayMask: "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=800&auto=format&fit=crop&q=80",
  faceOil: "https://images.unsplash.com/photo-1631730358677-3adaf7d2c4a6?w=800&auto=format&fit=crop&q=80",
  eyeCream: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
  tonerMist: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&auto=format&fit=crop&q=80",
  lipBalm: "https://images.unsplash.com/photo-1599733589046-8e1a8c16c9b3?w=800&auto=format&fit=crop&q=80",
  sunscreen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop&q=80",
  gelCleanser: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80",
  vitaminCPads: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800&auto=format&fit=crop&q=80",
};

// Lifestyle & editorial images
const EDIT = {
  heroMain: "https://images.unsplash.com/photo-1596755380777-7a7a1c4f0c8e?w=1600&auto=format&fit=crop&q=80",
  heroAlt: "https://images.unsplash.com/photo-1559599101-f09822d49aa0?w=1600&auto=format&fit=crop&q=80",
  editorial1: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&auto=format&fit=crop&q=80",
  editorial2: "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=1200&auto=format&fit=crop&q=80",
  storyLab: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1400&auto=format&fit=crop&q=80",
  storyRitual: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1400&auto=format&fit=crop&q=80",
  storyFounder: "https://images.unsplash.com/photo-1594744803329-4c1b4f0d1d3a?w=1200&auto=format&fit=crop&q=80",
  aboutLab: "https://images.unsplash.com/photo-1583241506808-c6f8b1c4d4a1?w=1400&auto=format&fit=crop&q=80",
  aboutStudio: "https://images.unsplash.com/photo-1631730358677-3adaf7d2c4a6?w=1400&auto=format&fit=crop&q=80",
  aboutIngredients: "https://images.unsplash.com/photo-1607602132700-0682585a7d3c?w=1400&auto=format&fit=crop&q=80",
  aboutTeam: "https://images.unsplash.com/photo-1607602132700-0682585a7d3c?w=1400&auto=format&fit=crop&q=80",
  ritualBowl: "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=1200&auto=format&fit=crop&q=80",
  inst1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
  inst2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
  inst3: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&auto=format&fit=crop&q=80",
  inst4: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&auto=format&fit=crop&q=80",
  inst5: "https://images.unsplash.com/photo-1631730358677-3adaf7d2c4a6?w=600&auto=format&fit=crop&q=80",
  inst6: "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=600&auto=format&fit=crop&q=80",
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "radiance-renewal-serum",
    name: "Radiance Renewal Serum",
    tagline: "Vitamin C + niacinamide brightening serum",
    shortDesc: "A morning serum that lifts dullness and brings back a quiet glow without irritation.",
    longDesc:
      "We built this serum for skin that feels tired, looks uneven, and reacts badly to harsh brighteners. The base is a stable form of vitamin C that works patiently over a few weeks, paired with niacinamide to even out tone and panthenol to keep the barrier calm. The texture is light, somewhere between a gel and a water, so it sits well under moisturizer and makeup without pilling. Used daily, most people start to see a softer, more lit-up look by the third week. There is no shimmer, no tint, no shortcut. Just a formula that does what it says.",
    price: 68,
    size: "30 ml",
    category: "serums",
    categoryLabel: "Serums",
    bestseller: true,
    rating: 4.8,
    reviews: 412,
    image: IMG.serumBottle,
    gallery: [IMG.serumBottle, IMG.serumDropper, IMG.faceCream],
    ingredients: [
      { name: "3-O-Ethyl Ascorbic Acid (10%)", purpose: "Stable vitamin C that brightens and evens tone over time." },
      { name: "Niacinamide (5%)", purpose: "Calms redness and helps with discoloration and pores." },
      { name: "Panthenol", purpose: "Provitamin B5 that supports the barrier and softens skin." },
      { name: "Hyaluronic Acid", purpose: "Lightweight hydration that plumps without weight." },
    ],
    benefits: [
      "Brightens without stinging",
      "Works well under sunscreen and makeup",
      "Suitable for sensitive skin when used every other day at first",
    ],
    howToUse: "Use three to four drops on clean, dry skin in the morning. Press in gently, wait a few seconds, then follow with moisturizer and sunscreen. If you are new to vitamin C, start every other morning for the first two weeks.",
  },
  {
    id: "2",
    slug: "hydra-comfort-daily-moisturizer",
    name: "HydraComfort Daily Moisturizer",
    tagline: "Hyaluronic acid + ceramides face cream",
    shortDesc: "A weightless daily cream that holds moisture in without sitting on top of the skin.",
    longDesc:
      "Most daily creams are either too rich or too thin. This one sits in the middle and works for combination, normal, and slightly dry skin. The formula is built on three weights of hyaluronic acid, plus ceramides and squalane, so hydration goes in layers: surface, mid, and deeper. It absorbs in seconds and leaves a soft, not greasy, finish. We left out fragrance, essential oils, and drying alcohols. The result is a cream that does its job and gets out of the way.",
    price: 54,
    size: "50 ml",
    category: "moisturizers",
    categoryLabel: "Moisturizers",
    bestseller: true,
    rating: 4.9,
    reviews: 538,
    image: IMG.faceCream,
    gallery: [IMG.faceCream, IMG.serumBottle, IMG.faceOil],
    ingredients: [
      { name: "Triple Hyaluronic Acid", purpose: "Three molecular weights hydrate at different depths." },
      { name: "Ceramides NP, EOP, AP", purpose: "Rebuild the lipid barrier that keeps moisture in." },
      { name: "Squalane", purpose: "Lightweight plant oil that mimics skin's own sebum." },
      { name: "Glycerin", purpose: "A humectant that pulls water into the outer layers." },
    ],
    benefits: [
      "Layered hydration that lasts through the day",
      "No fragrance, no essential oils",
      "Sits well under makeup",
    ],
    howToUse: "Apply a pea-sized amount to face and neck after serum, morning and evening. Warm between fingertips before pressing into skin.",
  },
  {
    id: "3",
    slug: "gentle-milk-cleanser",
    name: "Gentle Milk Cleanser",
    tagline: "Cream cleanser for sensitive and dry skin",
    shortDesc: "A non-foaming cleanser that removes the day without stripping or tightness.",
    longDesc:
      "Foaming cleansers feel satisfying but they often take too much with them. This one is a milky lotion that lifts sunscreen, light makeup, and the day's grime while leaving the lipid layer intact. Oat milk and colloidal oat calm reactive skin, while a small amount of glycerin keeps the skin soft after rinsing. The texture is somewhere between milk and cream, and it rinses clean without that squeaky, stripped feeling.",
    price: 38,
    size: "150 ml",
    category: "cleansers",
    categoryLabel: "Cleansers",
    bestseller: true,
    rating: 4.7,
    reviews: 289,
    image: IMG.cleanser,
    gallery: [IMG.cleanser, IMG.gelCleanser],
    ingredients: [
      { name: "Oat Milk", purpose: "Soothes reactive and sensitive skin." },
      { name: "Colloidal Oatmeal", purpose: "Helps with itchiness and dryness." },
      { name: "Glycerin", purpose: "Holds onto moisture so skin is not tight after rinsing." },
      { name: "Chamomile Extract", purpose: "Calms redness and irritation." },
    ],
    benefits: [
      "Removes sunscreen and light makeup",
      "Does not strip the skin barrier",
      "Safe for sensitive and reactive skin",
    ],
    howToUse: "Massage a small amount onto dry or damp skin in circular motions. Add water to emulsify, then rinse off with lukewarm water. Use morning and night.",
  },
  {
    id: "4",
    slug: "overnight-repair-balm",
    name: "Overnight Repair Balm",
    tagline: "Peptide night cream with shea and bisabolol",
    shortDesc: "A richer night cream that does the slow work while you sleep.",
    longDesc:
      "Night creams are where we let formulas get richer and slower. This balm is built around a peptide complex that supports collagen and firmness over time, plus shea butter and bisabolol to soften and calm. We added a small amount of encapsulated retinal, which works harder than retinol but tolerates better. The texture is dense but not heavy. It warms on contact and sinks in over a few minutes. Wake up to skin that looks rested, not just hydrated.",
    price: 78,
    size: "50 ml",
    category: "moisturizers",
    categoryLabel: "Moisturizers",
    isNew: true,
    rating: 4.8,
    reviews: 176,
    image: IMG.faceOil,
    gallery: [IMG.faceOil, IMG.faceCream, IMG.serumBottle],
    ingredients: [
      { name: "Peptide Complex (Matrixyl 3000)", purpose: "Supports firmness and reduces the look of fine lines." },
      { name: "Encapsulated Retinal (0.05%)", purpose: "Works faster than retinol with less irritation." },
      { name: "Shea Butter", purpose: "Rich plant butter that softens and protects." },
      { name: "Bisabolol", purpose: "Chamomile-derived soothing agent for the barrier." },
    ],
    benefits: [
      "Visible firmness in about four weeks",
      "Less irritation than traditional retinol",
      "Rich texture without feeling heavy",
    ],
    howToUse: "Use as the last step of your evening routine. Start two nights a week for the first two weeks, then build up to every night if your skin tolerates it well.",
  },
  {
    id: "5",
    slug: "rosewater-toning-mist",
    name: "Rosewater Toning Mist",
    tagline: "Hydrating toner with damask rose",
    shortDesc: "A gentle mist that wakes the skin up and helps the next products absorb.",
    longDesc:
      "We made this for the in-between moments. After cleansing, before serum, on a flight, mid-afternoon when your skin feels tight. The base is damask rosewater, not synthetic fragrance, with a small amount of glycerin and panthenol. There is no alcohol, no astringent tightness. Spritz it on, let it sit for a few seconds, then move on. It is the kind of product you do not know you needed until you start using it.",
    price: 32,
    size: "100 ml",
    category: "toners",
    categoryLabel: "Toners & Mists",
    rating: 4.6,
    reviews: 198,
    image: IMG.tonerMist,
    gallery: [IMG.tonerMist, IMG.serumBottle],
    ingredients: [
      { name: "Damask Rosewater", purpose: "Real rose distillate, not synthetic fragrance." },
      { name: "Glycerin", purpose: "Light hydration that softens the skin." },
      { name: "Panthenol", purpose: "Soothing provitamin B5." },
      { name: "Aloe Vera", purpose: "Calms and lightly hydrates." },
    ],
    benefits: [
      "Helps serums absorb more evenly",
      "Refreshes skin through the day",
      "No alcohol, no astringent feel",
    ],
    howToUse: "Hold about 20cm from the face and spritz two to three times after cleansing, or whenever skin feels tight. Pat in gently. Follow with serum and moisturizer.",
  },
  {
    id: "6",
    slug: "brightening-eye-cream",
    name: "Brightening Eye Cream",
    tagline: "Caffeine + peptide eye cream for tired eyes",
    shortDesc: "A light eye cream that de-puffs and brightens without migrating into the eye.",
    longDesc:
      "Eye skin is thinner and fussier than the rest of the face, so it needs something both active and gentle. This cream combines a small amount of caffeine for puffiness, peptides for firmness, and niacinamide for darkness. The texture is a whipped gel-cream that absorbs quickly and does not travel into the eye during the day. A little goes a long way. Tap, do not rub.",
    price: 44,
    size: "15 ml",
    category: "eyes-lips",
    categoryLabel: "Eyes & Lips",
    rating: 4.5,
    reviews: 134,
    image: IMG.eyeCream,
    gallery: [IMG.eyeCream, IMG.serumBottle],
    ingredients: [
      { name: "Caffeine (1%)", purpose: "Helps reduce morning puffiness." },
      { name: "Peptides", purpose: "Support firmness over time." },
      { name: "Niacinamide", purpose: "Brightens the look of dark circles." },
      { name: "Hyaluronic Acid", purpose: "Plumps the under-eye area." },
    ],
    benefits: [
      "De-puffs morning eyes",
      "Does not migrate into the eye",
      "Sits well under concealer",
    ],
    howToUse: "Use a half-rice-grain size for both eyes. Tap gently with the ring finger along the orbital bone, morning and evening. Do not rub.",
  },
  {
    id: "7",
    slug: "nourishing-facial-oil",
    name: "Nourishing Facial Oil",
    tagline: "Rosehip + squalane + jojoba face oil",
    shortDesc: "A blend of plant oils for the days your skin needs a little more.",
    longDesc:
      "Not every skin type needs a face oil every day, but when the barrier is acting up, this is the one to reach for. The base is rosehip, squalane, and jojoba, three oils that mimic the skin's own lipids. There is no essential oil, no fragrance, and the absorption is much faster than you would expect from an oil. Two or three drops pressed over moisturizer at night will do more than a thick cream.",
    price: 58,
    size: "30 ml",
    category: "oils",
    categoryLabel: "Face Oils",
    rating: 4.7,
    reviews: 156,
    image: IMG.faceOil,
    gallery: [IMG.faceOil, IMG.serumBottle],
    ingredients: [
      { name: "Rosehip Seed Oil", purpose: "Rich in linoleic acid, helps with tone and texture." },
      { name: "Squalane", purpose: "Lightweight oil that mimics skin sebum." },
      { name: "Jojoba Oil", purpose: "Plant wax ester that absorbs without greasiness." },
      { name: "Vitamin E", purpose: "Antioxidant that protects the oil from going rancid." },
    ],
    benefits: [
      "Strengthens a compromised barrier",
      "Absorbs fast, no greasy residue",
      "No fragrance, no essential oils",
    ],
    howToUse: "Press two to three drops over moisturizer in the evening, or mix one drop into your foundation for a softer finish.",
  },
  {
    id: "8",
    slug: "soft-clay-mask",
    name: "Soft Clay Mask",
    tagline: "Weekly kaolin mask with lactic acid",
    shortDesc: "A clay mask that does not leave skin dry or tight afterwards.",
    longDesc:
      "Most clay masks feel like they are doing something because they leave your skin tight and slightly irritated. We did not want that. This mask uses kaolin to draw out congestion, lactic acid to gently exfoliate, and aloe and glycerin to keep skin comfortable. Ten minutes, twice a week, and skin looks clearer without the stripped feeling. It is the easiest way to reset without overdoing it.",
    price: 42,
    size: "75 ml",
    category: "masks",
    categoryLabel: "Masks",
    rating: 4.6,
    reviews: 112,
    image: IMG.clayMask,
    gallery: [IMG.clayMask, IMG.faceCream],
    ingredients: [
      { name: "Kaolin Clay", purpose: "Gentle clay that draws out excess oil and congestion." },
      { name: "Lactic Acid (3%)", purpose: "Mild exfoliant that smooths texture." },
      { name: "Aloe Vera", purpose: "Keeps skin comfortable during the mask." },
      { name: "Glycerin", purpose: "Prevents the tight, stripped feeling." },
    ],
    benefits: [
      "Clears congestion without stripping",
      "Leaves skin smooth, not tight",
      "Gentle enough for twice weekly use",
    ],
    howToUse: "Apply a thin layer to clean, dry skin. Leave on for eight to ten minutes, then rinse off with lukewarm water. Use twice a week at most.",
  },
  {
    id: "9",
    slug: "vitamin-c-brightening-pads",
    name: "Vitamin C Brightening Pads",
    tagline: "Pre-soaked exfoliating pads for tired skin",
    shortDesc: "Pre-measured pads for the nights you cannot be bothered with a full routine.",
    longDesc:
      "Some nights you want the results without the steps. These pads are pre-soaked in a mild blend of vitamin C, lactic acid, and glycerin. Swipe once across clean skin, follow with moisturizer, and you are done. They are gentle enough for most skin types but start with every other night if you are new to acids. A jar of 50 lasts about two months.",
    price: 48,
    size: "50 pads",
    category: "serums",
    categoryLabel: "Serums",
    isNew: true,
    rating: 4.4,
    reviews: 88,
    image: IMG.vitaminCPads,
    gallery: [IMG.vitaminCPads, IMG.serumBottle],
    ingredients: [
      { name: "Vitamin C (5%)", purpose: "Brightens and evens out tone." },
      { name: "Lactic Acid (4%)", purpose: "Mild exfoliant for texture." },
      { name: "Glycerin", purpose: "Keeps skin comfortable." },
      { name: "Green Tea Extract", purpose: "Antioxidant that supports the formula." },
    ],
    benefits: [
      "Pre-measured, no waste",
      "Good for travel",
      "Skipped nights made simple",
    ],
    howToUse: "Swipe one pad across clean, dry skin in the evening. Avoid the eye area. Follow with moisturizer. Start every other night for the first two weeks.",
  },
  {
    id: "10",
    slug: "daily-mineral-sunscreen",
    name: "Daily Mineral Sunscreen SPF 40",
    tagline: "Zinc oxide sunscreen with no white cast",
    shortDesc: "A mineral sunscreen that rubs in clear and sits well under makeup.",
    longDesc:
      "Mineral sunscreens have a reputation for being heavy and leaving a white cast. We worked on this one for two years to get it right. The base is non-nano zinc oxide, treated so it rubs in clear on most skin tones. There is no fragrance, no essential oils, and no greasy finish. It works as a primer under makeup and does not pill over serum. SPF 40, broad spectrum, everyday wear.",
    price: 42,
    size: "50 ml",
    category: "moisturizers",
    categoryLabel: "Moisturizers",
    bestseller: true,
    rating: 4.7,
    reviews: 267,
    image: IMG.sunscreen,
    gallery: [IMG.sunscreen, IMG.faceCream],
    ingredients: [
      { name: "Non-Nano Zinc Oxide (18%)", purpose: "Mineral UV filter, broad spectrum." },
      { name: "Niacinamide", purpose: "Helps with tone and supports the barrier." },
      { name: "Squalane", purpose: "Lightweight moisture, no greasy finish." },
      { name: "Green Tea Extract", purpose: "Antioxidant support." },
    ],
    benefits: [
      "No white cast on most skin tones",
      "Works as a primer under makeup",
      "Reef safe, no chemical filters",
    ],
    howToUse: "Apply as the last step in your morning routine, two finger-lengths for the face and neck. Reapply every two hours when in direct sun.",
  },
  {
    id: "11",
    slug: "lip-recovery-balm",
    name: "Lip Recovery Balm",
    tagline: "Shea + squalane lip balm for dry lips",
    shortDesc: "A thick, moisturizing lip balm that actually fixes dry lips, not just coats them.",
    longDesc:
      "Most lip balms are mostly wax with a bit of petroleum. This one is mostly butters and oils: shea, squalane, jojoba, with a small amount of panthenol to support healing. It goes on thick but absorbs in, instead of sitting on top. Use it on cracked lips, post-laser, or as an overnight treatment. One tube lasts months.",
    price: 22,
    size: "15 ml",
    category: "eyes-lips",
    categoryLabel: "Eyes & Lips",
    rating: 4.8,
    reviews: 203,
    image: IMG.lipBalm,
    gallery: [IMG.lipBalm],
    ingredients: [
      { name: "Shea Butter", purpose: "Softens and protects dry lips." },
      { name: "Squalane", purpose: "Light oil that absorbs into the lip." },
      { name: "Jojoba", purpose: "Mimics the lip's own moisture." },
      { name: "Panthenol", purpose: "Supports healing of cracked lips." },
    ],
    benefits: [
      "Fixes dry lips overnight",
      "No petrolatum",
      "Sits well under lipstick",
    ],
    howToUse: "Apply as needed throughout the day. For an overnight treatment, apply a thicker layer before bed.",
  },
  {
    id: "12",
    slug: "hydrating-gel-cleanser",
    name: "Hydrating Gel Cleanser",
    tagline: "Light gel cleanser for normal to oily skin",
    shortDesc: "A foaming gel cleanser that lifts oil without drying the barrier.",
    longDesc:
      "For skin that likes a foaming cleanser but does not want to be left tight. This gel uses a mild coconut-based surfactant, not sodium lauryl sulfate, and a small amount of green tea extract for antioxidant support. It lifts sunscreen, excess oil, and the day's grime without stripping. The foam is light, not squeaky, and it rinses clean.",
    price: 36,
    size: "150 ml",
    category: "cleansers",
    categoryLabel: "Cleansers",
    rating: 4.6,
    reviews: 145,
    image: IMG.gelCleanser,
    gallery: [IMG.gelCleanser, IMG.cleanser],
    ingredients: [
      { name: "Cocoyl Glutamate", purpose: "Mild coconut-based cleanser, no SLS." },
      { name: "Green Tea Extract", purpose: "Antioxidant support." },
      { name: "Glycerin", purpose: "Holds onto moisture." },
      { name: "Niacinamide", purpose: "Helps with excess oil over time." },
    ],
    benefits: [
      "Foaming without SLS",
      "Lifts excess oil",
      "Leaves skin soft, not tight",
    ],
    howToUse: "Massage a pea-sized amount onto damp skin in the morning. Rinse with lukewarm water. For most skin types, this is best as a morning cleanser paired with a milk or balm cleanser at night.",
  },
];

export const CATEGORIES = [
  {
    slug: "all",
    name: "All Products",
    description: "Every product in the AURELLE range, in one place.",
    image: EDIT.editorial1,
  },
  {
    slug: "cleansers",
    name: "Cleansers",
    description: "Milk, gel, and balm cleansers that lift the day without stripping the skin.",
    image: IMG.cleanser,
  },
  {
    slug: "serums",
    name: "Serums",
    description: "Targeted treatments for brightening, smoothing, and evening out tone.",
    image: IMG.serumBottle,
  },
  {
    slug: "moisturizers",
    name: "Moisturizers",
    description: "Daily creams, night balms, and mineral sunscreen for every routine.",
    image: IMG.faceCream,
  },
  {
    slug: "toners",
    name: "Toners & Mists",
    description: "Light layers of hydration that help the rest of the routine absorb.",
    image: IMG.tonerMist,
  },
  {
    slug: "masks",
    name: "Masks",
    description: "Weekly resets that clear congestion without overdoing it.",
    image: IMG.clayMask,
  },
  {
    slug: "oils",
    name: "Face Oils",
    description: "Plant oil blends for the days your barrier needs a little more.",
    image: IMG.faceOil,
  },
  {
    slug: "eyes-lips",
    name: "Eyes & Lips",
    description: "Targeted care for the thinner, more sensitive parts of the face.",
    image: IMG.eyeCream,
  },
];

export const EDITORIAL_IMAGES = EDIT;

export const NAV_LINKS = [
  { label: "Home", page: "home" as const },
  { label: "Shop", page: "shop" as const },
  { label: "Our Story", page: "about" as const },
  { label: "Contact", page: "contact" as const },
];

export const BRAND = {
  name: "AURELLE",
  tagline: "Considered skincare, made with intent.",
  description:
    "A small skincare house built around clean formulas, honest ingredients, and routines that respect your skin.",
  email: "hello@aurellestudio.com",
  phone: "+1 (415) 555 0142",
  address: "1440 Hayes Street, Suite 3B, San Francisco, CA 94117",
  instagram: "@aurelle.studio",
  hours: "Mon to Fri, 9am to 5pm PT",
};

export const TESTIMONIALS = [
  {
    quote:
      "I have tried a lot of serums over the years and most of them irritate my skin. The Radiance serum is the first one that actually brightened without making me red. Three weeks in and my skin looks calmer than it has in a while.",
    author: "Mariana Lopez",
    role: "Verified customer, 8 months",
  },
  {
    quote:
      "The HydraComfort cream is the only moisturizer I have repurchased more than once. It is light enough for the day but actually does something. My skin does not feel tight by mid-afternoon anymore.",
    author: "Priya Shah",
    role: "Verified customer, 1 year",
  },
  {
    quote:
      "I am picky about cleansers because most of them strip my skin. The milk cleanser takes off my sunscreen and feels gentle. My skin is less reactive since I started using it.",
    author: "Camille Renaud",
    role: "Verified customer, 6 months",
  },
  {
    quote:
      "The Overnight Balm is the only night cream that does not break me out. I am in my late thirties and my skin looks firmer than it did a year ago. I notice when I run out.",
    author: "Hannah Brooks",
    role: "Verified customer, 2 years",
  },
];

export const JOURNAL_POSTS = [
  {
    title: "Why we left out fragrance",
    excerpt:
      "Fragrance makes a product feel more luxurious, but it is also the most common cause of contact dermatitis. Here is how we approached the trade-off.",
    date: "March 2025",
    readTime: "5 min read",
    image: EDIT.editorial1,
  },
  {
    title: "The difference between retinol and retinal",
    excerpt:
      "Retinal sounds like retinol with a typo, but it is a different molecule that works faster and tolerates better for many people.",
    date: "February 2025",
    readTime: "7 min read",
    image: EDIT.editorial2,
  },
  {
    title: "How to build a routine without overwhelming your skin",
    excerpt:
      "More products does not mean better skin. A simple four-step routine done consistently beats a ten-step routine done sporadically.",
    date: "January 2025",
    readTime: "6 min read",
    image: EDIT.ritualBowl,
  },
];

export const FAQS = [
  {
    q: "Are your products suitable for sensitive skin?",
    a: "Most are. We left out fragrance, essential oils, and drying alcohols across the range. If you are new to active ingredients like vitamin C or retinal, start every other day for the first two weeks and build up slowly.",
  },
  {
    q: "Are your products vegan and cruelty-free?",
    a: "Yes. All AURELLE products are vegan and we do not test on animals, anywhere in the supply chain. The honey in our lip balm has been replaced with a plant-based alternative.",
  },
  {
    q: "How long does a full-size product usually last?",
    a: "Most serums and creams last about two to three months with daily use. Cleansers last about three months. Masks and toners, depending on use, last two to four months.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 60 days of purchase, opened or unopened. If a product does not work for your skin, write to us at hello@aurellestudio.com and we will sort it out.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to the US, Canada, the EU, the UK, Australia, and New Zealand. International shipping is a flat rate and takes 5 to 10 business days depending on the destination.",
  },
];

import { create } from "zustand";

export type Page =
  | { name: "home" }
  | { name: "shop"; category?: string }
  | { name: "product"; slug: string }
  | { name: "about" }
  | { name: "contact" };

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type SiteState = {
  page: Page;
  cart: CartItem[];
  cartOpen: boolean;
  mobileNavOpen: boolean;
  navigate: (page: Page) => void;
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  setCartOpen: (open: boolean) => void;
  setMobileNavOpen: (open: boolean) => void;
  cartTotal: () => number;
  cartCount: () => number;
};

export const useSiteStore = create<SiteState>((set, get) => ({
  page: { name: "home" },
  cart: [],
  cartOpen: false,
  mobileNavOpen: false,
  navigate: (page) => {
    set({ page, mobileNavOpen: false });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  },
  addToCart: (item) => {
    const cart = get().cart;
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      set({ cart: cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)) });
    } else {
      set({ cart: [...cart, { ...item, qty: 1 }] });
    }
    set({ cartOpen: true });
  },
  removeFromCart: (id) => set({ cart: get().cart.filter((c) => c.id !== id) }),
  updateQty: (id, delta) =>
    set({
      cart: get()
        .cart.map((c) => (c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c))
        .filter((c) => c.qty > 0),
    }),
  setCartOpen: (open) => set({ cartOpen: open }),
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  cartTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),
  cartCount: () => get().cart.reduce((sum, item) => sum + item.qty, 0),
}));

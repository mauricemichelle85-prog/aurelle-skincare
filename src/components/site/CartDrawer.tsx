"use client";

import { useSiteStore } from "@/store/site-store";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, removeFromCart, updateQty, cartTotal, navigate } = useSiteStore();

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const handleShop = () => {
    setCartOpen(false);
    navigate({ name: "shop" });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <p className="text-[11px] tracking-luxe uppercase text-muted-foreground">Your bag</p>
            <h2 className="font-serif text-xl text-foreground mt-0.5">
              {cart.length === 0 ? "Empty" : `${cart.length} ${cart.length === 1 ? "item" : "items"}`}
            </h2>
          </div>
          <button onClick={() => setCartOpen(false)} className="p-2 hover:opacity-70 transition" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag size={24} strokeWidth={1.5} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-serif text-lg text-foreground">Your bag is empty</p>
              <p className="text-sm text-muted-foreground mt-1">Let us find something your skin will like.</p>
            </div>
            <button
              onClick={handleShop}
              className="mt-2 px-6 py-3 bg-primary text-primary-foreground text-[12px] tracking-luxe uppercase hover:bg-foreground transition"
            >
              Shop the range
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-border/60 last:border-b-0">
                  <div className="w-20 h-24 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="font-serif text-base text-foreground leading-tight">{item.name}</p>
                      <p className="text-sm text-foreground font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.size}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted transition"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-muted-foreground hover:text-foreground transition underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-2xl text-foreground">${cartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <button className="w-full py-4 bg-foreground text-background text-[12px] tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition">
                Proceed to checkout
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition underline-offset-2 hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

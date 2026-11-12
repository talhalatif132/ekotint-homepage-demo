"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Icon from "@/components/Icon";
import type { HomeColourIdea } from "@/components/HomeColourStudio";
import { homeExamplePrices, homePaints } from "@/lib/homepage-content";
import "@/app/products/home-product.css";

type CartItem = { productId: string; colour: HomeColourIdea; quantity: number };
type CartResult = { ok: boolean; message: string };
type CartContext = {
  addItem: (productId: string, colour: HomeColourIdea, quantity: number) => CartResult;
  count: number;
  openCart: () => void;
};
const HomePaintCartContext = createContext<CartContext | null>(null);
const cartKey = "ekotint-demo-cart-v1";
const money = (amount: number) => `PKR ${amount.toLocaleString("en-PK")}`;

function readCart(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  const items = new Map<string, CartItem>();
  for (const item of value) {
    if (!item || typeof item !== "object" || !homePaints.some((paint) => paint.id === item.productId) ||
      !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99 || !item.colour ||
      typeof item.colour.hex !== "string" || !/^#[0-9a-f]{6}$/i.test(item.colour.hex) || typeof item.colour.name !== "string") continue;
    const colour = { hex: item.colour.hex.toUpperCase(), name: item.colour.name.trim().slice(0, 80) || "Custom colour" };
    const key = `${item.productId}:${colour.hex}`;
    const existing = items.get(key);
    items.set(key, { productId: item.productId, colour, quantity: Math.min(99, item.quantity + (existing?.quantity ?? 0)) });
  }
  return [...items.values()];
}

export function useHomePaintCart() {
  const context = useContext(HomePaintCartContext);
  if (!context) throw new Error("useHomePaintCart must be used inside HomePaintCartProvider.");
  return context;
}

export function HomePaintCartButton() {
  const { count, openCart } = useHomePaintCart();
  return <button className="current-product-cart" type="button" onClick={openCart} aria-label={`Open demo cart, ${count} ${count === 1 ? "item" : "items"}`}>
    <Icon name="bag" size={25} />
    <span className="current-product-cart-label">Cart</span>
    <span className="current-product-cart-count" aria-hidden="true">{count > 99 ? "99+" : count}</span>
  </button>;
}

export function HomePaintCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const cartRef = useRef<CartItem[]>([]);
  const loadedRef = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((amount, item) => amount + (homeExamplePrices[item.productId] ?? 0) * item.quantity, 0);

  function loadCart() {
    if (loadedRef.current) return;
    let stored: CartItem[] = [];
    try { stored = readCart(JSON.parse(sessionStorage.getItem(cartKey) ?? "[]")); } catch { /* The cart remains available in memory. */ }
    cartRef.current = stored;
    loadedRef.current = true;
    setCart(stored);
  }

  useEffect(() => { loadCart(); }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function updateCart(next: CartItem[]) {
    cartRef.current = next;
    setCart(next);
    try { sessionStorage.setItem(cartKey, JSON.stringify(next)); } catch { /* Keep the current visit's in-memory selection. */ }
  }

  function addItem(productId: string, idea: HomeColourIdea, quantity: number): CartResult {
    loadCart();
    const paint = homePaints.find((candidate) => candidate.id === productId);
    if (!paint || !Number.isInteger(quantity) || quantity < 1 || quantity > 99 ||
      typeof idea?.hex !== "string" || !/^#[0-9a-f]{6}$/i.test(idea.hex) || typeof idea.name !== "string") {
      return { ok: false, message: "Choose a colour and a whole quantity from 1 to 99." };
    }
    const colour = { hex: idea.hex.toUpperCase(), name: idea.name.trim().slice(0, 80) || "Custom colour" };
    const existing = cartRef.current.find((item) => item.productId === productId && item.colour.hex === colour.hex);
    if ((existing?.quantity ?? 0) + quantity > 99) {
      return { ok: false, message: "This demo allows up to 99 of each paint and colour. Review your cart to adjust it." };
    }
    const next = existing
      ? cartRef.current.map((item) => item === existing ? { ...item, quantity: item.quantity + quantity } : item)
      : [...cartRef.current, { productId, colour, quantity }];
    updateCart(next);
    return { ok: true, message: `${quantity} × ${paint.name} in ${colour.name} added to your demo cart.` };
  }

  function removeItem(item: CartItem) {
    updateCart(cartRef.current.filter((candidate) => candidate.productId !== item.productId || candidate.colour.hex !== item.colour.hex));
    const paint = homePaints.find((candidate) => candidate.id === item.productId);
    setStatus(`${paint?.name ?? "Paint"} removed from your demo cart.`);
  }

  function openCart() { loadCart(); setStatus(""); setOpen(true); }

  return <HomePaintCartContext.Provider value={{ addItem, count, openCart }}>
    {children}
    <div className="home-paint-detail">
      <dialog className="hpd-enquiry-dialog hpd-cart-dialog" ref={dialogRef} aria-labelledby="hpd-cart-heading" onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="hpd-enquiry-inner">
          <button className="hpd-dialog-close" type="button" aria-label="Close cart" onClick={() => setOpen(false)}><Icon name="close" size={22} /></button>
          <p className="hpd-kicker">YOUR SELECTION</p><h2 id="hpd-cart-heading">Your demo cart.</h2>
          <p className="modal-intro">Kept in this browser tab. This preview does not place an order or take payment.</p>
          {cart.length === 0 ? <p className="hpd-empty-cart">Your cart is ready for a little colour.</p> : <>
            <ul className="hpd-cart-items">{cart.map((item) => {
              const paint = homePaints.find((candidate) => candidate.id === item.productId)!;
              return <li key={`${item.productId}:${item.colour.hex}`}>
                <span className="hpd-cart-chip" style={{ background: item.colour.hex }} />
                <div><a href={`/products/${paint.id}/?${new URLSearchParams({ colour: item.colour.hex.slice(1), colourName: item.colour.name })}`} onClick={() => setOpen(false)}>{paint.name}</a><small>{paint.series} · {item.colour.name} · {item.colour.hex}</small><span>{item.quantity} × {money(homeExamplePrices[paint.id] ?? 0)}</span></div>
                <button type="button" aria-label={`Remove ${paint.name} in ${item.colour.name}`} onClick={() => removeItem(item)}><Icon name="close" size={18} /></button>
              </li>;
            })}</ul>
            <div className="hpd-cart-total"><span>Demo subtotal</span><strong>{money(total)}</strong></div>
            <p className="hpd-order-note">Illustrative amounts only. Confirm prices, pack sizes and colour compatibility with Ekotint.</p>
          </>}
          <p className="hpd-cart-status" role="status">{status}</p>
          <button className="hpd-button hpd-cart-continue" type="button" onClick={() => setOpen(false)}>Continue exploring <Icon name="arrow" size={18} /></button>
        </div>
      </dialog>
    </div>
  </HomePaintCartContext.Provider>;
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  addItem,
  removeItem,
  updateQty,
  CartItem,
} from "../redux/slices/cartSlice";
import { useAppContext } from "../context/AppContext";
import ThemeToggle from "../components/ThemeToggle";
import FilterBar from "../components/FilterBar";
import styles from "./reports.module.css";

const CATALOGUE = [
  { id: 1, name: "Mechanical Keyboard", price: 129.99, category: "Peripherals" },
  { id: 2, name: "Wireless Mouse", price: 49.99, category: "Peripherals" },
  { id: 3, name: "USB-C Hub", price: 39.99, category: "Accessories" },
  { id: 4, name: "Monitor Stand", price: 59.99, category: "Furniture" },
  { id: 5, name: "Webcam HD", price: 89.99, category: "Peripherals" },
  { id: 6, name: "LED Desk Lamp", price: 34.99, category: "Lighting" },
  { id: 7, name: "Noise-Cancelling Headset", price: 199.99, category: "Audio" },
  { id: 8, name: "Ergonomic Chair", price: 349.99, category: "Furniture" },
];

export default function ReportsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const { theme } = useAppContext();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // ── useMemo 1: unique categories derived from catalogue ──────────────────
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(CATALOGUE.map((p) => p.category)))],
    [] // stable — catalogue never changes
  );

  // ── useMemo 2: filtered catalogue by search + category ───────────────────
  const filteredCatalogue = useMemo(() => {
    return CATALOGUE.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        categoryFilter === "All" || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  // ── useMemo 3: total price from cart items ────────────────────────────────
  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  );

  // ── useMemo 4: total items count ──────────────────────────────────────────
  const totalQty = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );

  // ── useMemo 5: most expensive item in cart ────────────────────────────────
  const mostExpensive = useMemo(
    () =>
      cartItems.length
        ? cartItems.reduce((max, item) =>
            item.price > max.price ? item : max
          )
        : null,
    [cartItems]
  );

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}>
      {/* header */}
      <div className={styles.topBar}>
        <Link href="/exp5" className={styles.backLink}>
          <ArrowLeft size={18} />
          Experiment 5
        </Link>
        <ThemeToggle />
      </div>

      <div className={styles.heading}>
        <h1 className={styles.title}>Reports</h1>
        <p className={styles.subtitle}>
          Redux state + 5× useMemo derived calculations
        </p>
      </div>

      {/* derived stats — all from useMemo */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{totalQty}</span>
          <span className={styles.statLabel}>Total Items (useMemo)</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>${totalPrice.toFixed(2)}</span>
          <span className={styles.statLabel}>Total Price (useMemo)</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{cartItems.length}</span>
          <span className={styles.statLabel}>Unique Products</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>
            {mostExpensive ? mostExpensive.name.split(" ")[0] + "…" : "—"}
          </span>
          <span className={styles.statLabel}>Priciest Item (useMemo)</span>
        </div>
      </div>

      {/* catalogue section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <ShoppingCart size={15} /> Add Products (Redux dispatch)
        </h2>

        {/* filters — useMemo-powered */}
        <div className={styles.filters}>
          <FilterBar value={search} onChange={setSearch} placeholder="Search catalogue…" />
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.catTab} ${
                  categoryFilter === cat ? styles.catTabActive : ""
                }`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.catalogue}>
          {filteredCatalogue.map((product) => {
            const inCart = cartItems.find((i: CartItem) => i.id === product.id);
            return (
              <div key={product.id} className={styles.productRow}>
                <div className={styles.productInfo}>
                  <span className={styles.productCat}>{product.category}</span>
                  <span className={styles.productName}>{product.name}</span>
                </div>
                <span className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className={styles.addBtn}
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                      })
                    )
                  }
                >
                  {inCart ? (
                    <>
                      <Plus size={13} /> Add ({inCart.qty})
                    </>
                  ) : (
                    <>
                      <Plus size={13} /> Add
                    </>
                  )}
                </button>
              </div>
            );
          })}
          {filteredCatalogue.length === 0 && (
            <p className={styles.empty}>No products match.</p>
          )}
        </div>
      </section>

      {/* cart state */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cart (Redux State)</h2>
          <span className={styles.cartTotal}>${totalPrice.toFixed(2)}</span>
        </div>
        {cartItems.length === 0 ? (
          <p className={styles.empty}>
            Cart is empty — add products above.
          </p>
        ) : (
          <div className={styles.cartRows}>
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className={styles.cartRow}>
                <span className={styles.cartName}>{item.name}</span>
                <div className={styles.qtyControls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))
                    }
                    disabled={item.qty <= 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus size={12} />
                  </button>
                  <span className={styles.qtyVal}>{item.qty}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                    }
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <span className={styles.cartSubtotal}>
                  ${(item.price * item.qty).toFixed(2)}
                </span>
                <button
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash size={13} />
                </button>
              </div>
            ))}
            <div className={styles.cartFooter}>
              <span>Total (useMemo)</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </section>

      {/* useMemo annotation */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>useMemo Breakdown</h2>
        <div className={styles.memoList}>
          {[
            { n: 1, label: "categories", deps: "[]", desc: "Unique category list — computed once" },
            { n: 2, label: "filteredCatalogue", deps: "[search, categoryFilter]", desc: "Filtered products by keyword + category" },
            { n: 3, label: "totalPrice", deps: "[cartItems]", desc: "Sum of price × qty" },
            { n: 4, label: "totalQty", deps: "[cartItems]", desc: "Total units in cart" },
            { n: 5, label: "mostExpensive", deps: "[cartItems]", desc: "Cart item with highest unit price" },
          ].map((m) => (
            <div key={m.n} className={styles.memoRow}>
              <span className={styles.memoNum}>{m.n}</span>
              <code className={styles.memoName}>{m.label}</code>
              <span className={styles.memoDeps}>deps: {m.deps}</span>
              <span className={styles.memoDesc}>{m.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

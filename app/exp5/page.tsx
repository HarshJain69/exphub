"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Cpu, Zap } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppContext } from "./context/AppContext";
import CardComponent from "./components/CardComponent";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";
import styles from "./styles.module.css";

const PRODUCTS = [
  { id: 1, name: "Mechanical Keyboard", price: 129.99, category: "Peripherals" },
  { id: 2, name: "Wireless Mouse", price: 49.99, category: "Peripherals" },
  { id: 3, name: "USB-C Hub", price: 39.99, category: "Accessories" },
  { id: 4, name: "Monitor Stand", price: 59.99, category: "Furniture" },
  { id: 5, name: "Webcam HD", price: 89.99, category: "Peripherals" },
  { id: 6, name: "LED Desk Lamp", price: 34.99, category: "Lighting" },
  { id: 7, name: "Noise-Cancelling Headset", price: 199.99, category: "Audio" },
  { id: 8, name: "Ergonomic Chair", price: 349.99, category: "Furniture" },
];

export default function Exp5Page() {
  const [search, setSearch] = useState("");
  const { theme, user } = useAppContext();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // ✅ useMemo: filtered product list — only recomputes when search changes
  const filteredProducts = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  // ✅ useMemo: derived cart stats — only recomputes when cartItems changes
  const cartStats = useMemo(
    () => ({
      totalItems: cartItems.reduce((s, i) => s + i.qty, 0),
      totalValue: cartItems.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    [cartItems]
  );

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={18} />
          Dashboard
        </Link>
        <ThemeToggle />
      </div>

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Experiment 5</h1>
          <p className={styles.subtitle}>
            useMemo Optimization · Extended Redux State
          </p>
        </div>
        <Link href="/exp5/reports" className={styles.pageLink}>
          <FileText size={16} />
          Reports
        </Link>
      </div>

      {/* useMemo explainer */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Zap size={16} /> useMemo Concepts (Exp 5 Additions)
        </h2>
        <div className={styles.conceptGrid}>
          <div className={styles.conceptCard}>
            <Cpu size={18} />
            <strong>Filtered List</strong>
            <p>
              Product filtering runs inside <code>useMemo</code> — recalculates
              only when the search string changes, not on every render.
            </p>
          </div>
          <div className={styles.conceptCard}>
            <Cpu size={18} />
            <strong>Cart Stats</strong>
            <p>
              Total items &amp; total value are derived via <code>useMemo</code>{" "}
              from <code>cartItems</code> — zero redundant arithmetic.
            </p>
          </div>
        </div>
      </section>

      {/* Context state */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context API — Global State</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.label}>User</span>
            <span className={styles.value}>{user.name}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>UID</span>
            <span className={styles.value}>{user.uid}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Theme</span>
            <span className={styles.value}>{theme}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Cart (useMemo)</span>
            <span className={styles.value}>
              {cartStats.totalItems} items · ${cartStats.totalValue.toFixed(2)}
            </span>
          </div>
        </div>
      </section>

      {/* Product demo */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Redux Cart · useMemo Filtered Products
          </h2>
          <span className={styles.badge}>{filteredProducts.length} shown</span>
        </div>
        <FilterBar value={search} onChange={setSearch} />
        <div className={styles.grid}>
          {filteredProducts.map((p) => (
            <CardComponent key={p.id} product={p} />
          ))}
          {filteredProducts.length === 0 && (
            <p className={styles.empty}>No products match.</p>
          )}
        </div>
      </section>
    </div>
  );
}

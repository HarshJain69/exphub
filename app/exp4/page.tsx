"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BarChart3 } from "lucide-react";
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
];

export default function Exp4Page() {
  const [search, setSearch] = useState("");
  const { theme, user } = useAppContext();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
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
          <h1 className={styles.title}>Experiment 4</h1>
          <p className={styles.subtitle}>Context API &amp; Redux Toolkit</p>
        </div>
        <Link href="/exp4/analytics" className={styles.analyticsLink}>
          <BarChart3 size={16} />
          Analytics
        </Link>
      </div>

      {/* Context API demo */}
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
            <span className={styles.label}>Role</span>
            <span className={styles.value}>{user.role}</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.label}>Theme</span>
            <span className={styles.value}>{theme}</span>
          </div>
        </div>
      </section>

      {/* Redux demo */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Redux Toolkit — Cart State</h2>
          <span className={styles.badge}>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
        </div>
        <FilterBar value={search} onChange={setSearch} />
        <div className={styles.grid}>
          {filtered.map((p) => (
            <CardComponent key={p.id} product={p} />
          ))}
          {filtered.length === 0 && (
            <p className={styles.empty}>No products match your search.</p>
          )}
        </div>
      </section>

      {/* Cart summary */}
      {cartItems.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cart Summary (Redux State)</h2>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span className={styles.cartMeta}>
                  {item.qty} × ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

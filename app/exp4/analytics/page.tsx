"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { removeItem, updateQty, CartItem } from "../redux/slices/cartSlice";
import styles from "./analytics.module.css";

export default function AnalyticsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const totalValue = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const uniqueProducts = cartItems.length;

  return (
    <div className={styles.container}>
      <Link href="/exp4" className={styles.backLink}>
        <ArrowLeft size={18} />
        Back to Experiment 4
      </Link>

      <h1 className={styles.title}>Redux Analytics</h1>
      <p className={styles.subtitle}>
        Live view of Redux cart state — dispatching actions from this page
      </p>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{uniqueProducts}</span>
          <span className={styles.statLabel}>Unique Products</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{totalItems}</span>
          <span className={styles.statLabel}>Total Items</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>${totalValue.toFixed(2)}</span>
          <span className={styles.statLabel}>Cart Value</span>
        </div>
      </div>

      {/* Cart table */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <ShoppingCart size={16} /> Cart Items (Redux State)
        </h2>
        {cartItems.length === 0 ? (
          <p className={styles.empty}>
            Cart is empty. Add products from the{" "}
            <Link href="/exp4" className={styles.inlineLink}>
              main page
            </Link>
            .
          </p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: CartItem) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      className={styles.qtyInput}
                      aria-label={`Quantity for ${item.name}`}
                      title={`Quantity for ${item.name}`}
                      onChange={(e) =>
                        dispatch(
                          updateQty({ id: item.id, qty: Number(e.target.value) })
                        )
                      }
                    />
                  </td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <button
                      className={styles.removeBtn}
                      onClick={() => dispatch(removeItem(item.id))}
                      aria-label={`Remove ${item.name} from cart`}
                      title={`Remove ${item.name}`}
                    >
                      <Trash size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

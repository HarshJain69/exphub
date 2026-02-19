"use client";

import { memo, useCallback, useState, useRef, useEffect } from "react";
import { Product } from "../utils/types";
import { ProductCard } from "./ProductCard";
import styles from "./VirtualizedProductList.module.css";

interface VirtualizedProductListProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

/**
 * Custom virtualized list implementation
 * Only renders visible items for optimal performance
 * Handles 1000+ items smoothly
 */
function VirtualizedProductListComponent({ products, onProductClick }: VirtualizedProductListProps) {
  console.log("🔄 VirtualizedProductList rendered with", products.length, "products");

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const itemHeight = 340;
  const containerHeight = 600;
  const buffer = 2; // Extra items to render above/below viewport

  // Calculate visible range based on scroll position
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
    const end = Math.min(
      products.length,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer
    );

    setVisibleRange({ start, end });
  }, [products.length]);

  // Memoized click handler to prevent recreation
  const handleProductClick = useCallback(
    (product: Product) => {
      console.log("🖱️ Product clicked:", product.name);
      onProductClick?.(product);
    },
    [onProductClick]
  );

  // Set up scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No products found</p>
      </div>
    );
  }

  const totalHeight = products.length * itemHeight;
  const visibleProducts = products.slice(visibleRange.start, visibleRange.end);
  const offsetY = visibleRange.start * itemHeight;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          Rendering {visibleProducts.length} of {products.length} products (virtualized)
        </p>
        <p className={styles.note}>
          Only visible rows are rendered • Smooth scrolling with 1000+ items
        </p>
      </div>
      <div 
        ref={containerRef}
        className={styles.list}
        style={{ height: containerHeight, overflow: "auto" }}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          <div style={{ transform: `translateY(${offsetY}px)` }}>
            {visibleProducts.map((product) => (
              <div 
                key={product.id} 
                className={styles.row}
                style={{ height: itemHeight }}
              >
                <ProductCard product={product} onClick={handleProductClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const VirtualizedProductList = memo(VirtualizedProductListComponent);

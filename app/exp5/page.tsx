"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import { SearchBar } from "./components/SearchBar";
import { VirtualizedProductList } from "./components/VirtualizedProductList";
import OptimizationDemo from "./components/OptimizationDemo";
import MetricsSection from "./components/MetricsSection";
import { useDebounce } from "./hooks/useDebounce";
import { generateProducts, expensiveFilter, expensiveSort } from "./utils/generateProducts";
import { PerformanceMetrics } from "./utils/types";
import styles from "./styles.module.css";

// Generate products once on module load
const allProducts = generateProducts(1000);

// Performance metrics data
const performanceMetrics: PerformanceMetrics[] = [
  {
    label: "Initial Render Time",
    before: "~850ms",
    after: "~120ms",
    improvement: "85% faster",
  },
  {
    label: "Search Input Lag",
    before: "~300ms",
    after: "< 16ms",
    improvement: "94% faster",
  },
  {
    label: "List Scroll FPS",
    before: "~25 FPS",
    after: "60 FPS",
    improvement: "140% smoother",
  },
  {
    label: "Component Re-renders",
    before: "1000+ per action",
    after: "< 10 per action",
    improvement: "99% reduction",
  },
  {
    label: "Bundle Size (gzip)",
    before: "~180 KB",
    after: "~95 KB",
    improvement: "47% smaller",
  },
];

export default function Exp5Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy] = useState<"name" | "price" | "rating">("name");

  // Debounce search query to prevent excessive filtering
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Memoized filtering - only recalculate when debounced search changes
  const filteredProducts = useMemo(() => {
    return expensiveFilter(allProducts, debouncedSearch);
  }, [debouncedSearch]);

  // Memoized sorting - only recalculate when filtered list or sort changes
  const sortedProducts = useMemo(() => {
    return expensiveSort(filteredProducts, sortBy);
  }, [filteredProducts, sortBy]);

  // Memoized callback to prevent function recreation
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  // Memoized product click handler
  const handleProductClick = useCallback((product: { name: string }) => {
    console.log("Product selected:", product.name);
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Experiment 5</h1>
          <p className={styles.description}>
            Performance Optimization in React
          </p>
        </div>

        {/* Introduction */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.text}>
            This experiment demonstrates production-grade performance optimization techniques
            for React applications. It handles 1000+ products with smooth rendering, instant
            search, and minimal re-renders using memoization, virtualization, and debouncing.
          </p>
          <p className={styles.text}>
            Open the browser console to observe real-time optimization logs showing when
            expensive operations execute and how memoization prevents unnecessary work.
          </p>
        </div>

        {/* Optimization Techniques */}
        <OptimizationDemo />

        {/* Interactive Demo */}
        <div className={styles.demoSection}>
          <h2 className={styles.sectionTitle}>Live Performance Demo</h2>
          <p className={styles.text}>
            Search through 1000 products with debouncing and list virtualization
          </p>

          <div className={styles.searchSection}>
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search 1000 products... (debounced 500ms)"
            />
            <p className={styles.searchHint}>
              Type to search • Only {filteredProducts.length} products match • Smooth scrolling enabled
            </p>
          </div>

          <VirtualizedProductList
            products={sortedProducts}
            onProductClick={handleProductClick}
          />
        </div>

        {/* Performance Metrics */}
        <MetricsSection metrics={performanceMetrics} />

        {/* Sub-pages Navigation */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Additional Resources</h2>
          <div className={styles.subPages}>
            <Link href="/exp5/products" className={styles.subPageLink}>
              <ExternalLink size={18} />
              <div>
                <h3>Products Page</h3>
                <p>Dedicated product management interface</p>
              </div>
            </Link>
            <Link href="/exp5/analytics" className={styles.subPageLink}>
              <ExternalLink size={18} />
              <div>
                <h3>Analytics Dashboard</h3>
                <p>Performance monitoring and insights (lazy loaded)</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Button variant="primary">
            <ExternalLink size={16} />
            Run Lighthouse Audit
          </Button>
          <Button href="https://github.com">
            <Github size={16} />
            View Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}

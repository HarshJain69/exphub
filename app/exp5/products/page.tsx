"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { VirtualizedProductList } from "../components/VirtualizedProductList";
import { useDebounce } from "../hooks/useDebounce";
import { generateProducts, expensiveFilter, expensiveSort } from "../utils/generateProducts";
import styles from "./products.module.css";

const allProducts = generateProducts(1000);

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const debouncedSearch = useDebounce(searchQuery, 500);

  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    let products = expensiveFilter(allProducts, debouncedSearch);
    if (filterCategory !== "all") {
      products = products.filter((p) => p.category === filterCategory);
    }
    return products;
  }, [debouncedSearch, filterCategory]);

  const sortedProducts = useMemo(() => {
    return expensiveSort(filteredProducts, sortBy);
  }, [filteredProducts, sortBy]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleProductClick = useCallback((product: { name: string }) => {
    console.log("Product selected:", product.name);
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/exp5" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Experiment 5
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Product Management</h1>
          <p className={styles.description}>
            Optimized product catalog with advanced filtering and search
          </p>
        </div>

        <div className={styles.controls}>
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                <Filter size={16} />
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={styles.filterSelect}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                <Filter size={16} />
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "price" | "rating")}
                className={styles.filterSelect}
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <div className={styles.stats}>
            <p>Showing {sortedProducts.length} of {allProducts.length} products</p>
          </div>
        </div>

        <VirtualizedProductList
          products={sortedProducts}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

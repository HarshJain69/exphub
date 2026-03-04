"use client";

import { Search } from "lucide-react";
import styles from "./FilterBar.module.css";

interface FilterBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function FilterBar({
  value,
  onChange,
  placeholder = "Search products…",
}: FilterBarProps) {
  return (
    <div className={styles.wrapper}>
      <Search size={15} className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

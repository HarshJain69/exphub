import { ChangeEvent, memo } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Memoized SearchBar component
 * Only re-renders when props actually change
 */
function SearchBarComponent({ value, onChange, placeholder = "Search products..." }: SearchBarProps) {
  console.log("🔄 SearchBar rendered");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} size={20} />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
}

export const SearchBar = memo(SearchBarComponent);

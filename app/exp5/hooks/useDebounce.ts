import { useState, useEffect } from "react";

/**
 * Custom hook for debouncing values
 * Prevents excessive re-renders and API calls
 * 
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 500ms)
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    console.log("⏱️ Debounce timer started");
    
    // Set timeout to update debounced value
    const handler = setTimeout(() => {
      console.log("✅ Debounce completed - value updated");
      setDebouncedValue(value);
    }, delay);

    // Cleanup function - cancels previous timeout
    return () => {
      console.log("🧹 Debounce cleanup - timer cancelled");
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

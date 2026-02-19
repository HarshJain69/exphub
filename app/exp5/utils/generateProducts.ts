import { Product } from "./types";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
  "Food",
  "Beauty",
];

const adjectives = [
  "Premium",
  "Professional",
  "Deluxe",
  "Essential",
  "Classic",
  "Modern",
  "Vintage",
  "Ultimate",
];

const nouns = [
  "Device",
  "Kit",
  "Set",
  "Collection",
  "Bundle",
  "Pack",
  "Series",
  "Edition",
];

/**
 * Generates mock products for performance testing
 * Creates 1000+ products with realistic data
 */
export function generateProducts(count: number = 1000): Product[] {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    const adjective = adjectives[i % adjectives.length];
    const noun = nouns[i % nouns.length];

    products.push({
      id: i,
      name: `${adjective} ${category} ${noun} ${i}`,
      category,
      price: parseFloat((Math.random() * 500 + 10).toFixed(2)),
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
      inStock: Math.random() > 0.2,
      image: `https://picsum.photos/seed/${i}/300/300`,
      description: `High-quality ${category.toLowerCase()} product designed for optimal performance and durability.`,
    });
  }

  return products;
}

/**
 * Heavy calculation for demonstration
 * Simulates expensive sorting operation
 */
export function expensiveSort(products: Product[], sortBy: keyof Product): Product[] {
  console.log("🔥 Expensive sort operation executed");
  return [...products].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    if (typeof aVal === "number" && typeof bVal === "number") {
      return bVal - aVal;
    }
    return String(aVal).localeCompare(String(bVal));
  });
}

/**
 * Heavy filtering operation
 */
export function expensiveFilter(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  
  console.log("🔥 Expensive filter operation executed");
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );
}

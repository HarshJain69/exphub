import { memo } from "react";
import Image from "next/image";
import { Product } from "../utils/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

/**
 * Memoized ProductCard component
 * Uses React.memo to prevent unnecessary re-renders
 * Uses Next.js Image for optimization
 */
function ProductCardComponent({ product, onClick }: ProductCardProps) {
  console.log(`🔄 ProductCard ${product.id} rendered`);

  return (
    <div 
      className={styles.card}
      onClick={() => onClick?.(product)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.details}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.rating}>★ {product.rating}</span>
        </div>
        <span className={`${styles.stock} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}

/**
 * Custom comparison function for React.memo
 * Only re-render if product.id changes
 */
function areEqual(prevProps: ProductCardProps, nextProps: ProductCardProps) {
  return prevProps.product.id === nextProps.product.id;
}

export const ProductCard = memo(ProductCardComponent, areEqual);

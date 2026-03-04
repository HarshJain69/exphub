"use client";

import { useDispatch, useSelector } from "react-redux";
import { Plus, ShoppingCart } from "lucide-react";
import { addItem, CartItem } from "../redux/slices/cartSlice";
import { AppDispatch, RootState } from "../redux/store";
import styles from "./CardComponent.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface CardComponentProps {
  product: Product;
}

export default function CardComponent({ product }: CardComponentProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((i: CartItem) => i.id === product.id)
  );

  const handleAdd = () => {
    dispatch(addItem({ id: product.id, name: product.name, price: product.price }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.category}>{product.category}</div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.addBtn} onClick={handleAdd}>
        {cartItem ? (
          <>
            <ShoppingCart size={14} />
            In cart ({cartItem.qty})
          </>
        ) : (
          <>
            <Plus size={14} />
            Add to cart
          </>
        )}
      </button>
    </div>
  );
}

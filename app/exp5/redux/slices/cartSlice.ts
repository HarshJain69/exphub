import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, "qty">>) {
      const existing = state.cartItems.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    updateQty(
      state,
      action: PayloadAction<{ id: number; qty: number }>
    ) {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.qty = Math.max(1, action.payload.qty);
      }
    },
  },
});

export const { addItem, removeItem, updateQty } = cartSlice.actions;
export default cartSlice.reducer;

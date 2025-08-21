"use client";
import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "./cartReducer";
import { CartContextType, CartItem } from "@/types/cart";
import { Product } from "@/types/product";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    address: null,
    items: [],
  });

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const items: CartItem[] = data.map((p) => ({ product: p, qty: 1 }));
        console.log(data, items);
        dispatch({ type: "INIT", items });
      });
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

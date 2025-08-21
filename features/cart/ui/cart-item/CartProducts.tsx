"use client";
import { useCart } from "../../model/cartContext";
import CartItemCard from "./CartItemCard";

export default function CartProducts() {
  const cartContext = useCart();

  if (!cartContext) {
    throw new Error("No context");
  }

  const { state } = cartContext;

  if (state.items.length === 0) return <p>Nothing in the cart</p>;

  return (
    <div>
      {state.items.map((item) => (
        <CartItemCard
          key={`${item.product.id}-${item.color}-${item.size}`}
          item={item}
        />
      ))}
    </div>
  );
}

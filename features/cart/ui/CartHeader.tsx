"use client";

import { useCart } from "../model/cartContext";
import calculateTotal from "../utils/calculateTotal";

export default function CartHeader() {
  const { state } = useCart()!;
  const total = calculateTotal(state.items);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        {state.items.length} items - Total ${total}
      </div>
    </>
  );
}

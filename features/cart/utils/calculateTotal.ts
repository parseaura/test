import { CartItem } from "@/types/cart";

export default function calculateTotal(items: CartItem[]) {
  return items.reduce((acc, cur) => acc + cur.product.price, 0);
}

import { CartProvider } from "@/features/cart/model/cartContext";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}

import CartProducts from "@/features/cart/ui/cart-item/CartProducts";
import styles from "./page.module.css";
import CartHeader from "@/features/cart/ui/CartHeader";
import CartDeliveryInfo from "@/features/cart/ui/CartDeliveryInfo";
import CartFooter from "@/features/cart/ui/CartFooter";
import { PaymentFormProvider } from "@/features/payment/model/paymentContext";

export default function CartPage() {
  return (
    <div className={styles.cartLayout}>
      <PaymentFormProvider>
        <CartHeader />
        <CartDeliveryInfo />
        <CartProducts />
        <CartFooter />
      </PaymentFormProvider>
    </div>
  );
}

import ShippingCard from "@/features/payment/ui/ShippingCard";
import styles from "./page.module.css";
import PaymentCard from "@/features/payment/ui/PaymentCard";
import CartFooter from "@/features/cart/ui/CartFooter";
import { PaymentFormProvider } from "@/features/payment/model/paymentContext";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function PaymentPage() {
  return (
    <div className={styles.paymentLayout}>
      <div className={styles.paymentHeader}>
        <ChevronLeft color="var(--color-primary)" />
        <h1>Secure Payment</h1>
        <Image
          alt="secure payment"
          src="/images/secure-payment.png"
          width={50}
          height={20}
        />
      </div>
      <PaymentFormProvider>
        <ShippingCard />
        <PaymentCard />
        <CartFooter />
      </PaymentFormProvider>
    </div>
  );
}

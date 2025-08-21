"use client";

import { ChevronUp } from "lucide-react";
import { useCart } from "../model/cartContext";
import Link from "next/link";
import calculateTotal from "../utils/calculateTotal";
import styles from "./CartFooter.module.css";
import { usePathname } from "next/navigation";
import PaymentButton from "@/features/payment/ui/PaymentButton";

export default function CartFooter() {
  const { state } = useCart()!;
  const total = calculateTotal(state.items);
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  return (
    <footer className={styles.cartFooter}>
      <ChevronUp color="var(--color-primary)" />
      <div className={styles.footerPrice}>
        <span>Total</span>
        <span>${total}</span>
      </div>
      {isCartPage ? (
        <Link
          href="/payment"
          style={{ marginLeft: "auto" }}
        >
          <button>Checkout</button>
        </Link>
      ) : (
        <Link href="/success">
          <PaymentButton />
        </Link>
      )}
    </footer>
  );
}

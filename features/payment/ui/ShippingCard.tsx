"use client";

import { useCart } from "@/features/cart/model/cartContext";
import Link from "next/link";
import { ChevronRight, Truck } from "lucide-react";
import styles from "./ShippingCard.module.css";

export default function ShippingCard() {
  const { state } = useCart()!;

  const { address } = state;

  return (
    <>
      <h3>Shipping</h3>
      <Link href="/delivery">
        {!address?.length ? (
          <button className={styles.addressButton}>
            <span>
              <Truck />
              Add Address
            </span>
            <ChevronRight color="var(--color-primary)" />
          </button>
        ) : (
          <button className={styles.addressButton}>
            <span>
              {address?.map((el) => (
                <p key={el}>{el}</p>
              ))}
            </span>
            <ChevronRight color="var(--color-primary)" />
          </button>
        )}
      </Link>

      {address?.length && (
        <label htmlFor="address-checkbox">
          <input type="checkbox" />
          <span>Billing and delivery addresses are the same.</span>
        </label>
      )}
    </>
  );
}

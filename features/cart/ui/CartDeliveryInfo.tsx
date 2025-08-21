import { Truck } from "lucide-react";
import styles from "./CartDeliveryInfo.module.css";

export default function CartDeliveryInfo() {
  return (
    <div className={styles.cartDelivery}>
      <Truck />
      Arrives by April 3 to April 9th
    </div>
  );
}

import { CartItem } from "@/types/cart";
import styles from "./CardItemHeader.module.css";

interface Props {
  item: CartItem;
}

export default function CartItemHeader({ item }: Props) {
  return (
    <div className={styles.itemHeader}>
      <div className={styles.itemTitle}>
        <span>{item.product.title}</span>
        <span>{item.product.description}</span>
      </div>
      <span>$ {item.product.price}</span>
    </div>
  );
}

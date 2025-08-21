import { CartItem } from "@/types/cart";
import styles from "./SizeSelector.module.css";

interface Props {
  item: CartItem;
  onChange: (size: string) => void;
}

export default function SizeSelector({ item, onChange }: Props) {
  return (
    <div className={styles.itemSize}>
      <p>Size</p>
      <select
        value={item.size}
        onChange={(e) => onChange(e.target.value)}
      >
        {item.product.size.map((s) => (
          <option
            key={s}
            value={s}
          >
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}

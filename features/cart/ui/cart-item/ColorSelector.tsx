import { CartItem } from "@/types/cart";
import styles from "./ColorSelector.module.css";

interface Props {
  item: CartItem;
  onChange: (color: string) => void;
}

export default function ColorSelector({ item, onChange }: Props) {
  return (
    <div className={styles.itemColor}>
      <p>Color</p>
      {item.product.color.length === 1 ? (
        <span>{item.product.color}</span>
      ) : (
        <select
          value={item.color}
          onChange={(e) => onChange(e.target.value)}
        >
          {item.product.color.map((c) => (
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

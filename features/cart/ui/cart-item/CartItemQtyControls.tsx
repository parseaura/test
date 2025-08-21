import { CartItem } from "@/types/cart";
import styles from "./CartItemQtyControl.module.css";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  item: CartItem;
  onAdd: () => void;
  onRemove: () => void;
}

export default function CartItemQtyControls({ item, onAdd, onRemove }: Props) {
  return (
    <div className={styles.itemQty}>
      <p>Qty</p>
      <div>
        <button onClick={onRemove}>
          <Trash2
            color="#F94444"
            size={18}
          />
        </button>
        <span>{item.qty}</span>
        <button onClick={onAdd}>
          <Plus
            color="var(--color-primary)"
            size={18}
          />
        </button>
      </div>
    </div>
  );
}

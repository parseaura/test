"use client";

import { useCart } from "../../model/cartContext";
import { cartActions } from "../../model/cartActions";
import { CartItem } from "@/types/cart";
import CartItemVariant from "./CartItemVariant";
import Image from "next/image";
import CartItemQtyControls from "./CartItemQtyControls";
import CartItemHeader from "./CartItemHeader";

import styles from "./CartItemCard.module.css";

interface Props {
  item: CartItem;
}

export default function CartItemCard({ item }: Props) {
  const { dispatch } = useCart()!;
  const { updateColor, updateSize, addItem, removeItem } =
    cartActions(dispatch);

  return (
    <div className={styles.itemCard}>
      <CartItemHeader item={item} />
      <div className={styles.itemBody}>
        <Image
          src={item.product.img}
          alt={item.product.title}
          width={200}
          height={200}
          loading="lazy"
          priority={false}
        />
        <div className={styles.itemVariant}>
          <CartItemVariant
            item={item}
            onUpdateColor={(c) => updateColor(item.product.id, c)}
            onUpdateSize={(s) => updateSize(item.product.id, s)}
          />
          <CartItemQtyControls
            item={item}
            onAdd={() => addItem(item.product.id)}
            onRemove={() => removeItem(item.product.id)}
          />
        </div>
      </div>
    </div>
  );
}

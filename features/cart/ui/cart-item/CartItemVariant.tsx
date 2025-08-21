import { CartItem } from "@/types/cart";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSeletor";

interface Props {
  item: CartItem;
  onUpdateColor: (color: string) => void;
  onUpdateSize: (size: string) => void;
}

export default function CartItemVariant({
  item,
  onUpdateColor,
  onUpdateSize,
}: Props) {
  return (
    <>
      <ColorSelector
        item={item}
        onChange={onUpdateColor}
      />
      <SizeSelector
        item={item}
        onChange={onUpdateSize}
      />
    </>
  );
}

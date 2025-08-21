import { Dispatch } from "react";
import { Product } from "./product";

export interface CartItem {
  product: Product;
  qty: number;
  color?: string;
  size?: string;
}

export interface CartState {
  address: string[] | null;
  items: CartItem[];
}

export type CartAction =
  | { type: "INIT"; items: CartItem[] }
  | { type: "ADD"; productId: number }
  | { type: "UPDATE_COLOR"; productId: number; color: string }
  | { type: "UPDATE_SIZE"; productId: number; size: string }
  | { type: "REMOVE"; productId: number }
  | {
      type: "ADD_ADDRESS";
      address: string[];
    };

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

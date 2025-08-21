import { CartAction, CartState } from "@/types/cart";

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INIT": {
      return { address: null, items: action.items };
    }
    case "ADD": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    }
    case "UPDATE_COLOR": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? {
                ...item,
                color: action.color,
              }
            : item
        ),
      };
    }
    case "UPDATE_SIZE": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? {
                ...item,
                color: action.size,
              }
            : item
        ),
      };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.productId
        ),
      };
    }
    case "ADD_ADDRESS": {
      return {
        ...state,
        address: action.address,
      };
    }
    default:
      return state;
  }
}

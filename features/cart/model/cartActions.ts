import { CartAction } from "@/types/cart";

export const cartActions = (dispatch: React.Dispatch<CartAction>) => ({
  updateColor: (productId: number, color: string) =>
    dispatch({ type: "UPDATE_COLOR", productId, color }),
  updateSize: (productId: number, size: string) =>
    dispatch({ type: "UPDATE_SIZE", productId, size }),
  addItem: (productId: number) => dispatch({ type: "ADD", productId }),
  removeItem: (productId: number) => dispatch({ type: "REMOVE", productId }),
  addAddress: (address: string[]) => dispatch({type: 'ADD_ADDRESS', address})
});

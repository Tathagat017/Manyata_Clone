import { ADD_TO_CART } from "./ActionType";

const AddToCartAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};
export const addToCart = (item) => (dispatch) => {
  dispatch(AddToCartAction(item));
};

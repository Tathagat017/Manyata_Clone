import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
} from "./ActionType";

const getProductRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload: payload };
};

const getProductFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

export const getProducts =
  (sort = "") =>
  async (dispatch) => {
    let url = `https://manyta-clone-of-myntra.cyclic.app/products`;
    // if (sort) {
    //   url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?_sort=discountPercentage&_order=${sort}`;
    // }
    console.log(url);
    // Complete get products functionality here
    dispatch(getProductRequest());
    try {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(getProductFailure());
    }
  };

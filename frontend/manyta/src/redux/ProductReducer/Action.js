import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_PAGES,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
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

const getGetProductTotalPages = (payload) => {
  return { type: GET_PRODUCT_PAGES, payload: payload };
};

const getSingleProductRequest = () => {
  return { type: GET_SINGLE_PRODUCT_REQUEST };
}
const getSingleProductSuccess = (payload) => {
  return { type: GET_SINGLE_PRODUCT_SUCCESS, payload: payload };
}
const getSingleProductFailure = () => {
  return { type: GET_SINGLE_PRODUCT_FAILURE };
}

// Complete get products functionality here
export const getProducts = (paramObj) => async (dispatch) => {
  //?category
//console.log(paramObj,"paramObj");
  dispatch(getProductRequest());
  try {
    const res = await axios.get(
      `http://localhost:8000/products/getprod`,{params:paramObj});
      // `https://successful-erin-leather-jacket.cyclic.app/products/getprod`,{params:paramObj});
    console.log(res);
    dispatch(getProductSuccess(res.data));
    //dispatch(getGetProductTotalPages(res["headers"]["x-total-count"]));
    // console.log(res["headers"]["x-total-count"]);
  } catch (err) {
    console.log(err);
    dispatch(getProductFailure());
  }
};

export const getsingleproduct=(id)=>async(dispatch)=>{
  dispatch(getSingleProductRequest());
  return await axios.get(`http://localhost:8000/products/getprod/${id}`)
.then((res)=>dispatch(getSingleProductSuccess(res.data)))
.catch((err)=>dispatch(getSingleProductFailure()))
}
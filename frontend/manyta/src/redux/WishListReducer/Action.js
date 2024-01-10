import axios from "axios";
import {
  GET_WISHLIST_GET_FAILURE,
  GET_WISHLIST_GET_SUCCESS,
  GET_WISHLIST_GET_REQUEST,
  GET_WISHLIST_ADD_FAILURE,
  GET_WISHLIST_ADD_SUCCESS,
  GET_WISHLIST_ADD_REQUEST,
  GET_WISHLIST_DELETE_FAILURE,
  GET_WISHLIST_DELETE_SUCCESS,
  GET_WISHLIST_DELETE_REQUEST,
} from "./ActionType";

const getwishlistgetRequest = () => {
  return { type: GET_WISHLIST_GET_REQUEST };
};

const getwishlistgetSuccess = (payload) => {
  return { type: GET_WISHLIST_GET_SUCCESS, payload: payload };
};

const getwishlistgetFailure = () => {
  return { type: GET_WISHLIST_GET_FAILURE };
};


const getwishlistaddRequest = () => {
  return { type: GET_WISHLIST_ADD_REQUEST };
};

const getwishlistaddSuccess = (payload) => {
  return { type: GET_WISHLIST_ADD_SUCCESS, payload: payload };
};

const getwishlistaddFailure = () => {
  return { type: GET_WISHLIST_ADD_FAILURE };
};


const getwishlistdeleteRequest = () => {
  return { type: GET_WISHLIST_DELETE_REQUEST };
};

const getwishlistdeleteSuccess = (payload) => {
  return { type: GET_WISHLIST_DELETE_SUCCESS, payload: payload };
};

const getwishlistdeleteFailure = () => {
  return { type: GET_WISHLIST_DELETE_FAILURE };
};

export const getwishlist = (userid) => async (dispatch) => {
  //?category
console.log(userid,"paramObj");
  dispatch(getwishlistgetRequest());
  try {
    console.log(userid);
    const res = await axios.get(
      `http://localhost:8000/wishlist/get/${userid}`);
      // `https://successful-erin-leather-jacket.cyclic.app/products/getprod`,{params:paramObj});
    console.log(res);
    dispatch(getwishlistgetSuccess(res.data.wishlist));
    //dispatch(getGetProductTotalPages(res["headers"]["x-total-count"]));
    // console.log(res["headers"]["x-total-count"]);
  } catch (err) {
    console.log(err);
    dispatch(getwishlistgetFailure());
  }
};

export const addwishlist = (id,userid) => async (dispatch) => {
  //?category
//console.log(paramObj,"paramObj");
  dispatch(getwishlistaddRequest());
  try {
    const res = await axios.post(
      `http://localhost:8000/wishlist/post`,{productid:id,authorid:userid});
      // `https://successful-erin-leather-jacket.cyclic.app/products/getprod`,{params:paramObj});
    console.log(res);
    dispatch(getwishlistaddSuccess(res.data));
    //dispatch(getGetProductTotalPages(res["headers"]["x-total-count"]));
    // console.log(res["headers"]["x-total-count"]);
  } catch (err) {
    console.log(err);
    dispatch(getwishlistaddFailure());
  }
};

export const deletewishlist = (id,userid) => async (dispatch) => {
  //?category
//console.log(paramObj,"paramObj");
  dispatch(getwishlistdeleteRequest());
  try {
    console.log(id,userid);
    const res = await axios.delete(
      `http://localhost:8000/wishlist/delete?productid=${id}&&authorid=${userid}`);
      // `https://successful-erin-leather-jacket.cyclic.app/products/getprod`,{params:paramObj});
    console.log(res);
    dispatch(getwishlistdeleteSuccess(res.data));
    //dispatch(getGetProductTotalPages(res["headers"]["x-total-count"]));
    // console.log(res["headers"]["x-total-count"]);
  } catch (err) {
    console.log(err);
    dispatch(getwishlistdeleteFailure());
  }
};
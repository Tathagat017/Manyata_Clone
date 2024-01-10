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
  
  const initialState = {
    isLoading: false,
    isError: false,
    totalLength: 0,
    wishlistproducts: [],
    isaddedrequest:false,
    isaddedsuccess:false,
    isaddederror:false,
    isaddded:"",
    isdeletedrequest:false,
    isdeletedsuccess:false,
    isdeletederror:false,
    isdeleted:""
  };
  
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_WISHLIST_GET_REQUEST: {
        return { ...state, isLoading: true, isError: false };
      }
      case GET_WISHLIST_GET_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          wishlistproducts: [...payload],
        };
      }
      case GET_WISHLIST_GET_FAILURE: {
        return { ...state, isLoading: false, isError: true };
      }

      case GET_WISHLIST_ADD_REQUEST: {
        return { ...state, isaddedrequest: true, isaddederror: false };
      }
      case GET_WISHLIST_ADD_SUCCESS: {
        return {
          ...state,
          isaddedrequest: false,
          isaddederror: false,
          isadded:payload,
        };
      }
      case GET_WISHLIST_ADD_FAILURE: {
        return { ...state, isaddedrequest: false, isaddederror: true };
      }

      case GET_WISHLIST_DELETE_REQUEST: {
        return { ...state, isdeletedrequest: true, isdeletederror: false };
      }
      case GET_WISHLIST_DELETE_SUCCESS: {
        return {
          ...state,
          isdeletedrequest: false,
          isdeletederror: false,
          isdeleted:payload,
        };
      }
      case GET_WISHLIST_DELETE_FAILURE: {
        return { ...state, isdeletedrequest: false, isdeletederror: true };
      }
      default: {
        return state;
      }
    }
  };
  
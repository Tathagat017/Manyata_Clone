import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...payload],
      };
    }
    case GET_PRODUCT_FAILURE: {
      return { ...state, isLoading: true, isError: true };
    }
    default: {
      return state;
    }
  }
};

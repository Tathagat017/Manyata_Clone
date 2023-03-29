import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  user: [{
    id: "",
    password: "",
    username: "",
    cart: [],
  }],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        user: 
      };
    }

    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};

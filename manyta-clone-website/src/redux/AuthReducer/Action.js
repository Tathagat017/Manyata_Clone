import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./ActionTypes";
import axios from "axios";
const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload: payload };
};

const loginErrorAction = () => {
  return { type: LOGIN_FAILURE };
};

const url = "https://reqres.in/api/login";

export const login = (email, password) => async (dispatch) => {
  let obj = {
    email: email,
    password: password,
  };

  dispatch(loginRequestAction());
  try {
    const res = await axios.post(url, obj);

    dispatch(loginSuccessAction(res.data.token));
    console.log(res.data.token);
  } catch (err) {
    dispatch(loginErrorAction());
    console.log(err);
  }
};

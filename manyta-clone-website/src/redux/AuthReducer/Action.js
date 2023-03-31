import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SET_PHONE_NUMBER,
  LOGIN_SET_SHOW_OTP,
  LOGIN_SET_OTP,
  LOGIN_SET_USER,
  LOGIN_LOADING,
  LOGIN_LOADING_DONE,
} from "./ActionType";
import { useDispatch, useSelector } from "react-redux";

export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccessAction = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailureAction = (payload) => {
  return { type: LOGIN_FAILURE, payload };
};

export const loginSetPhoneNumber = (payload) => {
  return { type: LOGIN_SET_PHONE_NUMBER, payload };
};

export const loginSetShowOTP = () => {
  return { type: LOGIN_SET_SHOW_OTP };
};

export const loginSetOTP = (payload) => {
  return { type: LOGIN_SET_OTP, payload };
};

export const loginSetUser = (payload) => {
  return { type: LOGIN_SET_USER, payload };
};

export const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

export const loginLoadingDone = () => {
  return { type: LOGIN_LOADING_DONE };
};

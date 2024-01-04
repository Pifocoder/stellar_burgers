import {
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
  POST_RESET_PASSWORD_SUCCESS,
  POST_RESET_PASSWORD_FAILED,
  POST_REGISTER_SUCCESS,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_FAILED,
  POST_LOGIN_FAILED,
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCCESS,
  POST_TOKEN_FAILED,
  POST_TOKEN_SUCCESS,
  POST_STARTED,
  ActionForgotPasswordSuccess,
  ActionPostStarted,
  ActionForgotPasswordFailed,
  ActionPostResetPasswordSuccess,
  ActionPostResetPasswordFailed,
  ActionPostRegisterSuccess,
  ActionPostRegisterFailed,
  ActionPostLoginSuccess,
  ActionPostLoginFailed,
  ActionPostTokenSuccess,
  ActionPostTokenFailed,
  ActionGetUserInfoSuccess,
  ActionGetUserInfoFailed,
} from "../actionTypes";
import {
  API_URL_RESET_PASSWORD,
  API_URL_FORGOT_PASSWORD,
  API_URL_REGISTER,
  API_URL_LOGIN,
  API_URL_GET_USER,
  API_URL_TOKEN,
} from "../../constants";
import { getCookie } from "../../utils/cookies";
import checkResponse from "../../utils/response";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";
import { UnknownAsyncThunkAction } from "@reduxjs/toolkit/dist/matchers";

type forgotPasswordData = {
  email: string;
};
type forgotPasswordAction =
  | ActionPostStarted
  | ActionForgotPasswordSuccess
  | ActionForgotPasswordFailed;
export function forgotPassword(
  data: forgotPasswordData
): ThunkAction<void, RootState, unknown, forgotPasswordAction> {
  return async (dispatch: Dispatch<forgotPasswordAction>) => {
    dispatch({ type: POST_STARTED });
    fetch(API_URL_FORGOT_PASSWORD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_FORGOT_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({ type: POST_FORGOT_PASSWORD_FAILED });
        }
      })
      .catch(() => {
        dispatch({ type: POST_FORGOT_PASSWORD_FAILED });
      });
  };
}
type resetPasswordData = {
  password: string;
  token: string;
};
type resetPasswordAction =
  | ActionPostStarted
  | ActionPostResetPasswordSuccess
  | ActionPostResetPasswordFailed;
export function resetPassword(
  data: resetPasswordData
): ThunkAction<void, RootState, unknown, resetPasswordAction> {
  return async (dispatch: Dispatch<resetPasswordAction>) => {
    dispatch({ type: POST_STARTED });
    fetch(API_URL_RESET_PASSWORD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({ type: POST_RESET_PASSWORD_FAILED });
        }
      })
      .catch(() => {
        dispatch({ type: POST_RESET_PASSWORD_FAILED });
      });
  };
}
type registerData = {
  email: string;
  password: string;
  name: string;
};
type registerAction =
  | ActionPostStarted
  | ActionPostRegisterSuccess
  | ActionPostRegisterFailed;
export function register(
  data: registerData
): ThunkAction<void, RootState, unknown, registerAction> {
  return async (dispatch: Dispatch<registerAction>) => {
    dispatch({ type: POST_STARTED });
    fetch(API_URL_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_REGISTER_SUCCESS,
            accessToken: data.accessToken.split("Bearer ")[1],
            refreshToken: data.refreshToken,
            user: data.user,
          });
        } else {
          dispatch({ type: POST_REGISTER_FAILED });
        }
      })
      .catch(() => {
        dispatch({ type: POST_REGISTER_FAILED });
      });
  };
}
type loginData = {
  email: string;
  password: string;
};
type loginAction =
  | ActionPostStarted
  | ActionPostLoginSuccess
  | ActionPostLoginFailed;
export function login(
  data: loginData
): ThunkAction<void, RootState, unknown, loginAction> {
  return async (dispatch: Dispatch<loginAction>) => {
    dispatch({ type: POST_STARTED });
    fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_LOGIN_SUCCESS,
            accessToken: data.accessToken.split("Bearer ")[1],
            refreshToken: data.refreshToken,
            user: data.user,
          });
        } else {
          dispatch({ type: POST_LOGIN_FAILED });
        }
      })
      .catch(() => {
        dispatch({ type: POST_LOGIN_FAILED });
      });
  };
}
type refreshTokenAction =
  | ActionPostStarted
  | ActionPostTokenSuccess
  | ActionPostTokenFailed;
function refreshToken(): ThunkAction<
  void,
  RootState,
  unknown,
  refreshTokenAction
> {
  return async (dispatch: Dispatch<refreshTokenAction>) => {
    await fetch(API_URL_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: POST_TOKEN_SUCCESS,
            accessToken: data.accessToken.split("Bearer ")[1],
            refreshToken: data.refreshToken,
          });
        } else {
          dispatch({
            type: POST_TOKEN_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: POST_TOKEN_FAILED,
        });
      });
  };
}
type GetUserAction =
  | ActionPostStarted
  | ActionGetUserInfoSuccess
  | ActionGetUserInfoFailed;
export function getUser(): ThunkAction<
  void,
  RootState,
  unknown,
  refreshTokenAction | GetUserAction
> {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, refreshTokenAction | GetUserAction>
  ) => {
    await dispatch(refreshToken());
    dispatch({ type: POST_STARTED });
    fetch(API_URL_GET_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_USER_INFO_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch({
            type: GET_USER_INFO_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_USER_INFO_FAILED,
        });
      });
  };
}
type updateUserData = {
  email: string;
  name: string;
  password: string;
};
type updateUserAction = GetUserAction;
export function updateUser(
  data: updateUserData
): ThunkAction<void, RootState, unknown, updateUserAction> {
  return async (dispatch: ThunkDispatch<RootState, unknown, refreshTokenAction | updateUserAction>) => {
    await dispatch(refreshToken());
    dispatch({ type: POST_STARTED });
    fetch(API_URL_GET_USER, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_USER_INFO_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch({
            type: GET_USER_INFO_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_USER_INFO_FAILED,
        });
      });
  };
}

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

type ForgotPasswordData = {
  email: string;
};
type ForgotPasswordAction =
  | ActionPostStarted
  | ActionForgotPasswordSuccess
  | ActionForgotPasswordFailed;
export function forgotPassword(
  data: ForgotPasswordData
): ThunkAction<void, RootState, unknown, ForgotPasswordAction> {
  return async (dispatch: Dispatch<ForgotPasswordAction>) => {
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
type ResetPasswordData = {
  password: string;
  token: string;
};
type ResetPasswordAction =
  | ActionPostStarted
  | ActionPostResetPasswordSuccess
  | ActionPostResetPasswordFailed;
export function resetPassword(
  data: ResetPasswordData
): ThunkAction<void, RootState, unknown, ResetPasswordAction> {
  return async (dispatch: Dispatch<ResetPasswordAction>) => {
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
type RegisterData = {
  email: string;
  password: string;
  name: string;
};
type RegisterAction =
  | ActionPostStarted
  | ActionPostRegisterSuccess
  | ActionPostRegisterFailed;
export function register(
  data: RegisterData
): ThunkAction<void, RootState, unknown, RegisterAction> {
  return async (dispatch: Dispatch<RegisterAction>) => {
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
type LoginData = {
  email: string;
  password: string;
};
type LoginAction =
  | ActionPostStarted
  | ActionPostLoginSuccess
  | ActionPostLoginFailed;
export function login(
  data: LoginData
): ThunkAction<void, RootState, unknown, LoginAction> {
  return async (dispatch: Dispatch<LoginAction>) => {
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
type RefreshTokenAction =
  | ActionPostStarted
  | ActionPostTokenSuccess
  | ActionPostTokenFailed;
function refreshToken(): ThunkAction<
  void,
  RootState,
  unknown,
  RefreshTokenAction
> {
  return async (dispatch: Dispatch<RefreshTokenAction>) => {
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
  RefreshTokenAction | GetUserAction
> {
  return async (
    dispatch: ThunkDispatch<
      RootState,
      unknown,
      RefreshTokenAction | GetUserAction
    >
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
type UdateUserData = {
  email: string;
  name: string;
  password: string;
};
type UpdateUserAction = GetUserAction;
export function updateUser(
  data: UdateUserData
): ThunkAction<void, RootState, unknown, UpdateUserAction> {
  return async (
    dispatch: ThunkDispatch<
      RootState,
      unknown,
      RefreshTokenAction | UpdateUserAction
    >
  ) => {
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

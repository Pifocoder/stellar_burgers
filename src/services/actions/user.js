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
export function forgotPassword(data) {
  return async (dispatch) => {
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

export function resetPassword(data) {
  return async (dispatch) => {
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
export function register(data) {
  return async (dispatch) => {
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
            user: data.user
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

export function login(data) {
  return async (dispatch) => {
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
            user: data.user
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
function refreshToken() {
  return async (dispatch) => {
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
export function getUser() {
  return async (dispatch) => {
    await dispatch(refreshToken())
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
export function updateUser(data) {
  return async (dispatch) => {
    await dispatch(refreshToken())
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

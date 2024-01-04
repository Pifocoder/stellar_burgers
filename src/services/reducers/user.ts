import { setCookie } from "../../utils/cookies";
import {
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
  POST_RESET_PASSWORD_SUCCESS,
  POST_RESET_PASSWORD_FAILED,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_SUCCESS,
  POST_LOGIN_FAILED,
  POST_REGISTER_FAILED,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  POST_TOKEN_FAILED,
  POST_TOKEN_SUCCESS,
  POST_STARTED,
  ActionForgotPasswordFailed,
  ActionForgotPasswordSuccess,
  ActionGetUserInfoFailed,
  ActionGetUserInfoSuccess,
  ActionPostLoginFailed,
  ActionPostLoginSuccess,
  ActionPostLogoutFailed,
  ActionPostLogoutSuccess,
  ActionPostRegisterFailed,
  ActionPostRegisterSuccess,
  ActionPostResetPasswordFailed,
  ActionPostResetPasswordSuccess,
  ActionPostStarted,
  ActionPostTokenSuccess,
  ActionPostTokenFailed,
} from "../actionTypes";
import { ACCESS_TOKEN_LIFETIME } from "../../constants";
export type userType = {
  email: string;
  name: string;
};
type userState = {
  isAuthenticated: boolean;
  user: userType;
  post_response_success: boolean;
  post_response_failed: boolean;
  forgot_password: boolean;
  reset_password: boolean;
  accessToken: string;
};
const initialState: userState = {
  isAuthenticated: false,
  user: {
    email: "",
    name: "",
  },
  post_response_success: false,
  post_response_failed: false,
  forgot_password: false,
  reset_password: true,
  accessToken: "",
};
type action =
  | ActionForgotPasswordFailed
  | ActionForgotPasswordSuccess
  | ActionGetUserInfoFailed
  | ActionGetUserInfoSuccess
  | ActionPostLoginFailed
  | ActionPostLoginSuccess
  | ActionPostLogoutFailed
  | ActionPostLogoutSuccess
  | ActionPostRegisterFailed
  | ActionPostRegisterSuccess
  | ActionPostResetPasswordFailed
  | ActionPostResetPasswordSuccess
  | ActionPostStarted
  | ActionPostTokenSuccess
  | ActionPostTokenFailed;

const user = (state = initialState, action: action): userState => {
  switch (action.type) {
    case POST_STARTED:
      return {
        ...state,
        post_response_success: false,
        post_response_failed: false,
      };
    case POST_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        post_response_success: true,
        post_response_failed: false,
        forgot_password: true,
        reset_password: false,
      };
    case POST_FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        post_response_failed: true,
        post_response_success: false,
        forgot_password: false,
        reset_password: false,
      };
    case POST_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        post_response_success: true,
        post_response_failed: false,
        forgot_password: true,
        reset_password: true,
      };
    case POST_RESET_PASSWORD_FAILED:
      return {
        ...state,
        post_response_failed: true,
        post_response_success: false,
        forgot_password: true,
        reset_password: false,
      };
    case POST_REGISTER_SUCCESS:
      setCookie("accessToken", action.accessToken, {
        expires: ACCESS_TOKEN_LIFETIME,
      });
      setCookie("refreshToken", action.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        post_response_success: true,
        post_response_failed: false,
        accessToken: action.accessToken,
        user: action.user,
      };
    case POST_REGISTER_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        post_response_success: false,
        post_response_failed: true,
      };
    case POST_LOGIN_SUCCESS:
      setCookie("accessToken", action.accessToken, {
        expires: ACCESS_TOKEN_LIFETIME,
      });
      setCookie("refreshToken", action.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        post_response_success: true,
        post_response_failed: false,
        accessToken: action.accessToken,
        user: action.user,
      };
    case POST_LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        post_response_success: false,
        post_response_failed: true,
      };
    case GET_USER_INFO_FAILED:
      return {
        ...state,
        post_response_success: false,
        post_response_failed: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        post_response_success: true,
        post_response_failed: false,
        user: action.user,
      };
    case POST_TOKEN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        post_response_failed: true,
        post_response_success: false,
      };
    case POST_TOKEN_SUCCESS:
      setCookie("accessToken", action.accessToken, {
        expires: ACCESS_TOKEN_LIFETIME,
      });
      setCookie("refreshToken", action.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        post_response_failed: false,
        post_response_success: true,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};
export default user;

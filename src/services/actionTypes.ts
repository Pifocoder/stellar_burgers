import ingredientType from "../utils/type";
import { constructorIngredient } from "./reducers/constructorIngredientsList";

import { userType } from "./reducers/user";

export const GET_API_INGREDIENTS_SUCCESS = "GET_API_INGREDIENTS_SUCCESS";
export interface actionGetApiIngredientsSuccess {
  type: typeof GET_API_INGREDIENTS_SUCCESS;
  ingredients: Array<ingredientType>;
}
export const GET_API_INGREDIENTS_FAILED = "GET_API_INGREDIENTS_FAILED";
export interface actionGetApiIngredientsFailed {
  type: typeof GET_API_INGREDIENTS_FAILED;
  error: string;
}
export const ADD_INGREDIENT_TO_ORDER = "ADD_INGREDIENT_TO_ORDER";
export const REMOVE_INGREDIENT_FROM_ORDER = "REMOVE_INGREDIENT_FROM_ORDER";
export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export interface actionOpenIngredientDetails {
  type: typeof OPEN_INGREDIENT_DETAILS;
  ingredient: ingredientType;
}
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";
export interface actionCloseIngredientDetails {
  type: typeof CLOSE_INGREDIENT_DETAILS;
}
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export interface actionAddIngredient {
  type: typeof ADD_INGREDIENT;
  ingredient: ingredientType;
}
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export interface actionRemoveIngredient {
  type: typeof REMOVE_INGREDIENT;
  ingredient: constructorIngredient;
}
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";
export interface actionMoveIngredient {
  type: typeof MOVE_INGREDIENT;
  lastPositionId: number;
  newPositionId: number;
}
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export interface actionPostOrderSuccess {
  type: typeof POST_ORDER_SUCCESS;
  id: number;
}
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export interface actionPostOrderFailed {
  type: typeof POST_ORDER_FAILED;
}
export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export interface actionOpenOrderModal {
  type: typeof OPEN_ORDER_MODAL;
}
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";
export interface actionCloseOrderModal {
  type: typeof CLOSE_ORDER_MODAL;
}

export const ACTIVATE_TAB = "ACTIVATE_TAB";

export const POST_FORGOT_PASSWORD_SUCCESS = "POST_FORGOT_PASSWORD_SUCCESS";
export interface actionForgotPasswordSuccess {
  type: typeof POST_FORGOT_PASSWORD_SUCCESS;
}
export const POST_FORGOT_PASSWORD_FAILED = "POST_FORGOT_PASSWORD_FAILED";
export interface actionForgotPasswordFailed {
  type: typeof POST_FORGOT_PASSWORD_FAILED;
}
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export interface actionPostRegisterSuccess {
  type: typeof POST_REGISTER_SUCCESS;
  accessToken : string;
  refreshToken : string;
  user : userType
}
export const POST_REGISTER_FAILED = "POST_REGISTER_FAILED";
export interface actionPostRegisterFailed {
  type: typeof POST_REGISTER_FAILED;
}
export const POST_RESET_PASSWORD_SUCCESS = "POST_RESET_PASSWORD_SUCCESS";
export interface actionPostResetPasswordSuccess {
  type: typeof POST_RESET_PASSWORD_SUCCESS;
}
export const POST_RESET_PASSWORD_FAILED = "POST_RESET_PASSWORD_FAILED";
export interface actionPostResetPasswordFailed {
  type: typeof POST_RESET_PASSWORD_FAILED;
}
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export interface actionPostLoginSuccess {
  type: typeof POST_LOGIN_SUCCESS;
  accessToken : string;
  refreshToken : string;
  user : userType
}
export const POST_LOGIN_FAILED = "POST_LOGIN_FAILED";
export interface actionPostLoginFailed {
  type: typeof POST_LOGIN_FAILED;
}
export const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
export interface actionPostTokenSuccess {
  type: typeof POST_TOKEN_SUCCESS;
  accessToken : string;
  refreshToken : string;
}
export const POST_TOKEN_FAILED = "POST_TOKEN_FAILED";
export interface actionPostTokenFailed {
  type: typeof POST_TOKEN_FAILED;
}
export const POST_LOGOUT_SUCCESS = "POST_LOGOUT_SUCCESS";
export interface actionPostLogoutSuccess {
  type: typeof POST_LOGOUT_SUCCESS;
}
export const POST_LOGOUT_FAILED = "POST_LOGOUT_FAILED";
export interface actionPostLogoutFailed {
  type: typeof POST_LOGOUT_FAILED;
}
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export interface actionGetUserInfoSuccess {
  type: typeof GET_USER_INFO_SUCCESS;
  user : userType
}
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export interface actionGetUserInfoFailed {
  type: typeof GET_USER_INFO_FAILED;
}
export const POST_STARTED = "POST_STARTED";
export interface actionPostStarted {
  type: typeof POST_STARTED;
}

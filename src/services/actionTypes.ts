import ingredientType from "../utils/type";
import { constructorIngredient } from "./reducers/constructorIngredientsList";

import { userType } from "./reducers/user";

export const GET_API_INGREDIENTS_SUCCESS = "GET_API_INGREDIENTS_SUCCESS";
export interface ActionGetApiIngredientsSuccess {
  type: typeof GET_API_INGREDIENTS_SUCCESS;
  ingredients: Array<ingredientType>;
}
export const GET_API_INGREDIENTS_FAILED = "GET_API_INGREDIENTS_FAILED";
export interface ActionGetApiIngredientsFailed {
  type: typeof GET_API_INGREDIENTS_FAILED;
  error: string;
}
export const ADD_INGREDIENT_TO_ORDER = "ADD_INGREDIENT_TO_ORDER";
export const REMOVE_INGREDIENT_FROM_ORDER = "REMOVE_INGREDIENT_FROM_ORDER";
export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export interface ActionOpenIngredientDetails {
  type: typeof OPEN_INGREDIENT_DETAILS;
  ingredient: ingredientType;
}
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";
export interface ActionCloseIngredientDetails {
  type: typeof CLOSE_INGREDIENT_DETAILS;
}
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export interface ActionAddIngredient {
  type: typeof ADD_INGREDIENT;
  ingredient: ingredientType;
}
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export interface ActionRemoveIngredient {
  type: typeof REMOVE_INGREDIENT;
  ingredient: constructorIngredient;
}
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";
export interface ActionMoveIngredient {
  type: typeof MOVE_INGREDIENT;
  lastPositionId: number;
  newPositionId: number;
}
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export interface ActionPostOrderSuccess {
  type: typeof POST_ORDER_SUCCESS;
  id: number;
}
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export interface ActionPostOrderFailed {
  type: typeof POST_ORDER_FAILED;
}
export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export interface ActionOpenOrderModal {
  type: typeof OPEN_ORDER_MODAL;
}
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";
export interface ActionCloseOrderModal {
  type: typeof CLOSE_ORDER_MODAL;
}

export const ACTIVATE_TAB = "ACTIVATE_TAB";

export const POST_FORGOT_PASSWORD_SUCCESS = "POST_FORGOT_PASSWORD_SUCCESS";
export interface ActionForgotPasswordSuccess {
  type: typeof POST_FORGOT_PASSWORD_SUCCESS;
}
export const POST_FORGOT_PASSWORD_FAILED = "POST_FORGOT_PASSWORD_FAILED";
export interface ActionForgotPasswordFailed {
  type: typeof POST_FORGOT_PASSWORD_FAILED;
}
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export interface ActionPostRegisterSuccess {
  type: typeof POST_REGISTER_SUCCESS;
  accessToken : string;
  refreshToken : string;
  user : userType
}
export const POST_REGISTER_FAILED = "POST_REGISTER_FAILED";
export interface ActionPostRegisterFailed {
  type: typeof POST_REGISTER_FAILED;
}
export const POST_RESET_PASSWORD_SUCCESS = "POST_RESET_PASSWORD_SUCCESS";
export interface ActionPostResetPasswordSuccess {
  type: typeof POST_RESET_PASSWORD_SUCCESS;
}
export const POST_RESET_PASSWORD_FAILED = "POST_RESET_PASSWORD_FAILED";
export interface ActionPostResetPasswordFailed {
  type: typeof POST_RESET_PASSWORD_FAILED;
}
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export interface ActionPostLoginSuccess {
  type: typeof POST_LOGIN_SUCCESS;
  accessToken : string;
  refreshToken : string;
  user : userType
}
export const POST_LOGIN_FAILED = "POST_LOGIN_FAILED";
export interface ActionPostLoginFailed {
  type: typeof POST_LOGIN_FAILED;
}
export const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
export interface ActionPostTokenSuccess {
  type: typeof POST_TOKEN_SUCCESS;
  accessToken : string;
  refreshToken : string;
}
export const POST_TOKEN_FAILED = "POST_TOKEN_FAILED";
export interface ActionPostTokenFailed {
  type: typeof POST_TOKEN_FAILED;
}
export const POST_LOGOUT_SUCCESS = "POST_LOGOUT_SUCCESS";
export interface ActionPostLogoutSuccess {
  type: typeof POST_LOGOUT_SUCCESS;
}
export const POST_LOGOUT_FAILED = "POST_LOGOUT_FAILED";
export interface ActionPostLogoutFailed {
  type: typeof POST_LOGOUT_FAILED;
}
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export interface ActionGetUserInfoSuccess {
  type: typeof GET_USER_INFO_SUCCESS;
  user : userType
}
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export interface ActionGetUserInfoFailed {
  type: typeof GET_USER_INFO_FAILED;
}
export const POST_STARTED = "POST_STARTED";
export interface ActionPostStarted {
  type: typeof POST_STARTED;
}

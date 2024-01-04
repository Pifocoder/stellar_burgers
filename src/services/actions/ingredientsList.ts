import { Dispatch } from "redux";
import { API_URL_INGREDIENTS } from "../../constants";
import checkResponse from "../../utils/response";
import {
    GET_API_INGREDIENTS_SUCCESS,
    GET_API_INGREDIENTS_FAILED,
    ActionGetApiIngredientsSuccess,
    ActionGetApiIngredientsFailed
} from "../actionTypes";
type action = ActionGetApiIngredientsSuccess | ActionGetApiIngredientsFailed;

export function getApiIngredients() {
  return function (dispatch: Dispatch<action>) {
    fetch(API_URL_INGREDIENTS)
      .then(checkResponse)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_API_INGREDIENTS_SUCCESS,
            ingredients: data.data,
          });
        } else {
          dispatch({
            type: GET_API_INGREDIENTS_FAILED,
            error : data.data
          });
        }
      })
      .catch(function (error) {
        dispatch({
          type: GET_API_INGREDIENTS_FAILED,
          error: error,
        });
      });
  };
}

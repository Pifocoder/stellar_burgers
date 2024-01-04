import ingredientType from "../../utils/type";
import {
  GET_API_INGREDIENTS_FAILED,
  GET_API_INGREDIENTS_SUCCESS,
  actionGetApiIngredientsFailed,
  actionGetApiIngredientsSuccess,
} from "../actionTypes";
export type ingredientListState = {
  getIngredientsSuccess : boolean,
  getIngredientsFailed : boolean,
  error : null | string,
  ingredients : Array<ingredientType>
}
const initialState : ingredientListState = {
  getIngredientsSuccess: false,
  getIngredientsFailed: false,
  error: null,
  ingredients: Array<ingredientType>(),
};
type action = actionGetApiIngredientsSuccess | actionGetApiIngredientsFailed;
const ingredientsList = (state = initialState, action: action) : ingredientListState => {
  switch (action.type) {
    case GET_API_INGREDIENTS_FAILED:
      return {
        ...state,
        getIngredientsSuccess: false,
        getIngredientsFailed: true,
        error: action.error,
      };
    case GET_API_INGREDIENTS_SUCCESS:
      return {
        ingredients: action.ingredients,
        getIngredientsSuccess: true,
        getIngredientsFailed: false,
        error: null,
      };
    default:
      return state;
  }
};
export default ingredientsList;

import {
  GET_API_INGREDIENTS_FAILED,
  GET_API_INGREDIENTS_SUCCESS,
} from "../actionTypes";
const initialState = [
  {
    getIngredientsSuccess: false,
    getIngredientsFailed: false,
    error : null,
    ingredients: [],
  },
];
const ingredientsList = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_INGREDIENTS_FAILED:
      return {
        ...state,
        getIngredientsSuccess: false,
        getIngredientsFailed: true,
        error : action.error
      };
    case GET_API_INGREDIENTS_SUCCESS:
      return {
        ingredients: action.ingredients,
        getIngredientsSuccess: true,
        getIngredientsFailed: false,
        error : null
      };
    default:
      return state;
  }
};
export default ingredientsList;

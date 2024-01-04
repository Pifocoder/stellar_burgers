import ingredientType from "../../utils/type";
import {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  actionOpenIngredientDetails,
  actionCloseIngredientDetails,
} from "../actionTypes";
interface ingredientDetailsState {
  open: boolean;
  ingredient: ingredientType | {};
}
const initialState: ingredientDetailsState = {
  open: false,
  ingredient: {},
};
type action = actionOpenIngredientDetails | actionCloseIngredientDetails;
const ingredientDetails = (
  state = initialState,
  action: action
): ingredientDetailsState => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        open: true,
        ingredient: action.ingredient,
      };
    case CLOSE_INGREDIENT_DETAILS:
      return {
        open: false,
        ingredient: {},
      };
    default:
      return state;
  }
};
export default ingredientDetails;

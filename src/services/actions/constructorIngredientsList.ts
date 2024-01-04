import ingredientType from "../../utils/type";
import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  actionAddIngredient,
  actionRemoveIngredient,
} from "../actionTypes";
import { constructorIngredient } from "../reducers/constructorIngredientsList";
export function addIngredient(ingredient: ingredientType): actionAddIngredient {
  return { type: ADD_INGREDIENT, ingredient: ingredient };
}
export function removeIngredient(
  ingredient: ingredientType,
  id: number
): actionRemoveIngredient {
  return {
    type: REMOVE_INGREDIENT,
    ingredient: {
      ingredient: ingredient,
      id: id,
    },
  };
}
export function moveIngredient(lastPositionId: number, newPositionId: number) {
  return {
    type: MOVE_INGREDIENT,
    lastPositionId: lastPositionId,
    newPositionId: newPositionId,
  };
}

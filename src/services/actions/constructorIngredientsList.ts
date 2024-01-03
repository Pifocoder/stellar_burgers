import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
} from "../actionTypes";
export function addIngredient(ingredient) {
  return { type: ADD_INGREDIENT, ingredient: ingredient };
}
export function removeIngredient(ingredient, id) {
  return { type: REMOVE_INGREDIENT, ingredient: ingredient, id: id };
}
export function moveIngredient(lastPositionId, newPositionId) {
  return {
    type: MOVE_INGREDIENT,
    lastPositionId: lastPositionId,
    newPositionId: newPositionId,
  };
}

import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  actionAddIngredient,
  actionMoveIngredient,
  actionRemoveIngredient,
} from "../actionTypes";
import ingredientDetails from "./ingredientDetails";
import { TOP_BOTTOM_TYPE } from "../../constants";
import ingredientType from "../../utils/type";

export type constructorIngredient = { ingredient: ingredientType } & {
  id: number;
};
type constructorIngredientState = {
  ingredients: Array<constructorIngredient>;
  price: number;
  capacity: number;
  counts: Map<string, number>;
};
const initialState: constructorIngredientState = {
  ingredients: Array<constructorIngredient>(),
  price: 0,
  capacity: 0,
  counts: new Map<string, number>(),
};
export type actionConstructorIngredients =
  | actionAddIngredient
  | actionMoveIngredient
  | actionRemoveIngredient;
const constructorIngredients = (
  state = initialState,
  action: actionConstructorIngredients
): constructorIngredientState => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.ingredient.type != TOP_BOTTOM_TYPE) {
        state.counts.set(
          action.ingredient._id,
          (state.counts.get(action.ingredient._id) ?? 0) + 1
        );

        return {
          ...state,
          price: state.price + action.ingredient.price,
          ingredients: [
            ...state.ingredients,
            { ingredient: action.ingredient, id: state.capacity },
          ],
          capacity: state.capacity + 1,
        };
      }
      state.counts.set(
        action.ingredient._id,
        (state.counts.get(action.ingredient._id) ?? 0) + 2
      );

      return {
        ...state,
        price: state.price + action.ingredient.price + action.ingredient.price,
        ingredients: [
          { ingredient: action.ingredient, id: state.capacity },
          ...state.ingredients,
        ],
        capacity: state.capacity + 1,
      };
    case REMOVE_INGREDIENT:
      if (action.ingredient.ingredient.type != TOP_BOTTOM_TYPE) {
        state.counts.set(
          action.ingredient.ingredient._id,
          (state.counts.get(action.ingredient.ingredient._id) ?? 0) - 1
        );
        return {
          ...state,
          ingredients: state.ingredients.filter(
            (item) => item.id != action.ingredient.id
          ),
          price: state.price - action.ingredient.ingredient.price,
        };
      } else {
        state.counts.set(
          action.ingredient.ingredient._id,
          (state.counts.get(action.ingredient.ingredient._id) ?? 0) - 2
        );

        return {
          ...state,
          ingredients: state.ingredients.filter(
            (item) => item.id != action.ingredient.id
          ),
          price:
            state.price -
            action.ingredient.ingredient.price -
            action.ingredient.ingredient.price,
        };
      }
    case MOVE_INGREDIENT:
      const lastPosition = state.ingredients.findIndex(
        (item) => item.id === action.lastPositionId
      );
      const newPosition = state.ingredients.findIndex(
        (item) => item.id === action.newPositionId
      );
      const clone = [...state.ingredients];
      if (lastPosition <= newPosition) {
        clone.splice(newPosition, 0, state.ingredients[lastPosition]);
        clone.splice(lastPosition, 1);
        return {
          ...state,
          ingredients: clone,
        };
      }
      clone.splice(
        newPosition,
        0,
        state.ingredients[lastPosition]
      );
      clone.splice(lastPosition + 1, 1);
      return {
        ...state,
        ingredients: clone,
      };
    default:
      return state;
  }
};
export default constructorIngredients;

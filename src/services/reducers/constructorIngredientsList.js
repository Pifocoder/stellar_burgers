import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
} from "../actionTypes";
import ingredientDetails from "./ingredientDetails";
import { TOP_BOTTOM_TYPE } from "../../constants";
const initialState = {
  ingredients: [],
  price: 0,
  capacity: 0,
  counts: new Map(),
};
const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.ingredient.type != TOP_BOTTOM_TYPE) {
        state.counts.set(
          action.ingredient._id,
          typeof state.counts.get(action.ingredient._id) === "undefined"
            ? 1
            : state.counts.get(action.ingredient._id) + 1
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
        typeof state.counts.get(action.ingredient._id) === "undefined"
          ? 2
          : state.counts.get(action.ingredient._id) + 2
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
      if (action.ingredient.type != TOP_BOTTOM_TYPE) {
        state.counts.set(
          action.ingredient._id,
          state.counts.get(action.ingredient._id) - 1
        );
        return {
          ...state,
          ingredients: state.ingredients.filter((item) => item.id != action.id),
          price: state.price - action.ingredient.price,
        };
      } else {
        state.counts.set(
          action.ingredient._id,
          state.counts.get(action.ingredient._id) - 2
        );

        return {
          ...state,
          ingredients: state.ingredients.filter((item) => item.id != action.id),
          price:
            state.price - action.ingredient.price - action.ingredient.price,
        };
      }
    case MOVE_INGREDIENT:
      const lastPosition = state.ingredients.findIndex(
        (item) => item.id === action.lastPositionId
      );
      const newPosition = state.ingredients.findIndex(
        (item) => item.id === action.newPositionId
      );
      if (lastPosition <= newPosition) {
        state.ingredients.splice(
          newPosition,
          0,
          state.ingredients[lastPosition]
        );
        state.ingredients.splice(lastPosition, 1);
        return {
          ...state,
        };
      }
      state.ingredients.splice(newPosition, 0, state.ingredients[lastPosition]);
      state.ingredients.splice(lastPosition + 1, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default constructorIngredients;

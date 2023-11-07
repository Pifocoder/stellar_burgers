import { ADD_INGREDIENT_TO_ORDER, REMOVE_INGREDIENT_FROM_ORDER, SET_INGREDIENTS } from "../../constants"
export function setIngredients(ingredients) {
    return {type : SET_INGREDIENTS, ingredients : ingredients}
}
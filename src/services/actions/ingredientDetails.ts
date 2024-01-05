import ingredientType from "../../utils/type"
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from "../actionTypes"
export function openIngredientDetails(ingredient : ingredientType) {
    return {type : OPEN_INGREDIENT_DETAILS, ingredient : ingredient}
}
export function closeIngredientDetails() {
    return {type : CLOSE_INGREDIENT_DETAILS }
}
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from "../../constants"
export function openIngredientDetails(ingredient) {
    return {type : OPEN_INGREDIENT_DETAILS, ingredient : ingredient}
}
export function closeIngredientDetails() {
    return {type : CLOSE_INGREDIENT_DETAILS }
}
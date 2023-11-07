import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../../constants'
const initialState = [{
    open : false,
    ingredient : {}
}]
const ingredientDetails = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_INGREDIENT_DETAILS:
            return {
                open : true,
                ingredient : action.ingredient
            }
        case CLOSE_INGREDIENT_DETAILS:
            return {
                open : false,
                ingredient : {}
            }
        default:
            return state
    }
}
export default ingredientDetails;
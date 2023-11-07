import { SET_INGREDIENTS } from '../../constants'
const initialState = [{}]
const ingredientsList = (state = initialState, action) => {
    switch(action.type) {
        case SET_INGREDIENTS:
            return action.ingredients
        default:
            return state
    }
}
export default ingredientsList;
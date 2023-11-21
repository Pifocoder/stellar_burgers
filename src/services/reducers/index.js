import ingredientsList from './ingredientsList'
import { combineReducers } from 'redux';
import ingredientDetails from './ingredientDetails';
import constructorIngredients from './constructorIngredientsList';
import order from './order';
const rootReducer = combineReducers({
    ingredientsList,
    ingredientDetails,
    constructorIngredients,
    order
})
export default rootReducer;
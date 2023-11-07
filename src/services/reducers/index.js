import ingredientsList from '../reducers/ingredients_list'
import { combineReducers } from 'redux';
import ingredientDetails from './ingredient_details';
import constructorIngredients from './constructor_ingredients_list';
import order from './order';
const rootReducer = combineReducers({
    ingredientsList,
    ingredientDetails,
    constructorIngredients,
    order
})
export default rootReducer;
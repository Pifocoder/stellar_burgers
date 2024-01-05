import ingredientsList from './ingredientsList'
import { combineReducers } from 'redux';
import ingredientDetails from './ingredientDetails';
import constructorIngredients from './constructorIngredientsList';
import order from './order';
import user from './user';
export const rootReducer = combineReducers({
    ingredientsList,
    ingredientDetails,
    constructorIngredients,
    order,
    user
})

export type RootState = ReturnType<typeof rootReducer>
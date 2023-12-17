import ingredientsList from './ingredientsList'
import { combineReducers } from 'redux';
import ingredientDetails from './ingredientDetails';
import constructorIngredients from './constructorIngredientsList';
import order from './order';
import user from './user';
import { refreshToken } from '../actions/user';
export const rootReducer = combineReducers({
    ingredientsList,
    ingredientDetails,
    constructorIngredients,
    order,
    user
})
export const refreshTokenMiddleware = ({ dispatch, getState }) => next => action => {
    // dispatch(refreshToken());
    // let result;
    // result = next(action);
    console.log("fuck")
    return next(action);
}

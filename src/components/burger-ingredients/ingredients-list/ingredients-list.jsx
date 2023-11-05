import React from 'react';
import styles from './ingredients-list.module.css';
import Card from './card/card'
import PropTypes from "prop-types";
import ingredientType from '../../../utils/type';
IngredientsList.propTypes = {
    title : PropTypes.string,
    ingredients: PropTypes.arrayOf(ingredientType),
  };
function IngredientsList({title, ingredients}) {
    return (
        <section>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <section className={"mt-6 ml-4 " +  styles.ingredients_conteiner}>
                {ingredients.map((ingredient) => (
                   <Card ingredient={ingredient} key={ingredient._id}/> 
                ))}
            </section>
        </section>
    );
}
Card.propTypes = {
    ingredient: ingredientType
  };
export default IngredientsList;

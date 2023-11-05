import React from 'react';
import styles from './middle-ingredient.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientType from '../../../utils/type';

function MiddleIngredient({ingredient}) {
    return (
        <section className={styles.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
        </section>
    );
}
MiddleIngredient.propTypes = {
  ingredient: ingredientType
};
export default MiddleIngredient;
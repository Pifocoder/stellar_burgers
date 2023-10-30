import React from 'react';
import styles from './middle-ingredient.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
MiddleIngredient.propTypes = {
  ingredient: PropTypes.shape({
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    image : PropTypes.string.isRequired
  })
};
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

export default MiddleIngredient;
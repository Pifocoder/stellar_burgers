import React from 'react';
import styles from './middle-ingredient.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function MiddleIngredient({ingredient}) {
    return (
        <section className={styles.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                type="down"
                isLocked={true}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                key={ingredient._id}
              />
        </section>
    );
}

export default MiddleIngredient;
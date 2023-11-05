import React, { useState, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderSubmiter from "../order-submiter/order-submiter";
import MiddleIngredient from "./middle-ingredient/middle-ingredient";
import PropTypes from "prop-types";
import ingredientType from "../../utils/type";

function BurgerConstructor({ ingredients }) {
  const [orderPrice, setOrderPrice] = React.useState(0);
  React.useEffect(() => {
    let price = 0;
    ingredients.forEach((ingredient) => {
      price += ingredient.price;
    });
    setOrderPrice(price);
  }, []);

  return (
    <section className={styles.burger_constructor}>
      <section
        className={styles.burger_constructor__list_ingredients + " mt-25"}
      >
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredients[0].name + " (верх)"}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
        <section className={styles.middle_ingredients_container}>
          {ingredients.map(function (ingredient, index) {
            if (index > 0) {
              return (
                <MiddleIngredient
                  key={ingredient._id}
                  ingredient={ingredient}
                />
              );
            }
          })}
        </section>
        <div className="ml-8" >
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredients[0].name + " (низ)"}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
      </section>
      <section className="mt-10">
        <OrderSubmiter orderPrice={orderPrice} />
      </section>
    </section>
  );
}
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
};

export default BurgerConstructor;

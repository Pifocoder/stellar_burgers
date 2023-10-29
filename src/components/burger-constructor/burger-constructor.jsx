import React, { useState, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderSubmiter from "../order-submiter/order-submiter";
import MiddleIngredient from "./middle-ingredient/middle-ingredient";

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
        {ingredients.map(function (ingredient, index, ingredients) {
          if (index === 0) {
            return (
              <div className="ml-8" key={ingredient._id}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                  
                />
              </div>
            );
          } else if (index === ingredients.length - 1) {
            return (
              <div className="ml-8" key={ingredient._id}>
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          } else
            return (
              <MiddleIngredient key={ingredient._id} ingredient={ingredient} />
            );
        })}
      </section>
      <section className="mt-10">
        <OrderSubmiter orderPrice={orderPrice} />
      </section>
    </section>
  );
}

export default BurgerConstructor;

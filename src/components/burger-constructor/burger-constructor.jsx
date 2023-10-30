import React, { useState, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderSubmiter from "../order-submiter/order-submiter";
import MiddleIngredient from "./middle-ingredient/middle-ingredient";
import PropTypes from "prop-types";

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })),
};

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
        {ingredients.map(function (ingredient, index) {
          if (index === 0) {
            return (
              <div className="ml-8" key={ingredient._id}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={ingredient.name + " (верх)"}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          }
          return (
            <MiddleIngredient key={ingredient._id} ingredient={ingredient} />
          );
        })}
        <div className="ml-8" key={ingredients[0]._id}>
          <ConstructorElement
            type="down"
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

export default BurgerConstructor;

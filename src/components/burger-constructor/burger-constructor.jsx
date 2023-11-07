import React, { useState, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderSubmiter from "../order-submiter/order-submiter";
import MiddleIngredient from "./middle-ingredient/middle-ingredient";
import PropTypes from "prop-types";
import ingredientType from "../../utils/type";
import { useSelector } from "react-redux";
import constructorIngredients from "../../services/reducers/constructor_ingredients_list";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/constructor_ingredients_list";
import { topBottomType } from "../../constants";
function BurgerConstructor() {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients
  );
  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ ingredient }) {
      if (
        ingredient.type === topBottomType &&
        constructorIngredients.ingredients.length > 0 &&
        constructorIngredients.ingredients[0].ingredient.type === topBottomType
      ) {
        dispatch(
          removeIngredient(
            constructorIngredients.ingredients[0].ingredient,
            constructorIngredients.ingredients[0].id
          )
        );
      }
      dispatch(addIngredient(ingredient));
    },
  });

  const opacity = isHover
    ? styles.burger_constructor__list_ingredients_hover
    : "";
  return (
    <section className={styles.burger_constructor}>
      <section
        className={
          styles.burger_constructor__list_ingredients + " " + opacity + " mt-25"
        }
        ref={drop}
      >
        {constructorIngredients.ingredients.length > 0 && (
          <>
            {constructorIngredients.ingredients[0].ingredient.type ===
              topBottomType && (
              <div className="ml-8">
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={
                    constructorIngredients.ingredients[0].ingredient.name +
                    " (верх)"
                  }
                  price={constructorIngredients.ingredients[0].ingredient.price}
                  thumbnail={
                    constructorIngredients.ingredients[0].ingredient.image
                  }
                />
              </div>
            )}
            <section className={styles.middle_ingredients_container}>
              {constructorIngredients.ingredients.map(function (item) {
                if (item.ingredient.type !== topBottomType) {
                  return (
                    <MiddleIngredient
                      ingredient={item.ingredient}
                      id={item.id}
                      key={item.id}
                    />
                  );
                }
              })}
            </section>
            {constructorIngredients.ingredients[0].ingredient.type ===
              topBottomType && (
              <div className="ml-8">
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={
                    constructorIngredients.ingredients[0].ingredient.name +
                    " (низ)"
                  }
                  price={constructorIngredients.ingredients[0].ingredient.price}
                  thumbnail={
                    constructorIngredients.ingredients[0].ingredient.image
                  }
                />
              </div>
            )}
          </>
        )}
      </section>
      <section className="mt-10">
        <OrderSubmiter />
      </section>
    </section>
  );
}

export default BurgerConstructor;

import React from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsTab from "./tab/tab";
import Type from "./type/type";

function BurgerIngredients({ ingredients }) {
  return (
    <section className={styles.burger_ingredients}>
      <section className="mt-10">
        <h2 className="text text_type_main-large">Соберите бургер</h2>
      </section>
      <section className="mt-5">
        <BurgerIngredientsTab />
      </section>
      <section className={"mt-10 " + styles.types_conteiner}>
        <Type
          title="Булки"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "bun";
          })}
        />
        <Type
          title="Соусы"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "sauce";
          })}
        />
        <Type
          title="Начинки"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "main";
          })}
        />
      </section>
    </section>
  );
}

export default BurgerIngredients;

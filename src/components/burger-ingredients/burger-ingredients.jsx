import React from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsTab from "./tab/tab";
import IngredientsList from "./ingredients-list/ingredients-list";
import PropTypes from "prop-types";
import ingredientType from "../../utils/type";

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
        <IngredientsList
          title="Булки"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "bun";
          })}
        />
        <IngredientsList
          title="Соусы"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "sauce";
          })}
        />
        <IngredientsList
          title="Начинки"
          ingredients={ingredients.filter(function (ingredient) {
            return ingredient.type === "main";
          })}
        />
      </section>
    </section>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
};
export default BurgerIngredients;

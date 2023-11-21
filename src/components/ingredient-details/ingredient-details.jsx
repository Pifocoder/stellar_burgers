import React from "react";
import styles from "./ingredient-details.module.css";
import NutritionValue from "./nutrition-value/nutrition-value";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ingredientDetails from "../../services/reducers/ingredientDetails";

const nutritionDict = [
  {
    tag: "proteins",
    name: "Белки",
    unit: "г",
  },
  {
    tag: "fat",
    name: "Жиры",
    unit: "г",
  },
  {
    tag: "carbohydrates",
    name: "Углеводы",
    unit: "г",
  },
  {
    tag: "calories",
    name: "Каллории",
    unit: "ккал",
  },
];


function IngredientDetails() {
  const ingredientDetails = useSelector((store) => store.ingredientDetails)
  return (
    <section className={styles.ingredient_details}>
      <h2
        className={
          "text text_type_main-large pt-10 pl-10 pr-10 " + styles.title
        }
      >
        Детали ингредиента
      </h2>
      <section className={styles.body}>
        <img
          className={styles.image + " pl-5 pr-5"}
          src={ingredientDetails.ingredient.image_large}
          alt={ingredientDetails.ingredient.name}
        />
        <p className="text text_type_main-medium mt-4">{ingredientDetails.ingredient.name}</p>
        <section
          className={styles.ingredient__nutrition_values + " mt-8 pb-15"}
        >
          {nutritionDict.map(function (nutrition, index) {
            return (
              <NutritionValue
                value={ingredientDetails.ingredient[nutrition.tag]}
                unit={nutrition.unit}
                unit_name={nutrition.name}
                key={ingredientDetails.ingredient._id + nutrition.tag + String(index)}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
}

export default IngredientDetails;

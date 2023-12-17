import React from "react";
import styles from "./ingredient-details.module.css";
import NutritionValue from "./nutrition-value/nutrition-value";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ingredientDetails from "../../services/reducers/ingredientDetails";
import { useLocation, useParams } from "react-router-dom";

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
  const params = useParams();
  function compare(element, index, array) {
    return element._id === params.ingredientId;
  }
  const ingredientsList = useSelector((store) => store.ingredientsList);

  if (ingredientsList.getIngredientsFailed) {
    return <p>Ошибка: {ingredientsList.error}</p>;
  } else if (!ingredientsList.getIngredientsSuccess) {
    return <p>Загрузка</p>;
  } else {
    const ingredient = ingredientsList.ingredients.find(compare);
    return (
      <section className={styles.ingredient_details}>
        <section className={styles.body}>
          <img
            className={styles.image + " pl-5 pr-5"}
            src={ingredient.image_large}
            alt={ingredient.name}
          />
          <p className="text text_type_main-medium mt-4">{ingredient.name}</p>
          <section
            className={styles.ingredient__nutrition_values + " mt-8 pb-15"}
          >
            {nutritionDict.map(function (nutrition, index) {
              return (
                <NutritionValue
                  value={ingredient[nutrition.tag]}
                  unit={nutrition.unit}
                  unit_name={nutrition.name}
                  key={ingredient._id + nutrition.tag + String(index)}
                />
              );
            })}
          </section>
        </section>
      </section>
    );
  }
}

export default IngredientDetails;

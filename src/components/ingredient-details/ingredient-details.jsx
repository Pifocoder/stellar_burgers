import React from "react";
import styles from "./ingredient-details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NutritionValue from "./nutrition-value/nutrition-value";
import ModalOverlay from "../modal-overlay/modal-overlay"
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

function IngredientDetails({ ingredient, show, close }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <ModalOverlay/>
      <section className={styles.ingredient_details}>
        <section className={styles.header + " mt-10 ml-10 mr-10"}>
          <h2 className={"text text_type_main-large " + styles.title}>
            Детали ингредиента
          </h2>
          <section className={styles.ingredient_details__cross} onClick={close}>
            <CloseIcon type="primary" />
          </section>
        </section>
        <section className={styles.body}>
          <img
            className={styles.image + " ml-5 mr-5"}
            src={ingredient.image_large}
          />
          <p className="text text_type_main-medium mt-4">{ingredient.name}</p>
          <section className={styles.ingredient__nutrition_values + " mt-8"}>
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
    </>
  );
}
export default IngredientDetails;

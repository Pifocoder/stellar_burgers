import styles from "./nutrition-value.module.css";
import React  from "react";

function NutritionValue({value, unit, unit_name}) {
    console.log(value, unit, unit_name)
  return (
    <section className={styles.nutrition_value}>
        <p className={"text text_type_main-default " + styles.nutrition_text}>{unit_name + ", " + unit}</p>
        <p className={"text text_type_digits-default " + styles.nutrition_text}>{value}</p>
    </section>
  );
}
export default NutritionValue;

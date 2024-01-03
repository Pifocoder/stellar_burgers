import styles from "./nutrition-value.module.css";
import React from "react";

import PropTypes from "prop-types";

function NutritionValue({ value, unit, unit_name }) {
  return (
    <section className={styles.nutrition_value}>
      <p className={"text text_type_main-default " + styles.nutrition_text}>
        {unit_name + ", " + unit}
      </p>
      <p className={"text text_type_digits-default " + styles.nutrition_text}>
        {value}
      </p>
    </section>
  );
}
NutritionValue.propTypes = {
  value : PropTypes.number.isRequired,
  unit : PropTypes.string.isRequired,
  unit_name : PropTypes.string.isRequired
};


export default NutritionValue;

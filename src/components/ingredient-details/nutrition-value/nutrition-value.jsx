import styles from "./nutrition-value.module.css";
import React from "react";

import PropTypes from "prop-types";
NutritionValue.propTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  unit_name: PropTypes.string.isRequired,
});

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
export default NutritionValue;

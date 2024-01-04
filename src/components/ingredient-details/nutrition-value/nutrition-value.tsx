import styles from "./nutrition-value.module.css";
import React, { FC } from "react";

import PropTypes from "prop-types";
type NutritionValueProps = {
  value: number;
  unit: string;
  unit_name: string;
};
export const NutritionValue: FC<NutritionValueProps> = ({
  value,
  unit,
  unit_name,
}) => {
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
};

export default NutritionValue;

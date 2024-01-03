import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./submit.module.css";

export default function Submit({ children }) {
  return (
    <div className={styles.button}>
      <Button htmlType="button" type="primary" size="medium">
        {children}
      </Button>
    </div>
  );
}

export { Submit };

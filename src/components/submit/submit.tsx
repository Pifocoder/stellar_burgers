import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import styles from "./submit.module.css";
interface SubmitProps {
  children: React.ReactNode;
}

export const Submit: FC<SubmitProps> = ({ children }) => {
  return (
    <div className={styles.button}>
      <Button htmlType="button" type="primary" size="medium">
        {children}
      </Button>
    </div>
  );
};

export default Submit;

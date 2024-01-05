import React, { FC } from "react";
import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tab.module.css";

import { TabStates } from "../burger-ingredients";
interface BurgerIngredientsTabProps {
  activeTab: TabStates;
}
export const BurgerIngredientsTab: FC<BurgerIngredientsTabProps> = ({
  activeTab,
}) => {
  return (
    <div className={styles.tab_container}>
      <Tab value="one" active={activeTab === 0} onClick={() => {}}>
        Булки
      </Tab>
      <Tab value="two" active={activeTab === 1} onClick={() => {}}>
        Соусы
      </Tab>
      <Tab value="three" active={activeTab === 2} onClick={() => {}}>
        Начинки
      </Tab>
    </div>
  );
};

export default BurgerIngredientsTab;

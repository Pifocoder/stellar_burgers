import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsTab from "./tab/tab";
import IngredientsList from "./ingredients-list/ingredients-list";

import ingredientType from "../../utils/type";
import { useState } from "react";

import { getApiIngredients } from "../../services/actions/ingredientsList";
import { closeIngredientDetails } from "../../services/actions/ingredientDetails";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/store";
import { RootState } from "../../services/reducers";
export type TabStates = number
const boundaryScrolls = [0, 250, 775];
function BurgerIngredients() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = React.useState<TabStates>(0);

  const ingredientsList = useAppSelector(
    (store) => store.ingredientsList
  );
  const handleScroll = () => {
    let [minDist, border] : [number, TabStates] = [scrollRef.current?.scrollTop ?? 0, 0];
    for (let index = 0; index < boundaryScrolls.length; ++index) {
      if (
        Math.abs((scrollRef.current?.scrollTop ?? 0) - boundaryScrolls[index]) <
        minDist
      ) {
        minDist = Math.abs(
          (scrollRef.current?.scrollTop ?? 0) - boundaryScrolls[index]
        );
        border = index;
      }
    }
    setActiveTab(border);
  };
  React.useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, [ingredientsList.getIngredientsSuccess]);

  const ingredientDetails = useAppSelector(
    (store) => store.ingredientDetails
  );
  if (ingredientsList.getIngredientsFailed) {
    return <p>Ошибка: {ingredientsList.error}</p>;
  } else if (!ingredientsList.getIngredientsSuccess) {
    return <p>Загрузка</p>;
  } else {
    return (
      <>
        <section className={styles.burger_ingredients}>
          <section className="mt-10">
            <h2 className="text text_type_main-large">Соберите бургер</h2>
          </section>
          <section className="mt-5">
            <BurgerIngredientsTab activeTab={activeTab} />
          </section>
          <section
            className={"mt-10 " + styles.types_conteiner}
            ref={scrollRef}
          >
            <IngredientsList title="Булки" ingredientsType="bun" />
            <IngredientsList title="Соусы" ingredientsType="sauce" />
            <IngredientsList title="Начинки" ingredientsType="main" />
          </section>
        </section>
      </>
    );
  }
}

export default BurgerIngredients;

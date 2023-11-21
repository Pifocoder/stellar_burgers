import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsTab from "./tab/tab";
import IngredientsList from "./ingredients-list/ingredients-list";
import PropTypes from "prop-types";
import ingredientType from "../../utils/type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getApiIngredients } from "../../services/actions/ingredientsList";
import { closeIngredientDetails } from "../../services/actions/ingredientDetails";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

const boundaryScrolls = [0, 250, 775];
function BurgerIngredients() {
  const scrollRef = useRef(window);
  const [activeTab, setActiveTab] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getApiIngredients());
  }, []);

  const ingredientsList= useSelector(
    (store) => store.ingredientsList
  );

  const handleScroll = () => {
    let [minDist, border] = [scrollRef.current.scrollTop, 0];
    for (let index = 0; index < boundaryScrolls.length; ++index) {
      if (
        Math.abs(scrollRef.current.scrollTop - boundaryScrolls[index]) < minDist
      ) {
        minDist = Math.abs(
          scrollRef.current.scrollTop - boundaryScrolls[index]
        );
        border = index;
      }
    }
    setActiveTab(border);
  };
  React.useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, [ingredientsList.getIngredientsSuccess]);

  const ingredientDetails = useSelector((store) => store.ingredientDetails);
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
        {ingredientDetails.open && (
          <Modal closeModal={closeIngredientDetails}>
            <IngredientDetails />
          </Modal>
        )}
      </>
    );
  }
}

export default BurgerIngredients;

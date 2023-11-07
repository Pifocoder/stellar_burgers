import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsTab from "./tab/tab";
import IngredientsList from "./ingredients-list/ingredients-list";
import PropTypes from "prop-types";
import ingredientType from "../../utils/type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiUrlIngredients } from "../../constants";
import { setIngredients } from "../../services/actions/ingredients_list";
import { closeIngredientDetails } from "../../services/actions/ingredient_details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

const boundaryScrolls = [0, 250, 775]
function BurgerIngredients() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(window)
  const [activeTab, setActiveTab] = React.useState(0);
  
  React.useEffect(() => {
    fetch(apiUrlIngredients)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(`Ошибка ${resp.status}`);
      })
      .then((data) => {
        dispatch(setIngredients(data.data));
        setIsLoaded(true);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);
  
  const handleScroll = () => {
    let [minDist, border] = [scrollRef.current.scrollTop, 0];
    for (let index = 0; index < boundaryScrolls.length; ++index) {
      if (Math.abs(scrollRef.current.scrollTop - boundaryScrolls[index]) < minDist) {
        minDist = Math.abs(scrollRef.current.scrollTop - boundaryScrolls[index]);
        border = index;
      }
    }
    setActiveTab(border)
  };
  React.useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, [isLoaded])

  const ingredientDetails = useSelector((store) => store.ingredientDetails);
  if (error != null) {
    return <p>Ошибка: {error}</p>;
  } else if (!isLoaded) {
    return <p>Загрузка</p>;
  } else {
    return (
      <>
        <section className={styles.burger_ingredients}>
          <section className="mt-10">
            <h2 className="text text_type_main-large">Соберите бургер</h2>
          </section>
          <section className="mt-5">
            <BurgerIngredientsTab activeTab={activeTab}/>
          </section>
          <section className={"mt-10 " + styles.types_conteiner} ref={scrollRef}>
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

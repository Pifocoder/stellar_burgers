import React from "react";
import styles from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../ingredient-details/ingredient-details";

function Card({ ingredient }) {
  const [showIngredientDetails, setShowIngredientDetails] =
    React.useState(false);
  const closeIngredientDetails = () => {
    setShowIngredientDetails(false);
  };
  return (
    <>
      <section
        className={styles.card}
        onClick={() => setShowIngredientDetails(true)}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} />
        <section className={styles.card_price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </section>
        <p className={"text text_type_main-default " + styles.card__title}>
          {ingredient.name}
        </p>
      </section>
      <Modal>
        <IngredientDetails
          ingredient={ingredient}
          show={showIngredientDetails}
          close={closeIngredientDetails}
        />
      </Modal>
    </>
  );
}

export default Card;

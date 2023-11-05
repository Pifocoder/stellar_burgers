import React from "react";
import styles from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../ingredient-details/ingredient-details";
import { useModal } from "../../../../hooks/useModal";
import PropTypes from "prop-types";
import ingredientType from "../../../../utils/type";

function Card({ ingredient }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section
        className={styles.card}
        onClick={() => openModal()}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name} />
        <section className={styles.card_price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </section>
        <p className={"text text_type_main-default " + styles.card__title}>
          {ingredient.name}
        </p>
      </section>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <IngredientDetails
            ingredient={ingredient}
          />
        </Modal>
      )}
    </>
  );
}
Card.propTypes = {
  ingredient: ingredientType
};
export default Card;

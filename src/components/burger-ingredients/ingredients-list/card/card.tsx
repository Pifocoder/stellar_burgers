import React, { FC } from "react";
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
import { openIngredientDetails } from "../../../../services/actions/ingredientDetails";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
interface CardProps {
  ingredient: ingredientType;
  count: number;
}
export const Card: FC<CardProps> = ({ ingredient, count }) => {
  const dispatch = useDispatch();
  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: { ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <section ref={drag} className={styles.card}>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}

      <img src={ingredient.image} alt={ingredient.name} />
      <section className={styles.card_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </section>
      <p className={"text text_type_main-default " + styles.card__title}>
        {ingredient.name}
      </p>
    </section>
  );
};

export default Card;

import React, { FC } from "react";
import styles from "./middle-ingredient.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientType from "../../../utils/type";
import { moveIngredient, removeIngredient } from "../../../services/actions/constructorIngredientsList";

import { useDrop, useDrag } from "react-dnd";
import { useRef } from "react";
import { constructorIngredient } from "../../../services/reducers/constructorIngredientsList";
import { useAppDispatch } from "../../../hooks/store";
interface MiddleIngredientProps {
  ingredient : ingredientType,
  id : number
}

export const MiddleIngredient : FC<MiddleIngredientProps> = ({ ingredient, id }) => {
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "constructor_ingredient",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ isHover }, drop] = useDrop({
    accept: "constructor_ingredient",
    collect: (monitor) => ({
      isHover : monitor.isOver()
    }),

    drop: (item : constructorIngredient) => {
      dispatch(moveIngredient(item.id, id))
    },
  })

  const ref = useRef<HTMLLIElement>(null)
  drag(drop(ref))
  const display = isDragging ? styles.display : ""
  const hover = isHover ? styles.hover : ""
  return (
    
    <section ref={ref} className={styles.ingredient + " " + display + " " + hover}>
      <DragIcon type="primary" />
      <ConstructorElement
        handleClose={() =>
          dispatch(removeIngredient(ingredient, id))
        }
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </section>
  );
}

export default MiddleIngredient;

import React from "react";
import styles from "./middle-ingredient.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientType from "../../../utils/type";
import { moveIngredient, removeIngredient } from "../../../services/actions/constructorIngredientsList";
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { useRef } from "react";
function MiddleIngredient({ ingredient, id }) {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    type: "constructor_ingredient",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ isHover }, dropRef] = useDrop({
    accept: "constructor_ingredient",
    collect: (monitor) => ({
      isHover : monitor.isOver()
    }),

    drop: (item) => {
      dispatch(moveIngredient(item.id, id))
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  const display = isDragging ? styles.display : ""
  const hover = isHover ? styles.hover : ""
  return (
    
    <section ref={dragDropRef} className={styles.ingredient + " " + display + " " + hover}>
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
MiddleIngredient.propTypes = {
  ingredient: ingredientType,
};
export default MiddleIngredient;

import React, { FC } from "react";
import styles from "./ingredients-list.module.css";
import Card from "./card/card";
import PropTypes from "prop-types";
import ingredientType from "../../../utils/type";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../services/reducers";

interface IngredientsListProps {
  title: string;
  ingredientsType: string;
}
export const IngredientsList: FC<IngredientsListProps> = ({
  title,
  ingredientsType,
}) => {
  const { ingredients } = useAppSelector(
    (store: RootState) => store.ingredientsList
  );
  const constructorIngredients = useAppSelector(
    (store: RootState) => store.constructorIngredients
  );
  const location = useLocation();
  return (
    <section>
      <h3 className="text text_type_main-medium">{title}</h3>
      <section className={"mt-6 ml-4 " + styles.ingredients_conteiner}>
        {ingredients.map(
          (ingredient) =>
            ingredient.type === ingredientsType && (
              <Link
                to={"/ingredients/" + ingredient._id}
                state={{ id: ingredient._id, background: location }}
                key={ingredient._id}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Card
                  ingredient={ingredient}
                  count={constructorIngredients.counts.get(ingredient._id) ?? 0}
                />
              </Link>
            )
        )}
      </section>
    </section>
  );
};

export default IngredientsList;

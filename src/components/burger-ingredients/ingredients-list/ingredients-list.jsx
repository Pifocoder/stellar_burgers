import React from "react";
import styles from "./ingredients-list.module.css";
import Card from "./card/card";
import PropTypes from "prop-types";
import ingredientType from "../../../utils/type";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
IngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredientsType: PropTypes.string.isRequired,
};
function IngredientsList({ title, ingredientsType }) {
  const { ingredients } = useSelector((store) => store.ingredientsList);
  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients
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
                style={{ textDecoration: 'inherit', color: 'inherit' }}
              >
                <Card
                  ingredient={ingredient}
                  count={
                    typeof constructorIngredients.counts.get(ingredient._id) ===
                    "undefined"
                      ? 0
                      : constructorIngredients.counts.get(ingredient._id)
                  }
                />
              </Link>
            )
        )}
      </section>
    </section>
  );
}

export default IngredientsList;


import { useLocation, useNavigate } from "react-router-dom";
import { closeIngredientDetails } from "../../services/actions/ingredientDetails";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredient.module.css";
export default function IngredientPage() {
  return (
    <section className={styles.ingredient_page}>
      <div>
        <h2
          className={
            "text text_type_main-large pt-10 pl-10 pr-10 " + styles.title
          }
        >
          Детали ингредиента
        </h2>
        <IngredientDetails />
      </div>
    </section>
  );
}

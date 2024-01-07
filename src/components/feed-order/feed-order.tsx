import React, { FC } from "react";
import styles from "./feed-order.module.css";
import IngredientType from "../../utils/type";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type FeedOrderProps = {
  id: string;
  date: Date;
  title: string;
  status?: string;
  ingredients: Array<IngredientType>;
  price: number;
};
export const FeedOrder: FC<FeedOrderProps> = ({
  id,
  date,
  title,
  status,
  ingredients,
  price,
}) => {
  return (
    <section className={styles.order + " pt-6 pb-6 pl-6 pr-6"}>
      <section className={styles.order__id}>
        <p className="text text_type_digits-default">{id}</p>
        <p className="text text_type_main-default">{date.toDateString()}</p>
      </section>
      <h2 className="text text_type_main-medium">{title}</h2>
      {status === "created" && (
        <p className={styles.status_default + " text text_type_main-default"}>
          Создан
        </p>
      )}
      {status === "pending" && (
        <p className={styles.status_default + " text text_type_main-default"}>
          Готовится
        </p>
      )}
      {status === "done" && (
        <p className={styles.status_complete + " text text_type_main-default"}>
          Выполнен
        </p>
      )}
      <section className={styles.order__info}>
        <section className={styles.order__ingredients}>
          {ingredients.slice(0, 6).map((item, index) => {
            return (
              <img
                className={styles.order_ingredient}
                src={item.image}
                style={{ zIndex: `${0 - index}` }}
                key={index}
              />
            );
          })}
          {ingredients.length - 6 > 0 && (
            <div className={styles.order__ingredients_count}>
              <p className="text text_type_digits-default ">
                +{ingredients.length - 6}
              </p>
            </div>
          )}
        </section>
        <section className={styles.order_price}>
          <p className="text text_type_main-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </section>
      </section>
    </section>
  );
};

export default FeedOrder;

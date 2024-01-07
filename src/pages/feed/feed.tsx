import FeedOrder from "../../components/feed-order/feed-order";
import { useAppSelector } from "../../hooks/store";
import styles from "./feed.module.css";
export default function FeedPage() {
  let ingredients = useAppSelector((store) => store.ingredientsList)
  return (
    <section className={styles.feed_page}>
      <h2 className="text text_type_main-large mt-10 mb-6">Лента заказов</h2>
      <main className={styles.feed_data}>
        <section className={styles.feed__orders}>
          <FeedOrder id={"#123"} date={new Date()} title={"qwe"} price={123} ingredients={ingredients.ingredients}/>
          <FeedOrder id={"#123"} date={new Date()} title={"qwe"} price={123} ingredients={ingredients.ingredients}/>
          <FeedOrder id={"#123"} date={new Date()} title={"qwe"} price={123} ingredients={ingredients.ingredients}/>
          <FeedOrder id={"#123"} date={new Date()} title={"qwe"} price={123} ingredients={ingredients.ingredients}/>
        </section>
        <section className={styles.feed__metrics}>
          <section className={styles.feed__status}>
            <section className={styles.feed__ready}>
              <h3 className="text text_type_main-medium pb-6">Готовы:</h3>
              <section className={styles.feed__status__orders}>
                <p
                  className={
                    "text text_type_digits-default " +
                    styles.feed__ready__orders_id
                  }
                >
                  123321
                </p>
                <p
                  className={
                    "text text_type_digits-default " +
                    styles.feed__ready__orders_id
                  }
                >
                  123321
                </p>
                <p
                  className={
                    "text text_type_digits-default " +
                    styles.feed__ready__orders_id
                  }
                >
                  123321
                </p>
              </section>
            </section>
            <section className={styles.feed__pipeline}>
              <h3 className="text text_type_main-medium  pb-6">В работе:</h3>
              <section className={styles.feed__status__orders}>
                <p className={"text text_type_digits-default"}>123321</p>
                <p className={"text text_type_digits-default"}>123321</p>
                <p className={"text text_type_digits-default"}>123321</p>
                <p className={"text text_type_digits-default"}>123321</p>
                <p className={"text text_type_digits-default"}>123321</p>
                <p className={"text text_type_digits-default"}>123321</p>
              </section>
            </section>
          </section>
          <section className={styles.feed__total}>
            <h3 className="text text_type_main-medium">
              Выполнено за все время:
            </h3>
            <p
              className={
                "text text_type_digits-large " + styles.feed__total__value
              }
            >
              123
            </p>
          </section>
          <section className={styles.feed__total}>
            <h3 className="text text_type_main-medium">
              Выполнено за сегодня:
            </h3>
            <p
              className={
                "text text_type_digits-large " + styles.feed__total__value
              }
            >
              12
            </p>
          </section>
        </section>
      </main>
    </section>
  );
}

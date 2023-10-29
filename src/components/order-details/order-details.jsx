import styles from "./order-details.module.css";
import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ReactComponent as OrderDone } from "../../images/done.svg";
function OrderDetails({ show, close }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className={styles.overlay}></div>
      <section className={styles.order_modal}>
        <section className={styles.order_modal__cross} onClick={close}>
          <CloseIcon type="primary" />
        </section>
        <p
          className={
            "text text_type_digits-large mt-30 " + styles.order_modal__id
          }
        >
          12345
        </p>
        <p className="text text_type_main-medium mt-8">индетификатор заказа</p>
        <div className="mt-15">
          <OrderDone />
        </div>
        <p className="text text_type_main-small mt-8">
          Ваш заказ начали готовить
        </p>
        <p
          className={
            "text text_type_main-small mt-2 " +
            styles.order_modal__text_secondary
          }
        >
          Дождитесь готовности на орбитальной станции
        </p>
      </section>
    </>
  );
}
export default OrderDetails;

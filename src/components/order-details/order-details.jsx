import styles from "./order-details.module.css";
import React from "react";
import { ReactComponent as OrderDone } from "../../images/done.svg";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function OrderDetails() {
  const order = useSelector((store) => store.order);
  return (
    <section className={styles.order_modal}>
      <p
        className={
          "text text_type_digits-large pt-30 " + styles.order_modal__id
        }
      >
        {order.id}
      </p>
      <p className="text text_type_main-medium mt-8">индетификатор заказа</p>
      <div className="mt-15">
        <OrderDone />
      </div>
      <p className="text text_type_main-small mt-8">{order.status}</p>
      <p
        className={
          "text text_type_main-small mt-2 pb-30 " +
          styles.order_modal__text_secondary
        }
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}
export default OrderDetails;

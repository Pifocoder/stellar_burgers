import React, { FC, useState } from "react";
import styles from "./order-price.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface OrderPriceProps {
  orderPrice: number;
}
export const OrderPrice: FC<OrderPriceProps> = ({ orderPrice }) => {
  return (
    <section className={styles.order_price}>
      <p className="text text_type_digits-medium">{orderPrice}</p>
      <CurrencyIcon type="primary" />
    </section>
  );
};
export default OrderPrice;

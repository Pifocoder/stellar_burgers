import React, { useState } from "react";
import styles from "./order-price.module.css";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
OrderPrice.propTypes = {
  orderPrice: PropTypes.number.isRequired,
};
function OrderPrice({ orderPrice }) {
  return (
    <section className={styles.order_price}>
        <p className="text text_type_digits-medium">{ orderPrice }</p>
        <CurrencyIcon type="primary" />
    </section>
  );
}

export default OrderPrice;

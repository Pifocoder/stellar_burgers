import React, { useState } from "react";
import styles from "./order-submiter.module.css";
import OrderPrice from "../order-price/order-price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderModal from "../order-details/order-details";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import constructorIngredients from "../../services/reducers/constructor_ingredients_list";
import { useDispatch, useSelector } from "react-redux";
import {
  makeOrder,
  openOrderModal,
  closeOrderModal,
} from "../../services/actions/order";
import { apiUrlOrders } from "../../constants";
function OrderSubmiter() {
  const dispatch = useDispatch();

  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients
  );
  const data = {
    ingredients : constructorIngredients.ingredients.map((item) => item.ingredient._id)
  }

  const order = useSelector((store) => store.order);
  
  const submit = () => {
    fetch(apiUrlOrders, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(`Ошибка ${resp.status}`);
      })
      .then((data) => {
        dispatch(makeOrder(data.order.number));
        dispatch(openOrderModal());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className={styles.order_submiter}>
      <OrderPrice orderPrice={constructorIngredients.price} />
      <Button htmlType="button" type="primary" size="large" onClick={submit}>
        Оформить заказ
      </Button>

      {order.open_modal && (
        <Modal closeModal={closeOrderModal}>
          <OrderModal />
        </Modal>
      )}
    </section>
  );
}

export default OrderSubmiter;

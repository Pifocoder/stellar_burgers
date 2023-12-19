import React, { useState } from "react";
import styles from "./order-submiter.module.css";
import OrderPrice from "../order-price/order-price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderModal from "../order-details/order-details";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import constructorIngredients from "../../services/reducers/constructorIngredientsList";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder, closeOrderModal } from "../../services/actions/order";
import { useNavigate } from "react-router-dom";

function OrderSubmiter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients
  );
  const data = {
    ingredients: constructorIngredients.ingredients.map(
      (item) => item.ingredient._id
    ),
  };

  const order = useSelector((store) => store.order);

  return (
    <section className={styles.order_submiter}>
      <OrderPrice orderPrice={constructorIngredients.price} />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => {
          if (user.isAuthenticated) {
            dispatch(makeOrder(data));
          } else {
            navigate('/login')
          }
        }}
      >
        Оформить заказ
      </Button>

      {order.open_modal && (
        <Modal closeModal={closeOrderModal} title="">
          <OrderModal />
        </Modal>
      )}
    </section>
  );
}

export default OrderSubmiter;

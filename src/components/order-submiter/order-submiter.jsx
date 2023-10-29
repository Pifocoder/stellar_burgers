import React, { useState } from "react";
import styles from "./order-submiter.module.css";
import OrderPrice from "../order-price/order-price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderModal from "../order-details/order-details";
import Modal from "../modal/modal";
function OrderSubmiter({ orderPrice }) {
  const [showOrderModal, setShowOrderModal] = React.useState(false);

  const closeOrderDetails = () => {
    setShowOrderModal(false)
  }
  return (
    <section className={styles.order_submiter}>
      <OrderPrice orderPrice={orderPrice} />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => setShowOrderModal(true)}
      >
        Оформить заказ
      </Button>
        <Modal>
          <OrderModal show={showOrderModal} close={closeOrderDetails}/>
        </Modal>
    </section>
  );
}

export default OrderSubmiter;

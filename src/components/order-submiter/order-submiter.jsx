import React, { useState } from "react";
import styles from "./order-submiter.module.css";
import OrderPrice from "../order-price/order-price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderModal from "../order-details/order-details";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import { useModal } from "../../hooks/useModal";

function OrderSubmiter({ orderPrice }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.order_submiter}>
      <OrderPrice orderPrice={orderPrice} />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => openModal()}
      >
        Оформить заказ
      </Button>
      
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <OrderModal />
        </Modal>
      )}
    </section>
  );
}
OrderSubmiter.propTypes = {
  orderPrice: PropTypes.number.isRequired,
};
export default OrderSubmiter;

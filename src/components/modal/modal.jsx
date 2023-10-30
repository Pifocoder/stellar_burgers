import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
Modal.propTypes = {
  close_modal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const modalRoot = document.getElementById("react-modals");
function Modal({ close_modal, children }) {
  const modalRef = React.useRef(null);
  const handleClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close_modal();
    }
  };
  const handleESC = (event) => {
    if (event.code == "Escape") {
      close_modal();
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleESC);
  }, []);
  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <section className={styles.modal} ref={modalRef}>
        <section className={styles.modal__body}>
          <div className={styles.modal__cross}>
            <CloseIcon type="primary" onClick={close_modal} />
          </div>
          <>{children}</>
        </section>
      </section>
    </>,
    modalRoot
  );
}
export default Modal;

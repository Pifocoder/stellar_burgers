import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { useDispatch } from "react-redux";

const modalRoot = document.getElementById("react-modals");

function Modal({ closeModal, children }) {
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(closeModal());
  }
  React.useEffect(() => {
    const handleClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closePopup()
      }
    };
    const handleESC = (event) => {
      if (event.code == "Escape") {
        closePopup()
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleESC);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleESC);
    };
  }, []);
  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <section className={styles.modal} ref={modalRef}>
        <section className={styles.modal__body}>
          <div className={styles.modal__cross}>
            <CloseIcon type="primary" onClick={closePopup} />
          </div>
          <>{children}</>
        </section>
      </section>
    </>,
    modalRoot
  );
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default Modal;

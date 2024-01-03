import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const modalRoot = document.getElementById("react-modals");

function Modal({ title, closeModal, children }) {
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = (event) => {
    event.stopPropagation();
    if (typeof closeModal === 'undefined') {
      navigate(-1);
    } else {
      dispatch(closeModal());
    }
  };
  React.useEffect(() => {
    const handleClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal(event);
      }
    };
    const handleESC = (event) => {
      if (event.code == "Escape") {
        handleCloseModal(event);
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
            <CloseIcon type="primary" onClick={handleCloseModal} />
          </div>

          <>
            {title != "" && (
              <h2
                className={
                  "text text_type_main-large pt-10 pl-10 pr-10 " + styles.title
                }
              >
                {title}
              </h2>
            )}
            {children}
          </>
        </section>
      </section>
    </>,
    modalRoot
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  children: PropTypes.element.isRequired,
};
export default Modal;

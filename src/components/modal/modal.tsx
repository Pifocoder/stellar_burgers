import React, { FC } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./modal.module.css";

import { useNavigate } from "react-router-dom";
import { Action } from "redux";
import { useAppDispatch } from "../../hooks/store";

const modalRoot = document.getElementById("react-modals");
interface ModalProps {
  title: string;
  closeModal?: (() => Action);
  children: React.ReactElement;
}
export const Modal: FC<ModalProps> = ({ title, closeModal, children }) => {
  const modalRef = React.useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (typeof closeModal === "undefined") {
      navigate(-1);
    } else {
      dispatch(closeModal());
    }
  };
  React.useEffect(() => {
    const handleClick = (event : MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as HTMLElement)) {
        handleCloseModal();
      }
    };
    const handleESC = (event : KeyboardEvent) => {
      if (event.code == "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleESC);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleESC);
    };
  }, []);
  if (modalRoot)
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
                    "text text_type_main-large pt-10 pl-10 pr-10 " +
                    styles.title
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
  else {
    return <></>;
  }
};

export default Modal;

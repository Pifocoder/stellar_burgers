import React from "react";
import ReactDOM from "react-dom"
const modalRoot = document.getElementById("react-modals");
function Modal(props) {

    return (
        ReactDOM.createPortal(props.children, modalRoot)
    );
}
export default Modal;
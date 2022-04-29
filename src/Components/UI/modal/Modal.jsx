import { React } from "react";
import "./Modal.scss";

const Modal = ({ header, active, setActive, ...props }) => {
  return (
    <div className={active ? "modal modal--open" : "modal"} onClick={setActive}>
      <div
        className="modal__inner"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={
            active ? "modal__content modal__content--open" : "modal__content"
          }
        >
          <div className="modal__header">
            <h2 className="modal__title">Авторизация</h2>
            <div className="modal__close" onClick={setActive}>
              <span className="material-icons">close</span>
            </div>
          </div>
          <div className="modal__body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import {React} from "react";
import s from "./Modal.module.scss";

const Modal = ({header, active, setActive, text, ...props}) => {
    return (
        <div className={active ? s["modal"] + " " + s["modal--open"] : s["modal"]} onClick={setActive}>
            <div
                className={s["modal__inner"]}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={s["modal__content"]}>
                    <div className={s["modal__header"]}>
                        <h2 className={s["modal__title"]}>{text}</h2>
                        <div className={s["modal__close"]} onClick={setActive}>
                            <span className="material-icons">close</span>
                        </div>
                    </div>
                    <div className={s["modal__body"]}>{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

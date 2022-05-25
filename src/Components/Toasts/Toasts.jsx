import React from 'react';
import s from "./Toasts.module.scss";
import {useSelector} from "react-redux";
import Toast from "../UI/Toast/Toast";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Toasts = () => {
    const toasts = useSelector((state => state.toast.toasts))

    return (
        <div className={s["toasts"]}>
            <div className={s["toasts__list"]}>
                <TransitionGroup>
                    {toasts.map(toast =>
                        <CSSTransition
                            key={toast.id}
                            timeout={500}
                            classNames="toastTransition"
                        >
                            <Toast type={toast.type} message={toast.message}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Toasts;
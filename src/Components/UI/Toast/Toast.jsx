import React from 'react';
import s from "./Toast.module.scss";

const Toast = (props) => {
    return (
        <div className={s["toast"] + " " + s[`toast--${props.type}`]}>
                <span className="toast__message">
                    {props.message}
                </span>
        </div>
    );
};

export default Toast;
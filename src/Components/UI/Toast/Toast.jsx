import React from 'react';
import "./Toast.scss";

const Toast = (props) => {
    return (
        <div className={`toast toast--${props.type}`}>
                <span className="toast__message">
                    {props.message}
                </span>
        </div>
    );
};

export default Toast;
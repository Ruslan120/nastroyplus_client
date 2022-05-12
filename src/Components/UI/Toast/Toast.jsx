import React from 'react';
import "./Toast.scss";

const Toast = (props) => {
    return (
        <div className={`toast toast--${props.type}`}>
                <span className="toast__message">
                     <i className="material-icons">error_outline</i>
                    {props.message}
                </span>
        </div>
    );
};

export default Toast;
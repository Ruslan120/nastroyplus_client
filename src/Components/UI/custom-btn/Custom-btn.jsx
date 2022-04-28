import React from "react";
import "./Custom-btn.scss";

function CustomBtn(props) {
    return (
        <button className="custom__btn" {...props}>{props.children}</button>
    );
}

export default CustomBtn;

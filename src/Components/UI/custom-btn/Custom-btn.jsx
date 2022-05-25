import React from "react";
import s from "./Custom-btn.module.scss";

function CustomBtn(props) {
    return (
        <button className={s["custom__btn"]} {...props}>{props.children}</button>
    );
}

export default CustomBtn;

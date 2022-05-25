import React from "react";
import s from "./Favorite-btn.module.scss";

function FavoriteBtn(props) {
    return (
        <button className={s["favorite__btn"]} {...props}>{props.children}</button>
    );
}

export default FavoriteBtn;

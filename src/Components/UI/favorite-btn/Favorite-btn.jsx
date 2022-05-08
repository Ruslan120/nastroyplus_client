import React from "react";
import "./Favorite-btn.scss";

function FavoriteBtn(props) {
    return (
        <button className="favorite__btn" {...props}>{props.children}</button>
    );
}

export default FavoriteBtn;

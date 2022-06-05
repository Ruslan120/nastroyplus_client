import React from 'react';
import s from "./MenuLink.module.scss";

const MenuLink = ({iconName, text, ...props}) => {
    return (
        <div className={s["menu-link"]} {...props}>
            <div className={s["menu-link__head"]}>
                <i className={"material-icons" + " " + s["menu-link__icon"]}>{iconName}</i>
                <span className={s["menu-link__text"]}>{text}</span>
            </div>
        </div>
    );
};

export default MenuLink;
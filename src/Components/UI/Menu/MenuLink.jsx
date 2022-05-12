import React from 'react';
import "./MenuLink.scss";

const MenuLink = ({iconName, text, ...props}) => {
    return (
            <div className="menu-link" {...props}>
                <div className="menu-link__head">
                    <i className="material-icons menu-link__icon">{iconName}</i>
                    <span className="menu-link__text">{text}</span>
                </div>
            </div>
    );
};

export default MenuLink;
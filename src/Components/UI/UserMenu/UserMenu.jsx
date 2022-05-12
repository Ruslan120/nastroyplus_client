import React, {useState} from 'react';
import './UserMenu.scss';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../redux/actions";
import {useNavigate} from "react-router-dom";

const UserMenu = () => {
    const user = useSelector(state=>state.app.user)
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(logoutAction());
    };
    const navigate = useNavigate();
    return (

        <div className="user-menu">
            <div className="user-menu__head">
                <i className="material-icons user-menu__icon">person</i>
                <span className="user-menu__text">Профиль</span>
            </div>
            <div className="user-menu__dropdown">
                <div className="user-dropdown">
                    <div className="user-dropdown__data" >
                        <span>{user.email}</span>
                    </div>
                    <div className="user-dropdown__items">
                        <div className="user-dropdown__item" onClick={event => navigate('/basket')}>
                            <i className="material-icons user-dropdown__icon">add_shopping_cart</i>
                            <span>Корзина</span>
                        </div>
                        <div className="user-dropdown__item" onClick={event => navigate('/favorite')}>
                            <i className="material-icons user-dropdown__icon">favorite_border</i>
                            <span>Избранное</span>
                        </div>
                    </div>
                    <div className="user-dropdown__logout">
                        <span onClick={handlerLogout}>Выйти</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserMenu;
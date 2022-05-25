import React, {useState} from 'react';
import s from './UserMenu.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../redux/actions";
import {useNavigate} from "react-router-dom";

const UserMenu = () => {
    const user = useSelector(state => state.app.user)
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(logoutAction());
    };
    const navigate = useNavigate();
    return (

        <div className={s["user-menu"]}>
            <div className={s["user-menu__head"]}>
                <i className={"material-icons" + " " + s["user-menu__icon"]}>person</i>
                <span className={s["user-menu__text"]}>Профиль</span>
            </div>
            <div className={s["user-menu__dropdown"]}>
                <div className={s["user-dropdown"]}>
                    <div className={s["user-dropdown__data"]}>
                        <span>{user.email}</span>
                    </div>
                    <div className={s["user-dropdown__items"]}>
                        <div className={s["user-dropdown__item"]} onClick={event => navigate('/basket')}>
                            <i className={"material-icons" + " " + s["user-dropdown__icon"]}>add_shopping_cart</i>
                            <span>Корзина</span>
                        </div>
                        <div className={s["user-dropdown__item"]} onClick={event => navigate('/favorite')}>
                            <i className={"material-icons" + " " + s["user-dropdown__icon"]}>favorite_border</i>
                            <span>Избранное</span>
                        </div>
                    </div>
                    <div className={s["user-dropdown__logout"]}>
                        <span onClick={handlerLogout}>Выйти</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserMenu;
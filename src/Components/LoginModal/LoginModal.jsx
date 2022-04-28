import {React, useState} from 'react';
import "./LoginModal.scss";
import Blur from "../UI/Blur/Blur";
import LoginInner from "./LoginInner/LoginInner";
import {useDispatch, useSelector} from "react-redux";
import {setLoginForm} from "../../redux/actions";
const LoginModal = () => {

    const loginActive = useSelector((state => state.loginForm.isOpen));
    const dispatch = useDispatch();

    const handlerSetIsLogin = (e) => {
        e.stopPropagation();
        dispatch(setLoginForm(!loginActive));
        console.log("gfdg")
    }

    return (
            <LoginInner active={loginActive} setActive={handlerSetIsLogin}/>
    );
};

export default LoginModal;
import {React,} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../UI/modal/Modal";
import LoginForm from "./LoginForm/LoginForm";
import {setIsOpen} from "../../redux/reducers/loginFormReducer";

const LoginModal = () => {
    const loginActive = useSelector((state) => state.loginForm.isOpen);
    const dispatch = useDispatch();

    const handlerSetIsLogin = () => {
        dispatch(setIsOpen(false));
    };

    return (
        <Modal active={loginActive} setActive={handlerSetIsLogin} text={"Авторизация"}>
            <LoginForm active={loginActive} close={handlerSetIsLogin}/>
        </Modal>
    );
};

export default LoginModal;

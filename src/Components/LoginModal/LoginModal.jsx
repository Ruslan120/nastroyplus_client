import { React, useState } from "react";
import "./LoginModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLoginForm } from "../../redux/actions";
import Modal from "../UI/modal/Modal";
import LoginForm from "./LoginForm/LoginForm";
const LoginModal = () => {
  const loginActive = useSelector((state) => state.loginForm.isOpen);
  const dispatch = useDispatch();

  const handlerSetIsLogin = () => {
      console.log("sdfs")
    dispatch(setLoginForm(false));
  };

  return (
    <Modal active={loginActive} setActive={handlerSetIsLogin}>
      <LoginForm active={loginActive} setActive={handlerSetIsLogin} />
    </Modal>
  );
};

export default LoginModal;

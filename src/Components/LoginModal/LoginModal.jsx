import { React,} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginForm } from "../../redux/actions";
import Modal from "../UI/modal/Modal";
import LoginForm from "./LoginForm/LoginForm";
const LoginModal = () => {
  const loginActive = useSelector((state) => state.loginForm.isOpen);
  const dispatch = useDispatch();

  const handlerSetIsLogin = () => {
    dispatch(setLoginForm(false));
  };

  return (
    <Modal active={loginActive} setActive={handlerSetIsLogin} text={"Авторизация"}>
      <LoginForm active={loginActive} close={handlerSetIsLogin} />
    </Modal>
  );
};

export default LoginModal;

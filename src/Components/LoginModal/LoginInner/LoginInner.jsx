import {React} from 'react';
import "./LoginInner.scss";
import LoginForm from "../LoginForm/LoginForm";


const LoginInner = ({active, setActive}) => {
    return (
        <div className={ active ? "login login--open" : "login"} onClick={setActive}>
            <div className="login__inner" onClick={event => event.stopPropagation()}>
                <div className={ active ? "login__content login__content--open" : "login__content"}>
                    <div className="login__header">
                        <h2 className="login__title">Авторизация</h2>
                        <div className="login__close" onClick={setActive}>
                            <span className="material-icons">close</span>
                        </div>
                    </div>
                    <div className="login__body">
                        <LoginForm active = {active}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginInner;
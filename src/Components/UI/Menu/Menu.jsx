import { React, useState } from "react";
import "./Menu.scss";
import MobileMenu from "../mobile-menu/Mobile-menu";
import Blur from "../Blur/Blur";
import { useDispatch, useSelector } from "react-redux";
import {
  addToastTime,
  logoutAction,
  setLoginForm,
} from "../../../redux/actions";

const Menu = () => {
  const isAuth = useSelector((state) => state.app.isAuth);
  const [menuActive, setMenuActive] = useState(false);
  const dispatch = useDispatch();

  const handlerTost = () => {
    dispatch(addToastTime("error", "Вы не зарегистрированы"));
  };
  const handlerLogin = () => {
    dispatch(setLoginForm(true));
  };
  const handlerBlur = () => {
    setMenuActive((prev) => !prev);
  };
  const handlerLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <div className="menu">
        <div className="container">
          <div className="menu__items">
            <div className="menu__logo">Настрой Плюс</div>
            <div
              className="menu__btn"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <span></span>
            </div>
            <ul className="menu__links">
              <li className="menu__link">Главная</li>
              <li className="menu__link">Каталог</li>
              <li className="menu__link">Обратная связь</li>
              <button className="menu__link" onClick={handlerTost}>
                Вывести ошибку
              </button>
              {isAuth ? (
                <button className="menu__link" onClick={handlerLogout}>
                  Выход
                </button>
              ) : (
                <button className="menu__link" onClick={handlerLogin}>
                  Авторизация
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu active={menuActive} setActive={setMenuActive} />
      <Blur active={menuActive} setActive={handlerBlur} />
    </div>
  );
};

export default Menu;

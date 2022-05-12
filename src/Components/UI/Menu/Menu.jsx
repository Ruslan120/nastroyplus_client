import {React, useState} from "react";
import "./Menu.scss";
import MobileMenu from "../mobile-menu/Mobile-menu";
import Blur from "../Blur/Blur";
import {useDispatch, useSelector} from "react-redux";
import {
    setLoginForm,
} from "../../../redux/actions";
import {useNavigate} from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import MenuLink from "./MenuLink";


const Menu = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.app.isAuth);
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useDispatch();

    const handlerLogin = () => {
        dispatch(setLoginForm(true));
    };
    const handlerBlur = () => {
        setMenuActive((prev) => !prev);
    };


    return (
        <div>
            <div className="menu">
                <div className="container">
                    <div className="menu__items">
                        <div
                            className="menu__btn"
                            onClick={() => setMenuActive((prev) => !prev)}>
                            <span></span>
                        </div>
                        <div className="menu__logo">Настрой Плюс</div>

                        <div className="menu__links">
                            <MenuLink text={"Главная"} iconName={"home"} onClick={event => navigate(`/`)}/>
                            <MenuLink text={"Обратная связь"} iconName={"feedback"} onClick={event => navigate(`/Feedback`)}/>
                            {isAuth ?<UserMenu/> : <MenuLink text={"Войти"} iconName={"person"}
                                onClick={handlerLogin}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu active={menuActive} setActive={setMenuActive}/>
            <Blur active={menuActive} setActive={handlerBlur}/>
        </div>
    );
};

export default Menu;

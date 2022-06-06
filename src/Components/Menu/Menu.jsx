import {React, useState} from "react";
import s from "./Menu.module.scss";
import MobileMenu from "../UI/mobile-menu/Mobile-menu";
import Blur from "../UI/Blur/Blur";
import {useDispatch, useSelector} from "react-redux";
import {
    setLoginForm,
} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import UserMenu from "../UI/UserMenu/UserMenu";
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
            <div className={s["menu"]}>
                <div className={s["container"]}>
                    <div className={s["menu__items"]}>
                        <div
                            className={s["menu__btn"]}
                            onClick={() => setMenuActive((prev) => !prev)}>
                            <span></span>
                        </div>
                        <div className={s["menu__logo"]}>Настрой Плюс</div>

                        <div className={s["menu__links"]}>
                            <MenuLink text={"Главная"} iconName={"home"} onClick={event => navigate(`/`)}/>
                            {isAuth ? <UserMenu/> : <MenuLink text={"Войти"} iconName={"person"}
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
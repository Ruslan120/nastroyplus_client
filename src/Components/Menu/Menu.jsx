import {React, useState} from "react";
import s from "./Menu.module.scss";
import MobileMenu from "../UI/mobile-menu/Mobile-menu";
import Blur from "../UI/Blur/Blur";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import UserMenu from "../UI/UserMenu/UserMenu";
import MenuLink from "./MenuLink";
import CustomInput from "../UI/custom-input/Custom-input";
import {useForm} from "react-hook-form";
import {setIsOpen} from "../../redux/reducers/loginFormReducer";


const Menu = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.app.isAuth);
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        getValues,
        resetField,
    } = useForm({mode: "onBlur"});

    const handlerLogin = () => {
        dispatch(setIsOpen(true));
    };
    const search = () => {
        const searchText = getValues().search;
        if(searchText != "" && searchText != undefined){
            navigate(`/search/${searchText}`)
            resetField('search');
        }

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
                            <div className={s["menu__search"]}>
                                <CustomInput register={register("search")} placeholder="Поиск"/>
                                <i onClick={search} className={"material-icons"}>search</i>
                            </div>

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

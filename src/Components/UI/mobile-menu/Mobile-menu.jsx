import React from 'react';
import "./Mobile-menu.scss";

const MobileMenu = ({active, setActive}) => {
    return (
        <div className={active ? "mobile-menu mobile-menu--active" : "mobile-menu"}>
            <div className={"mobile-menu__content"}>
                <div className={"mobile-menu__close"} onClick={()=>setActive(prev=>!prev)}>
                    <span className="material-icons">
                        close
                    </span>
                </div>
                <div className="mobile-menu__header">Заголовок</div>
                <ul className="mobile-menu__items">
                    <li className="mobile-menu__item">
                        <span className="material-icons">
                            home
                        </span>
                        <a href='/'>Главная</a>
                    </li>
                    <li className="mobile-menu__item">
                        <span className="material-icons">
                            menu_book
                        </span>
                        <a href='/'>Каталог</a>
                    </li>
                    <li className="mobile-menu__item">
                        <span className="material-icons">
                            textsms
                        </span>
                        <a href='/'>Обратная связь</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
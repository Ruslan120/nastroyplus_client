import React from 'react';
import s from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={s["footer"]}>
            <div className={s["container"]}>
                <div className={s["footer__content"]}>
                    <div className={s["footer__aboutUs"]}>
                        <p className={s["footer__aboutUs-text"]}>
                            20022 © НастройПлюс — интернет магазин строительных материалов, оборудования и инструментов. Все права защищены.
                        </p>
                    </div>
                    <div className={s["footer__contactUs"]}>
                        <span className={s["footer__contactUs-email"]}>Наша почта: nastroyplusorganisation@gmail.com</span>
                        <span className={s["footer__contactUs-phone"]}>Телефон: +7 950 432 23 43</span>
                        <span className={s["footer__contactUs-adress"]}>Адрес: г.Курск, ул. Пушкина, д43, офис2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
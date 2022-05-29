import React from 'react';
import s from "./BasketOrder.module.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";

const BasketOrder = ({totalPrice, totalCount, makeOrder}) => {
    return (
        <div className={s["basket-order"]}>
            <div className={s["basket-order__price"]}>
                <span className={s["basket-order__price-title"]}>Итого</span>
                <span className={s["basket-order__price-value"]}>{totalPrice}</span>
            </div>
            <div className={s["basket-order__count"]}>
                <span className={s["basket-order__count-title"]}>Кол-во товаров</span>
                <span className={s["basket-order__count-value"]}>{totalCount}</span>
            </div>
            <CustomBtn onClick={makeOrder}>Заказать</CustomBtn>
            <div className={s["basket-order__oferta"]}>
                <span className={s["basket-order__oferta-title"]}><i className="material-icons">check</i></span>
                <span className={s["basket-order__oferta-value"]}>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</span>
            </div>
        </div>
    );
};

export default BasketOrder;
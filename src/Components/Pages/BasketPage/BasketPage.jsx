import React, {useEffect} from 'react';
import s from "./BasketPage.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {deleteBasketData, getBaskets, updateBasketCount} from "../../../redux/actions";
import BasketItem from "./BasketItem";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import EmptyList from "../../UI/EmptyList/EmptyList";

const BasketPage = () => {
    const dispatch = useDispatch();
    const baskets = useSelector(state => state.basket.baskets);

    const totalPrice = baskets.reduce((acum, basket) => {
        return (acum + +(basket.count * basket.product.price));
    }, 0).toFixed(2)

    const totalCount = baskets.reduce((acum, basket) => {
        return acum + basket.count
    }, 0)


    const changeCountBasket = (basketId, count) => {
        dispatch(updateBasketCount(basketId, count))
    }
    const deleteBasket = (basketId) => {
        dispatch(deleteBasketData(basketId))
    }

    useEffect(() => {
        dispatch(getBaskets());
    }, [])

    return (
        <div className={s["basket-page"]}>
            {baskets.length > 0 ? <div className={s["basket-page__content"]}>
                <div className={s["basket-list"]}>
                    <h2 className={s["basket-list__title"]}>Корзина</h2>
                    {baskets.map(basket => <BasketItem basket={basket} changeCountBasket={changeCountBasket}
                                                       deleteBasket={deleteBasket}/>)}
                </div>
                <div className={s["basket-order"]}>
                    <div className={s["basket-order__price"]}>
                        <span className={s["basket-order__price-title"]}>Итого</span>
                        <span className={s["basket-order__price-value"]}>{totalPrice}</span>
                    </div>
                    <div className={s["basket-order__count"]}>
                        <span className={s["basket-order__count-title"]}>Кол-во товаров</span>
                        <span className={s["basket-order__count-value"]}>{totalCount}</span>
                    </div>
                    <CustomBtn>Заказать</CustomBtn>
                    <div className={s["basket-order__oferta"]}>
                        <span className={s["basket-order__oferta-title"]}><i className="material-icons">check</i></span>
                        <span className={s["basket-order__oferta-value"]}>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</span>
                    </div>
                </div>
            </div> : <EmptyList text="Ваша корзина пуста"/>}
        </div>

    );
};

export default BasketPage;
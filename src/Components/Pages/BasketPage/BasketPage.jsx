import React, {useEffect} from 'react';
import s from "./BasketPage.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {deleteBasketData, getBaskets, updateBasketCount} from "../../../redux/actions";
import BasketItem from "./BasketItem/BasketItem";
import EmptyList from "../../UI/EmptyList/EmptyList";
import BasketOrder from "./BasketOrder/BasketOrder";
import Spinner from "react-bootstrap/Spinner";
import {setOrderOpen} from "../../../redux/reducers/orderFormReducer";

const BasketPage = () => {
    const dispatch = useDispatch();
    const baskets = useSelector(state => state.basket.baskets);
    const isFetching = useSelector(state => state.app.isFetching);

    const totalPrice = baskets.reduce((acum, basket) => {
        return (acum + +(basket.count * basket.product.price));
    }, 0).toFixed(2)

    const totalCount = baskets.reduce((acum, basket) => {
        return acum + basket.count
    }, 0)


    const changeCountBasket = (basketId, count) => {
        dispatch(updateBasketCount(basketId, count))
    }
    const openOrderModal = () => {
        dispatch(setOrderOpen(true))
    }
    const deleteBasket = (basketId) => {
        dispatch(deleteBasketData(basketId))
    }

    useEffect(() => {
        dispatch(getBaskets());
    }, [])

    return (
        <div>
            {!isFetching ? <div className={s["basket-page"]}>
                {baskets.length > 0 ? <div className={s["basket-page__content"]}>
                    <div className={s["basket-list"]}>
                        <h2 className={s["basket-list__title"]}>Корзина</h2>
                        {baskets.map(basket => <BasketItem basket={basket} key={basket.id}
                                                           changeCountBasket={changeCountBasket}
                                                           deleteBasket={deleteBasket}/>)}
                    </div>
                    <BasketOrder totalPrice={totalPrice} totalCount={totalCount} makeOrder={openOrderModal}/>
                </div> : <EmptyList text="Ваша корзина пуста"/>}
            </div> : <Spinner animation="border" variant="success"/>}
        </div>


    );
};

export default BasketPage;
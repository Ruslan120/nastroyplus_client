import React, {useEffect} from "react";
import s from './OrderPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../../redux/actions";
import OrderItem from "./OrderItem";
import EmptyList from "../../UI/EmptyList/EmptyList";


const OrderPage = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(getOrders());
    }, [])
    return (
        <div className={s["order-page"]}>
            {orders.length > 0 ? <div className={s["order-page__content"]}>
                <div className={s["order-page__items"]}>
                    <h2 className={s["order-page__title"]}>Ваши заказы</h2>
                    {orders.map(order => <OrderItem order={order}/>)}
                </div>
            </div> : <EmptyList text="У вас нет заказов"/>}

        </div>
    );
};

export default OrderPage;

import React, {useEffect} from "react";
import s from './OrderPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../../redux/actions";
import OrderItem from "./OrderItem/OrderItem";
import EmptyList from "../../UI/EmptyList/EmptyList";
import Spinner from "react-bootstrap/Spinner";


const OrderPage = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)
    const reverseOrders = [...orders].reverse();
    const isFetching = useSelector(state => state.app.isFetching)
    useEffect(() => {
        dispatch(getOrders());
    }, [])
    return (
        <div>
            {!isFetching ? <div className={s["order-page"]}>
                {reverseOrders.length > 0 ? <div className={s["order-page__content"]}>
                    <div className={s["order-page__items"]}>
                        <h2 className={s["order-page__title"]}>Ваши заказы</h2>
                        {reverseOrders.map(order => <OrderItem key={order.id} order={order}/>)}
                    </div>
                </div> : <EmptyList text="У вас нет заказов"/>}
            </div> : <Spinner animation="border" variant="success"/>}
        </div>
    );
};

export default OrderPage;

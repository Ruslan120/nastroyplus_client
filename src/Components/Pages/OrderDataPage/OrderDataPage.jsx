import React, {useEffect} from 'react';
import s from "./OrderDataPage.module.scss"
import Spinner from "react-bootstrap/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {getOrderData} from "../../../redux/actions";
import {useParams} from "react-router-dom";
import OrderDataItem from "./OrderDataItem";

const OrderDataPage = () => {
    const dispatch = useDispatch()
    const {orderId} = useParams();
    const orderData = useSelector(state => state.orderData.orderData)
    const isFetching = useSelector(state => state.app.isFetching)
    useEffect(() => {
        dispatch(getOrderData(orderId));
    }, [])

    return (
        <div>
            {!isFetching ? <div className={s["order-data"]}>
                <div className={s["order-data__content"]}>
                    <div className={s["order-data__items"]}>
                        <h2 className={s["order-data__title"]}>Заказ номер: {orderId}</h2>
                        {orderData.products.length > 0 ? orderData.products.map(product => <OrderDataItem
                            key={product.id} product={product}/>) : <Spinner animation="border" variant="success"/>}
                        <div className={s["order-data__totalPrice"]}>Сумма заказа: {orderData.totalPrice}</div>
                    </div>
                </div>
            </div> : <Spinner animation="border" variant="success"/>}
        </div>
    );
};

export default OrderDataPage;
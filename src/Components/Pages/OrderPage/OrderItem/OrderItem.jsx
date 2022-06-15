import React from "react";
import s from "./OrderItem.module.scss";
import {useNavigate} from "react-router-dom";

const OrderItem = ({order}) => {
    const navigate = useNavigate();
    function rectifyFormat(s) {
        let b = s.split(/\D/);
        return b[0] + '-' + b[1] + '-' + b[2] + 'T' +
            b[3] + ':' + b[4] + ':' + b[5] + '.' +
            b[6].substr(0,3) + '+00:00';
    }
    let validDate = new Date(rectifyFormat(order.createdAt)).toLocaleString()

    return (
        <div className={s["order-item"]}>
            <div onClick={event => navigate(`/order/${order.id}`)} className={s["order-item__id"]}>{order.id}</div>
            <div className={s["order-item__title"]}>{`Заказ на сумму: ${order.totalPrice}руб.`}</div>
            <div className={s["order-item__data"]}>{`Дата заказа: ${validDate}`}</div>
            <div className={s["order-item__status"]}>{`Статус заказа: ${order.status}`}</div>
        </div>
    );
};

export default OrderItem;

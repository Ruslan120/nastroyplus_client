import React from "react";
import s from "./OrderItem.module.scss";

const OrderItem = ({order}) => {

    return (
        <div className={s["order-item"]}>
            <div className={s["order-item__id"]}>{order.id}</div>
            <div className={s["order-item__title"]}>{`Заказ на сумму: ${order.totalPrice}руб.`}</div>
            <div className={s["order-item__status"]}>{`Статус заказа: ${order.status}`}</div>
        </div>
    );
};

export default OrderItem;

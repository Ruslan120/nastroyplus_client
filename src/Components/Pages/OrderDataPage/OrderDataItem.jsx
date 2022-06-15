import React from "react";
import {useNavigate} from "react-router-dom";
import s from "./OrderDataItem.module.scss";
import {BASE_URL} from "../../../utils/consts";

const OrderDataItem = ({product}) => {
    const navigate = useNavigate();
    return (
        <div className={s["order-item"]}>
            <img
                className={s["order-item__img"]}
                src={`${BASE_URL}/images/${product.product.image}`}
                alt="order-item-picture"
            />
            <div className={s["order-item__link"]}
                 onClick={() => navigate(`/product/${product.product.id}`)}>{product.product.name}</div>
            <div className={s["order-item__count"]}>
                <span>Кол-во: {product.count}</span>
            </div>
        </div>
    );
};

export default OrderDataItem;

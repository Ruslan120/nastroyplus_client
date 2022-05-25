import React from "react";
import s from "./ProductItem.module.scss";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../../utils/consts"

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const productClickHandler = (productID) => {
        navigate(`/product/${product.id}`);
    };
    return (
        <div className={s["product"]} key={product.id}>
            <div
                onClick={(e) => productClickHandler(product.id)}
                className={s["product__main"]}
            >
                <div className={s["product__image"]}>
                    <img
                        src={`${BASE_URL}/images/${product.image}`} alt="product-image"/>
                </div>
                <div className={s["product__info"]}>
                    <p className={s["product__price"]}>{product.price}</p>
                    <p className={s["product__name"]}>{product.name}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;

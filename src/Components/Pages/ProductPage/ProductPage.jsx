import React, {useEffect, useState} from "react";
import s from "./ProductPage.module.scss";
import ProductAttributes from "../ProductsPage/ProductAttributes/ProductAttributes";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToFavorite, getProductData} from "../../../redux/actions";
import {BASE_URL} from "../../../utils/consts";
import Controlls from "./Controlls/Controlls";
import ProductDescription from "../ProductsPage/ProductDescription/ProductDescription";

const ProductPage = () => {
    const {productId} = useParams();
    const {productData, isFavorite, isBasket} = useSelector(state => state.productPage)
    const dispatch = useDispatch();

    const addToFavoriteHandler = () => {
        dispatch(addToFavorite(productId))
    };
    const addToBasketHandler = () => {
        dispatch(addToBasket(productId))
    };

    useEffect(() => {
        dispatch(getProductData(productId))
    }, []);

    return (<div className={s["product-page"]}>
        <h2 className={s["product-page__title"]}>{productData.name}</h2>
        <div className={s["product-page__content"]}>
            <div className={s["product-page__image"]}>
                <img
                    src={`${BASE_URL}/images/${productData.image}`}
                    alt=""
                />
            </div>

            <div className={s["product-page__data"]}>
                <h3 className={s["product-page__price"]}>{productData.price}</h3>
                <Controlls addToBasketClick={addToBasketHandler} addToFavoriteClick={addToFavoriteHandler}
                           isFavorite={isFavorite}
                           isBasket={isBasket}/>
                <ProductAttributes attributes={productData.attributes}/>
            </div>
        </div>
        <ProductDescription description={productData.description}/>
    </div>);
};

export default ProductPage;

import React, {useEffect, useState} from "react";
import s from "./ProductPage.module.scss";
import ProductAttributes from "../ProductsPage/ProductAttributes/ProductAttributes";
import {useParams} from "react-router-dom";
import ProductService from "../../../services/ProductService";
import FavoriteService from "../../../services/FavoriteService";
import {useDispatch} from "react-redux";
import {addToastTime} from "../../../redux/actions";
import BasketService from "../../../services/BasketService";
import {BASE_URL} from "../../../utils/consts";
import Controlls from "./Controlls/Controlls";
import ProductDescription from "../ProductsPage/ProductDescription/ProductDescription";

const ProductPage = () => {
    const {productId} = useParams();
    const [productData, setProductData] = useState({
        attributes: [],
    });
    const [isFavorite, setIsFavorite] = useState(false);
    const [isBasket, setIsBasket] = useState(false);
    const dispatch = useDispatch();
    const addToFavoriteHandler = () => {
        FavoriteService.addToFavorite(productId)
            .then((response) => {
                dispatch(
                    addToastTime("success", "Товар успешно добавлен в избранное!")
                );
                setIsFavorite(true);
            })
            .catch((e) => {
                dispatch(addToastTime("error", e?.response?.data?.message));
            });
    };
    const addToBasketHandler = () => {
        BasketService.addToBasket(productId)
            .then((response) => {
                dispatch(addToastTime("success", "Товар успешно добавлен в корзину!"));
                setIsBasket(true);
            })
            .catch((e) => {
                dispatch(addToastTime("error", e?.response?.data?.message));
            });
    };
    const deleteFromFavoriteHandler = () => {
        FavoriteService.deleteFromFavorite(productId)
            .then((response) => {
                dispatch(
                    addToastTime("success", "Товар успешно удален из избранного!")
                );
                setIsFavorite(false);
            })
            .catch((e) => {
                dispatch(addToastTime("error", e?.response?.data?.message));
            });
    };
    useEffect(() => {
        ProductService.getProductById(productId).then((response) => {
            setProductData(response.data);
        });
        FavoriteService.isFavorite(productId).then((response) => {
            setIsFavorite(response.data);
        });
        BasketService.isBasket(productId).then((response) => {
            setIsBasket(response.data);
        });
    }, []);

    return (
        <div className={s["product-page"]}>
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
                                   deleteFavoriteClick={deleteFromFavoriteHandler} isFavorite={isFavorite}
                                   isBasket={isBasket}/>
                        <ProductAttributes attributes={productData.attributes}/>
                </div>
            </div>
            <ProductDescription description={productData.description}/>
        </div>
    );
};

export default ProductPage;

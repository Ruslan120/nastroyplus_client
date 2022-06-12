import React from 'react';
import s from "./Controlls.module.scss"
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import FavoriteBtn from "../../../UI/favorite-btn/Favorite-btn";
import {useNavigate} from "react-router-dom";

const Controlls = ({addToFavoriteClick, addToBasketClick, deleteFavoriteClick, isBasket, isFavorite}) => {
    const navigate = useNavigate();
    return (
        <div className={s["controlls"]}>
            {isBasket ? (
                <CustomBtn onClick={(e) => navigate("/basket")}>
                    В корзине
                </CustomBtn>
            ) : (
                <CustomBtn onClick={addToBasketClick}>
                    Добавить в корзину
                </CustomBtn>
            )}

            {isFavorite ? (
                <FavoriteBtn onClick={(e) => navigate("/favorite")}>
                    В избранном
                </FavoriteBtn>
            ) : (
                <FavoriteBtn onClick={addToFavoriteClick}>
                    Добавить в избранное
                </FavoriteBtn>
            )}
        </div>
    );
};

export default Controlls;
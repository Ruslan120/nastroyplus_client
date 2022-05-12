import React, {useEffect, useState} from "react";
import "./FavoritePage.scss";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getFavorites} from "../../../redux/actions";
import FavoriteItem from "./FavoriteItem";


const FavoritePage = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const deleteFromFavoriteHandler = (favoriteId) => {
        dispatch(deleteFavorite(favoriteId))
    };

    useEffect(() => {
        dispatch(getFavorites());
    }, [])
    return (
        <div className="favorite-page">
            <h2 className="favorite-page__title">Избранные товары</h2>
            <div className="favorite-page__content">
                <div className="favorite-page__items">
                    {favorites.map(favorite => <FavoriteItem favorite={favorite} deleteHandler={()=>deleteFromFavoriteHandler(favorite.productId)}/>)}
                </div>
            </div>
        </div>
    );
};

export default FavoritePage;

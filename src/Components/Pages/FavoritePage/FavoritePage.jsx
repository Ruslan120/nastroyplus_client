import React, {useEffect} from "react";
import "./FavoritePage.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getFavorites} from "../../../redux/actions";
import FavoriteItem from "./FavoriteItem";
import EmptyList from "../../UI/EmptyList/EmptyList";


const FavoritePage = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const deleteFromFavoriteHandler = (favoriteId) => {
        dispatch(deleteFavorite(favoriteId))
    };
    const isAuth = useSelector(state => state.app.isAuth);

    useEffect(() => {
        dispatch(getFavorites());
    }, [])
    return (
        <div className="favorite-page">
            {favorites.length > 0 ? <div className="favorite-page__content">
                <div className="favorite-page__items">
                    <h2 className="favorite-page__title">Избранные товары</h2>
                    {favorites.map(favorite => <FavoriteItem favorite={favorite}
                                                             deleteHandler={() => deleteFromFavoriteHandler(favorite.productId)}/>)}
                </div>
            </div> : <EmptyList text="У вас нет избранных"/>}

        </div>
    );
};

export default FavoritePage;

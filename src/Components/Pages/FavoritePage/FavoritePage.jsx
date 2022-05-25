import React, {useEffect} from "react";
import s from './FavoritePage.module.scss';
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

    useEffect(() => {
        dispatch(getFavorites());
    }, [])
    return (
        <div className={s["favorite-page"]}>
            {favorites.length > 0 ? <div className={s["favorite-page__content"]}>
                <div className={s["favorite-page__items"]}>
                    <h2 className={s["favorite-page__title"]}>Избранные товары</h2>
                    {favorites.map(favorite => <FavoriteItem favorite={favorite}
                                                             deleteHandler={() => deleteFromFavoriteHandler(favorite.productId)}/>)}
                </div>
            </div> : <EmptyList text="У вас нет избранных"/>}

        </div>
    );
};

export default FavoritePage;

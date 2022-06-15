import React, {useEffect} from "react";
import s from './FavoritePage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getFavorites} from "../../../redux/actions";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import EmptyList from "../../UI/EmptyList/EmptyList";
import Spinner from "react-bootstrap/Spinner";


const FavoritePage = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const isFetching = useSelector(state => state.app.isFetching)
    const deleteFromFavoriteHandler = (favoriteId) => {
        dispatch(deleteFavorite(favoriteId))
    };

    useEffect(() => {
        dispatch(getFavorites());
    }, [])
    return (
        <div>
            {!isFetching ? <div className={s["favorite-page"]}>
                {favorites.length > 0 ? <div className={s["favorite-page__content"]}>
                    <div className={s["favorite-page__items"]}>
                        <h2 className={s["favorite-page__title"]}>Избранные товары</h2>

                        {favorites.map(favorite => <FavoriteItem favorite={favorite}
                                                                 deleteHandler={() => deleteFromFavoriteHandler(favorite.id)}/>)}
                    </div>
                </div> : <EmptyList text="У вас нет избранных"/>}
            </div> : <Spinner animation="border" variant="success"/>}
        </div>
    );
};

export default FavoritePage;

import React from 'react';
import {useNavigate} from "react-router-dom";
import './FavoriteItem.scss';

const FavoriteItem = ({favorite, deleteHandler}) => {
    const navigate = useNavigate();
    const goProduct = () => {
        navigate(`/product/${favorite.productId}`)
    }

    return (
        <div className="favorite-item">
            <img className="favorite-item__img"
                 src={`http://localhost:7000/images/${favorite.product.image}`}></img>
            <div className="favorite-item__link">{favorite.product.name}</div>
            <div className="favorite-item__price"><span>{favorite.product.price}</span></div>
            <div className="favorite-item__delete" onClick={deleteHandler}>
                <span><i className="material-icons">close</i></span>
            </div>
        </div>
    );
};

export default FavoriteItem;
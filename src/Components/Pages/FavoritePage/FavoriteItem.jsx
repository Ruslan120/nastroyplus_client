import React from 'react';
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import {useNavigate} from "react-router-dom";
import './FavoriteItem.scss';

const FavoriteItem = ({favorite, deleteHandler}) => {
    const navigate = useNavigate();
    const goProduct = () => {
        navigate(`/product/${favorite.productId}`)
    }

    return (
        <div className="favorite-item">
            <img src={`http://localhost:7000/images/${favorite.product.image}`}
                 className="favorite-item__img" onClick={goProduct}></img>
            <div className="favorite-item__link" onClick={goProduct}>{favorite.product.name}</div>
            <div className="favorite-item__price"><span>{favorite.product.price}</span></div>
            <CustomBtn>Добавить в корзину</CustomBtn>
            <div className="favorite-item__delete"
                 onClick={deleteHandler}><span>Удалить</span>
            </div>
        </div>
    );
};

export default FavoriteItem;
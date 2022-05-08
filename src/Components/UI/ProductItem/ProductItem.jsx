import React from 'react';
import "./ProductItem.scss";
import CustomBtn from "../custom-btn/Custom-btn";
import FavoriteBtn from "../favorite-btn/Favorite-btn";
import {useNavigate} from "react-router-dom";




const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const productClickHandler = (productID) => {
        navigate(`/product/${product.id}`)
    }
    return (
        <div className="product" key={product.id}>
            <div onClick={e => productClickHandler(product.id)} className="product__main">
                <div className="product__image">
                    <img src="https://images.wbstatic.net/c246x328/new/59620000/59628345-1.avif"
                         alt="product-image"/>
                </div>
                <div className="product__info">
                    <p className="product__price">{product.price}</p>
                    <p className="product__name">{product.name}</p>
                </div>
            </div>
            <div className="product__actions">
                <FavoriteBtn style={{marginTop: "10px"}}>В избранное</FavoriteBtn>
                <CustomBtn style={{marginTop: "10px"}}>Добавить в корзину</CustomBtn>
            </div>

        </div>
    );
};

export default ProductItem;
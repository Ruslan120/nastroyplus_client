import React from "react";
import "./ProductItem.scss";
import CustomBtn from "../custom-btn/Custom-btn";
import FavoriteBtn from "../favorite-btn/Favorite-btn";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const productClickHandler = (productID) => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="product" key={product.id}>
      <div
        onClick={(e) => productClickHandler(product.id)}
        className="product__main"
      >
        <div className="product__image">
          <img
            src={`http://localhost:7000/images/${product.image}`} alt="product-image"/>
        </div>
        <div className="product__info">
          <p className="product__price">{product.price}</p>
          <p className="product__name">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React from "react";
import "./ProductItem.scss";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../../utils/consts"

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
            src={`${BASE_URL}/images/${product.image}`} alt="product-image"/>
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

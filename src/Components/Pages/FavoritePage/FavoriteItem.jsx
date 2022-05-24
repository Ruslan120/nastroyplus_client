import React from "react";
import { useNavigate } from "react-router-dom";
import "./FavoriteItem.scss";
import { BASE_URL } from "../../../utils/consts";

const FavoriteItem = ({ favorite, deleteHandler }) => {
  const navigate = useNavigate();
  const goProduct = () => {
    navigate(`/product/${favorite.productId}`);
  };

  return (
    <div className="favorite-item">
      <img
        className="favorite-item__img"
        src={`${BASE_URL}/images/${favorite.product.image}`}
      ></img>
      <div className="favorite-item__link" onClick={()=> navigate(`/product/${favorite.product.id}`)}>{favorite.product.name}</div>
      <div className="favorite-item__price">
        <span>{favorite.product.price}</span>
      </div>
      <div className="favorite-item__delete" onClick={deleteHandler}>
        <span>
          <i className="material-icons">close</i>
        </span>
      </div>
    </div>
  );
};

export default FavoriteItem;

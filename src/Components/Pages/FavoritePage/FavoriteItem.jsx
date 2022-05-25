import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./FavoriteItem.module.scss";
import { BASE_URL } from "../../../utils/consts";

const FavoriteItem = ({ favorite, deleteHandler }) => {
  const navigate = useNavigate();

  return (
    <div className={s["favorite-item"]}>
      <img
        className={s["favorite-item__img"]}
        src={`${BASE_URL}/images/${favorite.product.image}`}
        alt="favorite-item-picture"
      />
      <div className={s["favorite-item__link"]} onClick={()=> navigate(`/product/${favorite.product.id}`)}>{favorite.product.name}</div>
      <div className={s["favorite-item__price"]}>
        <span>{favorite.product.price}</span>
      </div>
      <div className={s["favorite-item__delete"]} onClick={deleteHandler}>
        <span>
          <i className="material-icons">close</i>
        </span>
      </div>
    </div>
  );
};

export default FavoriteItem;

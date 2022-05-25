import React, { useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import FavoriteBtn from "../../UI/favorite-btn/Favorite-btn";
import ProductAttributes from "../../UI/ProductAttributes/ProductAttributes";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import FavoriteService from "../../../services/FavoriteService";
import { useDispatch } from "react-redux";
import { addToastTime } from "../../../redux/actions";
import BasketService from "../../../services/BasketService";
import { BASE_URL } from "../../../utils/consts";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productData, setProductData] = useState({
    attributes: [],
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBasket, setIsBasket] = useState(false);
  const dispatch = useDispatch();
  const addToFavoriteHandler = () => {
    FavoriteService.addToFavorite(productId)
      .then((response) => {
        dispatch(
          addToastTime("success", "Товар успешно добавлен в избранное!")
        );
        setIsFavorite(true);
      })
      .catch((e) => {
        dispatch(addToastTime("error", e?.response?.data?.message));
      });
  };
  const addToBasketHandler = () => {
    BasketService.addToBasket(productId)
      .then((response) => {
        dispatch(addToastTime("success", "Товар успешно добавлен в корзину!"));
        setIsBasket(true);
      })
      .catch((e) => {
        dispatch(addToastTime("error", e?.response?.data?.message));
      });
  };
  const deleteFromFavoriteHandler = () => {
    FavoriteService.deleteFromFavorite(productId)
      .then((response) => {
        dispatch(
          addToastTime("success", "Товар успешно удален из избранного!")
        );
        setIsFavorite(false);
      })
      .catch((e) => {
        dispatch(addToastTime("error", e?.response?.data?.message));
      });
  };
  useEffect(() => {
    ProductService.getProductById(productId).then((response) => {
      setProductData(response.data);
    });
    FavoriteService.isFavorite(productId).then((response) => {
      setIsFavorite(response.data);
    });
    BasketService.isBasket(productId).then((response) => {
      setIsBasket(response.data);
    });
  }, []);

  return (
    <div className={s["product-page"]}>
      <h2 className={s["product-page__title"]}>{productData.name}</h2>
      <div className={s["product-page__content"]}>
        <div className={s["product-page__image"]}>
          <img
            src={`${BASE_URL}/images/${productData.image}`}
            alt=""
          />
        </div>

        <div className={s["product-page__data"]}>
          <div className={s["product-page__main"]}>
            <h3 className={s["product-page__price"]}>{productData.price}</h3>
            <div className={s["product-page__controlls"]}>
              {isBasket ? (
                <CustomBtn onClick={(e) => navigate("/basket")}>
                  В корзине
                </CustomBtn>
              ) : (
                <CustomBtn onClick={addToBasketHandler}>
                  Добавить в корзину
                </CustomBtn>
              )}

              {isFavorite ? (
                <FavoriteBtn onClick={deleteFromFavoriteHandler}>
                  Удалить из избранного
                </FavoriteBtn>
              ) : (
                <FavoriteBtn onClick={addToFavoriteHandler}>
                  Добавить в избранное
                </FavoriteBtn>
              )}
            </div>
            <ProductAttributes attributes={productData.attributes} />
          </div>
        </div>
      </div>
      <div className={s["product-page__description"]}>
        <h3 className={s["product-page__title"]}>Описание</h3>
        <p className={s["product-page__text"]}>{productData.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;

import React, {useEffect, useState} from 'react';
import "./ProductPage.scss";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import FavoriteBtn from "../../UI/favorite-btn/Favorite-btn";
import ProductAttributes from "../../UI/ProductAttributes/ProductAttributes";
import {useParams} from "react-router-dom";
import ProductService from "../../../services/ProductService";


const attributes = [{name: "Что-то там", value: "Фигня полнейшая"},
    {name: "Что-то там", value: "Фигня efdsfdsf"},
    {name: "Что-тfsdfо там", value: "Фигня полнейfdsfsdfшая"},
    {name: "Что-sdfs там", value: "Фигня dsfsdf"},]

const ProductPage = () => {
    const {productId} = useParams()
    const [productData, setProductData] = useState({
        attributes:[],
    });
    useEffect(() => {
            ProductService.getProductById(productId).then((response) => {
                setProductData(response.data)
            })
        }, [])
    return (
        <div className="product-page">
            <h2 className="product-page__title">{productData.name}</h2>
            <div className="product-page__content">
                <img className="product-page__img"
                     src="https://images.wbstatic.net/c246x328/new/59620000/59628345-1.avif" alt=""/>
                <div className="product-page__data">
                    <div className="product-page__main">
                        <h3 className="product-page__price">{productData.price}</h3>
                        <div className="product-page__controlls">
                            <CustomBtn>Добавить в корзину</CustomBtn>
                            <FavoriteBtn style={{marginLeft: "20px"}}>В избранное</FavoriteBtn>
                        </div>
                        <ProductAttributes attributes={productData.attributes}/>
                    </div>
                </div>
            </div>
            <div className="product-page__description">
                <h3 className="product-page__title">Описание</h3>
                <p className="product-page__text">{productData.description}</p>
            </div>
        </div>
    );
};

export default ProductPage;
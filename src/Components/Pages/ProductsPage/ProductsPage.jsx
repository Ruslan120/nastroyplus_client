import React from 'react';
import s from "./ProductsPage.module.scss";
import Products from "./Products/Products";


const ProductsPage = () => {
    return (
        <div className={s["products"]}>
                <Products/>
        </div>
    );
};

export default ProductsPage;
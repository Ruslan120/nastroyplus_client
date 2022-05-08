import React from 'react';
import "./ProductsPage.scss";
import Products from "./Products/Products";


const ProductsPage = () => {
    return (
        <div className="products">
            <div className="products__content">
                <Products/>
            </div>
        </div>
    );
};

export default ProductsPage;
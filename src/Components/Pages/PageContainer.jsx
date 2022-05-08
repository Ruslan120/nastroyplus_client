import React from 'react';
import "./PageContainer.scss";
import {Route, Routes} from "react-router-dom";
import RegistrationPage from "../registration-page/Registration-page";
import MainPage from "./MainPage/MainPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import ProductPage from "./ProductPage/ProductPage";
const PageContainer = () => {
    return (
        <div className="page-container">
            <Routes>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/product/:productId" element={<ProductPage/>}/>
            </Routes>
        </div>
    );
};

export default PageContainer;
import React, {useEffect, useState} from 'react';
import "./Products.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import {useSearchParams} from "react-router-dom";

const Products = () => {
    const [searchParams] = useSearchParams();
    const subcategoryId = searchParams.get('subcategoryId');
    const [products, setProducts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const limit = 1;
    const totalPages = Math.ceil(totalCount / limit)
    const [page, setPage] = useState(1);


    useEffect((prevProps, nextProps) => {
        ProductService.getProductsBySubcategory(subcategoryId, limit, page).then((response) => {
            setProducts(prevState => [...prevState, ...response.data.products])
            setTotalCount(response.data.count)
        })
        console.log("page,limit")
    }, [page, limit])

    return (
        <div className="products-list">
            <h2 className="products-list__header">Товары по категории</h2>
            <div className="products-list__items">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
            {page < totalPages &&
            <CustomBtn onClick={e => setPage((prevState => ++prevState))}>Показать еще</CustomBtn>}
        </div>

    );
};

export default Products;
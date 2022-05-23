import React, {useEffect, useState} from 'react';
import "./Products.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import {useSearchParams} from "react-router-dom";
import MySelect from "../../../UI/MySelect/MySelect";

const Products = () => {
    const [searchParams] = useSearchParams();
    const subcategoryId = searchParams.get('subcategoryId');
    const [products, setProducts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [sort, setSort] = useState([]);
    const limit = 6;
    const totalPages = Math.ceil(totalCount / limit)
    const [page, setPage] = useState(1);
    console.log()

    useEffect(() => {
        ProductService.getProductsBySubcategory(subcategoryId, limit, page).then((response) => {
            setProducts(prevState => [...prevState, ...response.data.products])
            setTotalCount(response.data.count)
        })
    }, [page, limit])


    return (
        <div className="products-list">
            <div className="products-list__header">
                <h2 className="products-list__title">Товары по категории</h2>
                <MySelect
                    options={[
                        {value: ["Price", "ASC"], name: "Цена по возрастанию"},
                        {value: ["Price", "DESC"], name: "Цена по убыванию"},
                        {value: ["updatedAt", "ASC"], name: "Сначала новые"},
                        {value: ["updatedAt", "DESC"], name: "Сначала старые"},
                    ]}
                    defaultValue="сортировка"
                    onChange={(sortVal) => setSort(sortVal)}
                />

            </div>

            <div className="products-list__items">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
            {page < totalPages &&
            <CustomBtn onClick={e => setPage((prevState => ++prevState))}>Показать еще</CustomBtn>}
        </div>

    );
};

export default Products;
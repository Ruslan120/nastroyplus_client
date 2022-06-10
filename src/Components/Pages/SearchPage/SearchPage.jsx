import React, {useEffect, useState} from "react";
import s from "./SearchPage.module.scss";
import {useParams} from "react-router-dom";
import ProductService from "../../../services/ProductService";
import Pagination from "../../UI/Pagination/Pagination";
import ProductItem from "../../UI/ProductItem/ProductItem";


const SearchPage = () => {
    const {text} = useParams();
    const [searchProducts, setSearchProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const limit = 12;
    const [page, setPage] = useState(1);
    const paginate = (pageNum) => {
        setPage(pageNum);
    };
    const nextPage = () => {
        setPage((prevState) => ++prevState);
    };
    const prevPage = () => {
        setPage((prevState) => --prevState);
    };

    useEffect(() => {
        ProductService.searchProducts(
            text,
            limit,
            page
        ).then((response) => {
            setSearchProducts(response.data.products);
            setTotalCount(response.data.count);
        });
    }, [page,text]);

    return (
        <div className={s["products-list"]}>
            <div className={s["products-list__header"]}>
                <h2 className={s["products-list__title"]}>Найденные товары по запросу: {text}</h2>
            </div>

            <div className={s["products-list__items"]}>
                {searchProducts.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
            {
                totalCount >= limit && <Pagination
                    limit={limit}
                    totalCount={totalCount}
                    currentPage={page}
                    paginate={paginate}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />

            }

        </div>
    );
};

export default SearchPage;

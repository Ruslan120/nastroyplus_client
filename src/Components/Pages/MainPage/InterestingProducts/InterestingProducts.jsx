import React, {useEffect, useState} from 'react';
import "./InterestingProducts.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";

const InterestingProducts = () => {
    const [products, setProducts] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const limit = 5;
    const totalPages = Math.ceil(totalCount / limit)
    const [page, setPage] = useState(1);

    // const totalPages = Math.ceil(totalCount / limit)

    useEffect(() => {
        ProductService.getInterestingProduct(limit, page).then((response) => {
            setProducts(prevState => [...prevState, ...response.data.products])
            setTotalCount(response.data.count)
        })
    }, [page, limit])
    return (
        <div className="interesting-products">
            <h2 className="interesting-products__header">Возможно, Вам понравится</h2>
            <div className="interesting-products__items">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
            {page < totalPages &&
            <CustomBtn onClick={e => setPage((prevState => ++prevState))}>Показать еще</CustomBtn>}
        </div>

    );
};

export default InterestingProducts;
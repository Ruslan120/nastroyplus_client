import React, { useEffect, useState } from "react";
import s from "./InterestingProducts.module.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import Pagination from "../../../UI/Pagination/Pagination";

const InterestingProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 6;
  const totalPages = Math.ceil(totalCount / limit);
  const [page, setPage] = useState(1);

  const paginate = (pageNum) => {
    setPage(pageNum);
  };
  const nextPage = () => {
    setPage(prevState=> ++prevState);
  };
  const prevPage = (pageNum) => {
    setPage(prevState=> --prevState);
  };


  useEffect(() => {
    ProductService.getInterestingProduct(limit, page).then((response) => {
      setProducts(response.data.products);
      setTotalCount(response.data.count);
    });
  }, [page, limit]);
  return (
    <div className={s["interesting-products"]}>
      <h2 className={s["interesting-products__header"]}>Все товары</h2>
      <div className={s["interesting-products__items"]}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        limit={limit}
        totalCount={totalCount}
        currentPage = {page}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default InterestingProducts;

import React, { useEffect, useState } from "react";
import s from "./Products.module.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";
import Sort from "../../../UI/Sort/Sort";
import Pagination from "../../../UI/Pagination/Pagination";

const Products = () => {
  const [searchParams] = useSearchParams();
  const subcategoryId = searchParams.get("subcategoryId");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sort, setSort] = useState({ name: "стандарт" });
  const limit = 6;
  const [page, setPage] = useState(1);
  console.log();

  const sortlist = [
    { value: "price", name: "Цена по возрастанию", order: "ASC" },
    { value: "price", name: "Цена по убыванию", order: "DESC" },
    { value: "updatedAt", name: "Сначала новые", order: "ASC" },
    { value: "updatedAt", name: "Сначала старые", order: "DESC" },
  ];
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
    ProductService.getProductsBySubcategory(
      subcategoryId,
      limit,
      page,
      sort
    ).then((response) => {
      setProducts(response.data.products);
      setTotalCount(response.data.count);
    });
  }, [page, sort]);

  return (
    <div className={s["products-list"]}>
      <div className={s["products-list__header"]}>
        <h2 className={s["products-list__title"]}>Товары по категории</h2>
        <Sort
          value={sort}
          setValue={(obj) => {
            setPage(1);
            setSort(obj);
          }}
          sortList={sortlist}
        />
      </div>

      <div className={s["products-list__items"]}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        limit={limit}
        totalCount={totalCount}
        currentPage={page}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default Products;

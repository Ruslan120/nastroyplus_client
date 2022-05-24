import React, { useEffect, useState } from "react";
import "./Products.scss";
import CustomBtn from "../../../UI/custom-btn/Custom-btn";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";
import Sort from "../../../UI/Sort/Sort";

const Products = () => {
  const [searchParams] = useSearchParams();
  const subcategoryId = searchParams.get("subcategoryId");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sort, setSort] = useState({name: "стандарт"});
  const limit = 6;
  const totalPages = Math.ceil(totalCount / limit);
  const [page, setPage] = useState(1);
  console.log();

  const sortlist = [
    { value: "price", name: "Цена по возрастанию", order: "ASC" },
    { value: "price", name: "Цена по убыванию", order: "DESC" },
    { value: "updatedAt", name: "Сначала новые", order: "ASC" },
    { value: "updatedAt", name: "Сначала старые", order: "DESC" },
  ];

  useEffect(() => {
    console.log("один");
    ProductService.getProductsBySubcategory(
      subcategoryId,
      limit,
      page,
      sort
    ).then((response) => {
      setProducts((prevState) => [...response.data.products]);
      setTotalCount(response.data.count);
    });
  }, [page, sort]);

  return (
    <div className="products-list">
      <div className="products-list__header">
        <h2 className="products-list__title">Товары по категории</h2>
        <Sort
          value={sort}
          setValue={(obj) => setSort(obj)}
          sortList={sortlist}
        />
      </div>

      <div className="products-list__items">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {page < totalPages && (
        <CustomBtn onClick={(e) => setPage((prevState) => ++prevState)}>
          Показать еще
        </CustomBtn>
      )}
    </div>
  );
};

export default Products;

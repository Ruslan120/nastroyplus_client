import React, {useEffect, useState} from 'react';
import "./Categories.scss";
import api from "../../http/index";

const Categories = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        api.get("http://localhost:7000/api/category").then((res) => {
            setCategoryData(res.data)
        })
    }, [])
    return (
        <div className="categories">
            <div className="categories__content">
                <div className="categories__header">КАТАЛОГ</div>
                <div className="categories__items">

                    {categoryData.map(category => <div className="categories__item">
                        <div className="categories__text">
                            {category.name}
                        </div>
                        <div className="subcategory">
                            <ul className="subcategory__items">
                                {category.subcategories.map(subcategory => <li className="subcategory__item">{subcategory.name}</li>)}
                            </ul>
                        </div>
                    </div>)}

                </div>

            </div>

        </div>
    );
};

export default Categories;
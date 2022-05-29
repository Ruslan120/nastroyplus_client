import React from 'react';
import s from "./ProductDescription.module.scss";

const ProductDescription = ({description}) => {
    return (
        <div className={s["description"]}>
            <h3 className={s["description__title"]}>Описание</h3>
            <p className={s["description__text"]}>{description}</p>
        </div>
    );
};

export default ProductDescription;
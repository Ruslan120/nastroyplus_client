import React from 'react';
import s from "./ProductAttributes.module.scss";

const ProductAttributes = (props) => {
    return (
        <div className={s["product-attributes"]}>
            <h3 className={s["product-attributes__title"]}>Характеристики</h3>
            <table className={s["product-attributes__items"]}>
                <tbody>
                {props.attributes?.map((attribute, index) =>
                    <tr key={index} className={s["product-attributes__item"]}>
                        <th className={s["product-attributes__name"]}>
                            <span className={s["product-attributes__decore"]}>
                                <span>{attribute.name}</span>
                            </span>
                        </th>
                        <td className={s["product-attributes__value"]}>
                            {attribute.value}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductAttributes;
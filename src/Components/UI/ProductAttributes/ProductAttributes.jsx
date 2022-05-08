import React from 'react';
import "./ProductAttributes.scss";

const ProductAttributes = (props) => {
    return (
        <div className="product-attributes">
            <h3 className="product-attributes__title">Характеристики</h3>
            <table className="product-attributes__items">
                <tbody>
                {props.attributes.map((attribute, index) =>
                    <tr key={index} className="product-attributes__item">
                        <th className="product-attributes__name">
                            <span className="product-attributes__decore">
                                <span>{attribute.name}</span>
                            </span>
                        </th>
                        <td className="product-attributes__value">
                            {attribute.value}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductAttributes;
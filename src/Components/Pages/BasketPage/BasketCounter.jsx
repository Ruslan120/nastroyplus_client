import React, {useState} from 'react';
import "./BasketCounter.scss"

const BasketCounter = ({count, increment, decrement}) => {

    return (
        <div className="counter">
            <span className="counter__value">{count}</span>
            <div className="counter__controls">
                <span className="counter__up" onClick={increment}><i className="material-icons">expand_less</i></span>
                <span className="counter__down" onClick={decrement}><i className="material-icons">expand_more</i></span>
            </div>
        </div>
    );
};

export default BasketCounter;
import React from 'react';
import s from "./BasketCounter.module.scss"

const BasketCounter = ({count, increment, decrement}) => {

    return (
        <div className={s["counter"]}>
            <span className={s["counter__value"]}>{count}</span>
            <div className={s["counter__controls"]}>
                <span className={s["counter__up"]} onClick={increment}><i className="material-icons">expand_less</i></span>
                {count>1 && <span className={s["counter__down"]} onClick={decrement}><i className="material-icons">expand_more</i></span>}
            </div>
        </div>
    );
};

export default BasketCounter;
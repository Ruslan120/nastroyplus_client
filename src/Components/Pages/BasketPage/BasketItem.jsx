import React, {useEffect, useState} from 'react';
import "./BasketItem.scss";
import BasketCounter from "./BasketCounter";
import {BASE_URL} from "../../../utils/consts"

const BasketItem = ({basket, changeCountBasket, deleteBasket}) => {
    const [counter, setCounter] = useState(basket.count);

    const increment = ()=>{
        setCounter(prevState => ++prevState)
    }
    const decrement = ()=>{
        setCounter(prevState => {
            if(prevState > 1){
                return --prevState  
            }else return prevState
        })
    }
    useEffect(()=>{
        changeCountBasket(basket.id, counter);
    },[counter])

    return (
        <div className="basket-item">
            <img className="basket-item__img"
                 src={`${BASE_URL}/images/${basket.product.image}`}></img>
            <div className="basket-item__name">{basket.product.name}</div>
            <BasketCounter count={basket.count} increment={increment} decrement={decrement}/>
            <div className="basket-item__totalPrice">{(basket.product.price * basket.count).toFixed(2)}</div>
            <div className="basket-item__delete" onClick={event => deleteBasket(basket.id)}><span><i className="material-icons">close</i></span></div>
        </div>
    );
};

export default BasketItem;
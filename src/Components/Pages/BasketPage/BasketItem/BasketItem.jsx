import React, {useEffect, useState} from 'react';
import s from "./BasketItem.module.scss"
import BasketCounter from "../BasketCounter/BasketCounter";
import {BASE_URL} from "../../../../utils/consts"
import { useNavigate } from 'react-router-dom';

const BasketItem = ({basket, changeCountBasket, deleteBasket}) => {
    const [counter, setCounter] = useState(basket.count);
    const navigate = useNavigate();

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
        <div className={s["basket-item"]}>
            <img className={s["basket-item__img"]}
                 src={`${BASE_URL}/images/${basket.product.image}`}></img>
            <div className={s["basket-item__name"]} onClick={()=> navigate(`/product/${basket.product.id}`)}>{basket.product.name}</div>
            <BasketCounter count={basket.count} increment={increment} decrement={decrement}/>
            <div className={s["basket-item__totalPrice"]}>{(basket.product.price * basket.count).toFixed(2)}</div>
            <div className={s["basket-item__delete"]} onClick={event => deleteBasket(basket.id)}><span><i className="material-icons">close</i></span></div>
        </div>
    );
};

export default BasketItem;
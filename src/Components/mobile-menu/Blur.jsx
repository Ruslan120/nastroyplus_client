import React from 'react';
import "./Blur.scss";
const Blur = ({active, setActive}) => {
    return (
            <div className={ active ? "blur blur--active" : "blur"} onClick={()=> setActive((prev)=>!prev)}></div>
    );
};

export default Blur;
import React, {useEffect} from 'react';
import "./Blur.scss";
const Blur = ({active, setActive}) => {
    useEffect(()=>{
        if(active){
            document.body.classList.add("no-scroll");
        }
        else document.body.classList.remove("no-scroll");
    },[active])
    return (
            <div className={ active ? "blur blur--active" : "blur"} onClick={()=> setActive((prev)=>!prev)}></div>
    );
};

export default Blur;
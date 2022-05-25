import React, {useEffect} from 'react';
import s from "./Blur.module.scss";

const Blur = ({active, setActive}) => {
    useEffect(() => {
        if (active) {
            document.body.classList.add("no-scroll");
        } else document.body.classList.remove("no-scroll");
    }, [active])


    return (
        <div className={active ? s["blur"] + " " + s["blur--active"] : s["blur"]} onClick={setActive}></div>
    );
};

export default Blur;
import React, {useEffect, useState} from 'react';
import "./Mobile-menu.scss";
import MenuItem from "./MenuItem";
import api from "../../../http";


const MobileMenu = ({active, setActive}) => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        api.get("http://localhost:7000/api/category").then((res) => {
            setCategoryData(res.data)
        })
    }, [])
    return (
        <div className={active ? "mobile-menu mobile-menu--active" : "mobile-menu"}>
            <div className={"mobile-menu__content"}>
                <div className={"mobile-menu__close"} onClick={() => setActive(prev => !prev)}>
                    <span className="material-icons">
                        close
                    </span>
                </div>
                <div className="mobile-menu__header">Каталог</div>
                <ul className="mobile-menu__items">
                    {categoryData.map((category=><MenuItem key={category.id} name={category.name} subcategories={category.subcategories}/>))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
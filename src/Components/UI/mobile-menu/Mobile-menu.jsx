import React, {useEffect, useState} from 'react';
import s from "./Mobile-menu.module.scss";
import MenuItem from "./MenuItem";
import api from "../../../http";
import {BASE_URL} from "../../../utils/consts"


const MobileMenu = ({active, setActive}) => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        api.get(`${BASE_URL}/api/category`).then((res) => {
            setCategoryData(res.data)
        })
    }, [])
    return (
        <div className={active ? s["mobile-menu"] + " " + s["mobile-menu--active"] : s["mobile-menu"]}>
            <div className={s["mobile-menu__content"]}>
                <div className={s["mobile-menu__close"]} onClick={() => setActive(prev => !prev)}>
                    <span className="material-icons">
                        close
                    </span>
                </div>
                <div className={s["mobile-menu__header"]}>Каталог</div>
                <ul className={s["mobile-menu__items"]}>
                    {categoryData.map((category => <MenuItem key={category.id} name={category.name}
                                                             subcategories={category.subcategories}/>))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
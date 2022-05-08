import React, {useState} from 'react';
import "./MenuItem.scss";

const MenuItem = ({name, subcategories}) => {

    const [isActive, setIsActive] = useState(false);
    const handler = (e) => {
        setIsActive(!isActive);
    }

    return (
        <li className="menu-item" onClick={handler}>
            <div className="menu-item__header">
                {isActive ? <span className="material-icons">
                            keyboard_arrow_up
                        </span> :
                    <span className="material-icons">
                            keyboard_arrow_down
                        </span>}
                <h3>{name}</h3>
            </div>

            {isActive && <div className="submenu">
                <div className="submenu__items" onClick={e => e.stopPropagation()}>
                    {subcategories.map(subcategory=><a href={`/products?subcategoryId=${subcategory.id}`} key={subcategory.id} className="submenu__item">{subcategory.name}</a>)}
                </div>
            </div>}
        </li>
    );
};

export default MenuItem;
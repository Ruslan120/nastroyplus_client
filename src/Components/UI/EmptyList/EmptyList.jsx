import React from 'react';
import s from "./EmptyList.module.scss"

const EmptyList = ({text}) => {
    return (
        <div className={s["empty-list"]}>
            <i className={"material-icons" + " " + s["empty-list__icon"]}>mood_bad</i>
            <h3 className={s["empty-list__text"]}>{text}</h3>
        </div>
    );
};

export default EmptyList;
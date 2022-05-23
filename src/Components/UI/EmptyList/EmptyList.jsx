import React from 'react';
import "./EmptyList.scss"

const EmptyList = ({text}) => {
    return (
        <div className="empty-list">
            <i className="material-icons empty-list__icon">mood_bad</i>
            <h3 className="empty-list__text">{text}</h3>
        </div>
    );
};

export default EmptyList;
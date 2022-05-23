import React from 'react';
import './MySelect.scss'

const MySelect = ({defaultValue, options, onChange}) => {
    return (
        <select className='my-select' defaultValue={defaultValue} onChange={e => {
            onChange(e.target.value)
        }}>
            <option className='my-select__option' disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option => <option className='my-select__option' key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;
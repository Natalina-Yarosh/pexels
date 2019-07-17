import React from 'react';
import style from './Input.module.css';

import Button from '../Button/Button';

const Input = () => {
    return(
        <div className = {style.wrapperSearch}>
            <input className = {style.inputSearch} value = 'Search for free photos'></input>
            <Button />
        </div>
    )
}

export default Input;
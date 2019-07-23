import React from 'react';
import style from './Input.module.css';
import Button from '../Button/Button';
import { useState } from 'react';


const Input = () => {
    const [value, setInput] = useState('Search for free photos');

    const onEnter = (e) => e.key === 'Enter' && alert('Павел, вы '+ value);
 
    return(
        <div className = {style.wrapperSearch}>
            <input 
                className = {style.inputSearch} 
                value = {value} 
                onInput={e => setInput(e.target.value)}
                onKeyPress={e => onEnter(e)}
                title = 'Заполните это поле.'
            ></input>
            <Button value = {value} />
        </div>
    )
}

export default Input;
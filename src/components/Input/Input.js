import React from 'react';
import style from './Input.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';


const Input = (props) => {

 
    const onEnter = (e) => e.key === 'Enter' && alert('Значение: '+ props.value);

    let onNewValuesChange = (e) => {
        let value = e.target.value ;
        props.updateNewValueActionCreator(value)
    }
    console.log(props.value)
    return(
        <div className = {style.wrapperSearch}>
            <input 
                className = {style.inputSearch} 
                value = {props.value} 
               
                onChange = {onNewValuesChange}
                onKeyPress={e => onEnter(e)}
                title = 'Заполните это поле.'
            ></input>
            <Button value = {props.value} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      value: state.valuePictures.value       
    }
    
}
  
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return{
        updateNewValueActionCreator: (value) => {       
        dispatch(updateNewValueActionCreator(value))
      }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);

//export default Input;
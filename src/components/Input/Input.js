import React, { useEffect, useState } from "react";
import style from './Input.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';
import {getPictures} from '../../redux/getPicturesReducer';
import useStaticCallback from '../../redux/useStaticCallback';


const Input = ({ value,  getPictureAction, updateNewValueActionCreator}) => {
    const [query, setQuery] = useState();
      useEffect(() => {
      getPictureAction(query);
    }, [setQuery, getPictureAction, query]);
     
    const search = useStaticCallback(() => {
        setQuery(value)
     }, [value, setQuery])
     
     useEffect(() => {
     document.addEventListener('keypress', search);
     
        return () => {
        document.removeEventListener('keypress', search);
        }
     
     },[search])

    let onNewValuesChange = (e) => {
        let value = e.target.value ;
        updateNewValueActionCreator(value)
    }

    return(
        <div className = {style.wrapperSearch}>
            <input 
                className = {style.inputSearch} 
                value = {value}   
                onChange = {onNewValuesChange}                
                title = 'Заполните это поле.'
            ></input>
            <Button value = {value} getPictureAction = {getPictureAction}/>
        </div>
    )
}

const mapStateToProps = (state) => {   
    return {
      value: state.valuePictures.value       
    }
    
}
  
const mapDispatchToProps = (dispatch) => {    
    return{
        updateNewValueActionCreator: (value) => {       
        dispatch(updateNewValueActionCreator(value))
        },
        getPictureAction: query => dispatch(getPictures(query))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);

import React, { useEffect, useState } from "react";
//import style from './Input.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';
import {getPictures} from '../../redux/getPicturesReducer';
import useStaticCallback from '../../redux/useStaticCallback';
import styled from 'styled-components';

const WrapperSearch = styled.div`
    background: rgba(255,255,255,.25);
    display: flex;
    align-items: center;
    border-radius: 2px;
    
`;

const InputSearch = styled.input`
    background: rgba(255,255,255,0);
    color: #fff;
    border: none;
    font-size: 14px;
    line-height: 18px;   
    padding: 10px 16px;
    width: calc(100% - 10px)!important;
    :focus{
        background: rgba(255,255,255,1);
        color: #000;

    }
`;


const Input = ({ value,  getPictureAction, updateNewValueActionCreator}) => {
    const [query, setQuery] = useState();

    useEffect(() => {
      getPictureAction(query);      
      updateNewValueActionCreator(query)
    }, [ getPictureAction, updateNewValueActionCreator, query]);
     
    const search = useStaticCallback(() => {
        setQuery(value)
     }, [value, setQuery])
     
     
     useEffect(() => {
        
        document.addEventListener('keypress', search);
        
        return () => {
        document.removeEventListener('keypress', search);
        
        }
     
     },[search])
        
    // let onNewValuesChange = (e) => {       
    //     let text = e.target.value ;
    //     updateNewValueActionCreator(text);
    // }  
   
    return(
        <WrapperSearch>
            <InputSearch                
                value = {value}   
                //onChange = {onNewValuesChange}               
                title = 'Заполните это поле.'
            ></InputSearch>
            <Button                 
                value = {value} 
                getPictureAction = {getPictureAction} 
            />
        </WrapperSearch>
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

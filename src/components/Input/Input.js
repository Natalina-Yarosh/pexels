import React, {  useState } from "react";
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';
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
        color: #000
    }
`;


const Input = ({ value,  getPictureAction, updateNewValueActionCreator}) => {
    const [query, setQuery] = useState();
    const [input, setInput] = useState(value);
     
    const handleKeyPress = (input, e) => {
        setInput(e.target.value);
        if(e.key == 'Enter') {
            window.location.hash = `/search/${input}`
            setTimeout((e) =>  updateNewValueActionCreator(input), 0)
        }
        
    }

    return(
        <WrapperSearch>
            <InputSearch                
                value = {input || value}   
                onChange = {(e) => setInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(input,e)}        
                title = 'Заполните это поле.'
                placeholder="Search for free photos"
            ></InputSearch>
            <Button                 
                value = {input} 
                input={input}
                getPictureAction = {getPictureAction}
                updateNewValueActionCreator={updateNewValueActionCreator}
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
        updateNewValueActionCreator: (input) => {       
        dispatch(updateNewValueActionCreator(input))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);

import React from 'react';
import style from './PageSearch.module.css';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import Main from "../Main/Main";
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';


const PageSearch = (props) => {   
  console.log(props.value)
  console.log(props.updateNewValueActionCreator) 
    return(
        <>
            <HeaderTop value = {props.value} updateNewValueActionCreator = {props.updateNewValueActionCreator}/>
            <div className = {style.ContentSearch}>
                <h2>{props.value}</h2>
                <Main value = {props.value}/>                 
          </div>    
        </>  
    )
}

const mapStateToProps = (state) => {
  console.log(state)
    return {
      value: state.valuePictures.value  
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return{
        updateNewValueActionCreator: (value) => {       
        dispatch(updateNewValueActionCreator(value))
      }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);


import React from 'react';
import style from './PageSearch.module.css';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import Main from "../Main/Main";
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';
import {getPictures} from '../../redux/getPicturesReducer';


const PageSearch = (props) => {   
    console.log(props)
    return(
        <>
            <HeaderTop 
                value = {props.value} 
                updateNewValueActionCreator = {props.updateNewValueActionCreator} 
                getPictureAction = {props.getPictureAction}
            />
            <div className = {style.contentSearch}>
                <h2 className = {style.resultSearch}> Images {props.value} </h2>
                <Main 
                  value = {props.value}
                  items = {props.items}
                  getPictureAction = {props.getPictureAction}
                />                 
          </div>    
        </>  
    )
}

const mapStateToProps = (state) => {
  
    return {
      value: state.valuePictures.value,
      items: state.getPictures.data   
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
  
export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);


import React from 'react';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import HeaderBottom from "../Header/HeaderBottom/HeaderBottom";
import Main from '../Main/Main';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';
import {getPictures} from '../../redux/getPicturesReducer';

const PageStart= (props) => {
    return(
        <div>
            <HeaderTop 
                value = {props.value} 
                updateNewValueActionCreator = {props.updateNewValueActionCreator}
                getPictureAction = {props.getPictureAction}
            />
            <HeaderBottom 
                value = {props.value} 
                updateNewValueActionCreator = {props.updateNewValueActionCreator} 
                items = {props.items}
                getPictureAction = {props.getPictureAction}
            />
            <Main 
                value = {props.value} 
                items = {props.items}
                getPictureAction = {props.getPictureAction}
            />
        </div>
        
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
    
  export default connect(mapStateToProps, mapDispatchToProps)(PageStart);
  
  
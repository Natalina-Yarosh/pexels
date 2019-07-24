import React from 'react';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import HeaderBottom from "../Header/HeaderBottom/HeaderBottom";
import Main from '../Main/Main';
import { connect } from 'react-redux';
import {updateNewValueActionCreator} from '../../redux/valuePicturesReducer';

const PageStart= (props) => {
    return(
        <div>
            <HeaderTop value = {props.value} updateNewValueActionCreator = {props.updateNewValueActionCreator}/>
            <HeaderBottom value = {props.value} updateNewValueActionCreator = {props.updateNewValueActionCreator}/>
            <Main value = 'dog'/>
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
      return{
          updateNewValueActionCreator: (value) => {       
          dispatch(updateNewValueActionCreator(value))
        }
      }
  }
    
  export default connect(mapStateToProps, mapDispatchToProps)(PageStart);
  
  
import React from "react";
//import style from './Button.module.css';
import { NavLink } from 'react-router-dom';
//import {getPictures} from '../../redux/getPicturesReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';

const WrapperButtonSearch = styled.div`
    display: inline-block;
    padding: 8px 24px;
    font-size:  0;
`;

const ButtonSearch = styled.button`
    background: none;
    border: none;
    font-size:  0;
`;

const Svg = styled.svg`
    fill: #${props =>props.fill ? '000' : 'fff'};
    font-size: 16px;
    
`;


const Button = ({ value, getPictureAction, updateNewValueActionCreator, input}) => {   
    
    let getPictureSearch = () => {
        updateNewValueActionCreator(input)
    }

    return(
        <WrapperButtonSearch>
             <NavLink to = {`/search/${input}`}
            
             >
                <ButtonSearch onClick = {getPictureSearch} title = 'Search'>            
                    <Svg                    
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </Svg>
                </ButtonSearch>
            </NavLink>
        </WrapperButtonSearch>
    )
}
const mapStateToProps = (state) => {   
    return {
      value: state.valuePictures.value       
    }    
}

  
export default connect(mapStateToProps)(Button);


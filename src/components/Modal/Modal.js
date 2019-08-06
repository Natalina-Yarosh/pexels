import React from "react";
import  style from './Modal.module.css';
import ItemSizeDownloadPicture from './ItemSizeDownloadPicture/ItemSizeDownloadPicture';
import { connect } from 'react-redux';
import {getPictures} from '../../redux/getPicturesReducer';
import styled from 'styled-components';

const WrapperModal = styled.section`
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(12,15,19,.8);
    padding: 30px;
    width: 100%;
    height: 100%;
    z-index: 3;
    display:block 
`;

const Modal = (props) => {   
    
    console.log(props)    
    let resultIdRender = props.items.filter(item => item.id == props.modalId)
    console.log(resultIdRender)
    console.log(resultIdRender[0].src)
 
    
    return(        
        <WrapperModal >        
            <div className = {style.sectionModal}>
                <div>                    
                        <img  
                            onClick = {(e) => props.changeView()}
                            className = {style.pictupeClose} 
                            src = 'https://www.tradeoakbuildingkits.com/wp-content/plugins/portfolio-filter-gallery-premium/img/x-close-icon-white.png' 
                            alt  = '' 
                            />                    
                </div>
                <img 
                   className = {style.pictureModal} 
                   src = {resultIdRender[0].src.large}
                   alt=''
                />                              
                <ItemSizeDownloadPicture resultIdRender = {resultIdRender}/>                  
            
            </div>

        </WrapperModal>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      items: state.getPictures.data,
     
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getPictureAction: query => dispatch(getPictures(query))
    };
  };
  
export default connect( mapStateToProps, mapDispatchToProps)(Modal);

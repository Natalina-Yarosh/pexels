import React from "react";
import  style from './Modal.module.css';
import ItemSizeDownloadPicture from './ItemSizeDownloadPicture/ItemSizeDownloadPicture';
import { connect } from 'react-redux';
import {getPictures} from '../../redux/getPicturesReducer';

const Modal = (props) => {    
      
    let resultIdRender = props.items.filter(item => item.id == props.modalId)
    
    function onClick (){
      props.changeView()
    }

    return(        
        <section  className = {style.wrapperModal}>        
            <div className = {style.sectionModal}>
                <div>                    
                        <img  
                            onClick = {onClick}
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

        </section>
    )
}

const mapStateToProps = state => {    
    return {
      items: state.getPictures.data     
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getPictureAction: query => dispatch(getPictures(query))
    };
  };
  
export default connect( mapStateToProps, mapDispatchToProps)(Modal);

import React from 'react';
import style from './Main.module.css';
import Images from '../Images/Image';

const Main = (props) => {
    
    return(
      <main className = {style.sectionContentPicturs}>
        <Images 
          value = {props.value}
          items = {props.items}
          getPictureAction = {props.getPictureAction}
        />
        
      </main>
    )
    
}

export default Main;
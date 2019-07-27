import React from 'react';
import style from './Main.module.css';
import Images from '../Images/Image';


const Main = (props) => {
    
    return(
      <main className = {style.sectionContentPicturs}>
        <Images 
          value = {props.value}
         
        />
        
      </main>
    )
    
}

export default Main;
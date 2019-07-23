import React from 'react';
import style from './Main.module.css';
import Images from '../Images/Image';

const Main = () => {
    
    return(
      <main className = {style.sectionContentPicturs}>
        <Images />
        {/* <Images />
        <Images /> */}
      </main>
    )
    
}

export default Main;
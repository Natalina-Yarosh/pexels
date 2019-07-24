import React from 'react';
import style from './Main.module.css';
import Images from '../Images/Image';

const Main = (props) => {
    console.log(props.value)
    return(
      <main className = {style.sectionContentPicturs}>
        <Images value = {props.value}/>
        {/* <Images />
        <Images /> */}
      </main>
    )
    
}

export default Main;
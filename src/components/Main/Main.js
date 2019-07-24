import React from 'react';
import style from './Main.module.css';
import Images from '../Images/Image';

const Main = (props) => {
    console.log(props.value)
    console.log(props.items)
    return(
      <main className = {style.sectionContentPicturs}>
        <Images value = {props.value} items = {props.items}/>
        {/* <Images />
        <Images /> */}
      </main>
    )
    
}

export default Main;
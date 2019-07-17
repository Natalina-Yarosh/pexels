import React from 'react';
//import style from'./App.module.css';
import HeaderTop from './components/Header/HeaderTop/HeaderTop';
import ImageContainer from './components/Images/ImageContainer';

function App(props) {
  return (
    <div >
      <HeaderTop />
      <ImageContainer store = {props.store}/>
    </div>
  );
}

export default App;

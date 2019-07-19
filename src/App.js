import React from 'react';
//import style from'./App.module.css';
import HeaderTop from './components/Header/HeaderTop/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom/HeaderBottom';
import Images from './components/Images/Image';

function App(props) {
  return (
    <div >
      <HeaderTop />
      <HeaderBottom />
      <Images />
      <Images />
      <Images />
     
    </div>
  );
}

export default App;

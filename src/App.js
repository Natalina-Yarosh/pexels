import React from 'react';
import style from'./App.module.css';
import HeaderTop from './components/Header/HeaderTop/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom/HeaderBottom';
import Images from './components/Images/Image';
import Modal from './components/Modal/Modal';

function App(props) {
  return (
    <div >
      <HeaderTop />
      <HeaderBottom />
      <section className = {style.sectionContentPicturs}>
        <Images />
        <Images />
        <Images />
      </section>
      <Modal />
     
    </div>
  );
}

export default App;

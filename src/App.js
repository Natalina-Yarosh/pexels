import React from 'react';
import { Route } from 'react-router-dom';
import HeaderTop from './components/Header/HeaderTop/HeaderTop';
import PageStart from './components/PageStart/PageStart';
import PageSearch from './components/PageSearch/PageSearch';
//import Modal from './components/Modal/Modal';

function App(props) {
  return (
    <div>
      <HeaderTop />
      <Route exact path = '/' 
            render = {() => <PageStart store = {props.store} />} />
      <Route path = '/search/' 
            render = {() => <PageSearch store = {props.store}/>} />    
      
      
      
     
      {/* <Modal /> */}
     
    </div>
  );
}

export default App;

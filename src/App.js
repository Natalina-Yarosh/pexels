import React from 'react';
import { Route } from 'react-router-dom';
import PageStart from './components/PageStart/PageStart';
import PageSearch from './components/PageSearch/PageSearch';
import Modal from './components/Modal/Modal';

function App(props) {
  return (
    <div>    
      <Route exact path = '/' 
            render = {() => <PageStart store = {props.store} />} />
      <Route path = '/search/' 
            render = {() => <PageSearch store = {props.store}/>} />  
      <Route path = '/modal/' 
            render = {() => <Modal store = {props.store}/>} />    
          
    </div>
  );
}

export default App;

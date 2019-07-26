import React from 'react';
import { Route, HashRouter  } from 'react-router-dom';
import PageStart from './components/PageStart/PageStart';
import PageSearch from './components/PageSearch/PageSearch';
import Modal from './components/Modal/Modal';

function App(props) {
  return (
    <HashRouter>   
      <Route exact path = '/' 
            render = {() => <PageStart store = {props.store} />} />
      <Route path = '/search/' 
            render = {() => <PageSearch store = {props.store}/>} />  
      <Route path = {'/modal/:id'} 
            render = {(props) => <Modal store = {props.store}/>} />    
          
    </HashRouter>
  );
}

export default App;

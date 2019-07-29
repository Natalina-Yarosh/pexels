import React from 'react';
import { Route, HashRouter  } from 'react-router-dom';
import PageStart from './components/PageStart/PageStart';
import PageSearch from './components/PageSearch/PageSearch';
import Modal from './components/Modal/Modal';

function App(props) {
  return (
    <HashRouter>   
      <Route exact path = '/' 
            render = {(props) => <PageStart {...props} />} />
      <Route path = '/search/' 
            render = {(props) => <PageSearch {...props}/>} />  
      <Route path = {'/modal/:id'} 
            render = {(props) => <Modal {...props}/>} />    
          
    </HashRouter>
  );
}

export default App;

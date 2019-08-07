import React from 'react';
import { Route, HashRouter  } from 'react-router-dom';
import PageStart from './components/PageStart/PageStart';
import PageSearch from './components/PageSearch/PageSearch';

function App(props) {
  return (
    <HashRouter>   
      <Route exact path = '/' 
            render = {(props) => <PageStart {...props} />} />
      <Route   path = '/search/' 
            render = {(props) => <PageSearch {...props}/>} />       
    </HashRouter>
  );
}

export default App;

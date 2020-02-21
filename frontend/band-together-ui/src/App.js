import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';

function App() {
  return (
    <Switch>
      <Route exact path='/'><h1>Band Together</h1></Route>
      <Route path='/about'><AboutPage/></Route>
    </Switch>
  );
}

export default App;

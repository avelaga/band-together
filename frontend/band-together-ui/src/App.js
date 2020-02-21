import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';

function App() {
  return (
    <Switch>
      <Route path='/about'>
        <AboutPage/>
      </Route>
    </Switch>
  );
}

export default App;

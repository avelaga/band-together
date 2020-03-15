import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import SplashPage from './components/pages/SplashPage';
import LocationListPage from './components/pages/LocationListPage';
import LocationDetailPage from './components/pages/LocationDetailPage';
import ArtistListPage from './components/pages/ArtistListPage';
import ArtistDetailPage from './components/pages/ArtistDetailPage';
import ConcertListPage from './components/pages/ConcertListPage';
import ConcertDetailPage from './components/pages/ConcertDetailPage';
import ErrorGif from '../dist/images/error.gif';

const ErrorPage = () => {
  return (
    <div className="body">
      <div style={errorText} >
        <h1> 404: Page Not Found :(</h1>
      </div>
      <img src={ErrorGif} style={errorGif} />
    </div>
  );
};

const errorText = {
  display: 'block',
  margin: 'auto',
  textAlign: 'center',
  color: 'white'
}

const errorGif = {
  display: 'block',
  margin: 'auto',
  height: '50vh'
}

function App() {

  return (
    <Switch>
      <Route exact path='/' exact component={SplashPage} />
      <Route exact path='/about' exact component={AboutPage} />
      <Route exact path='/locations' exact component={LocationListPage} />
      <Route exact path='/locations/:id' exact component={LocationDetailPage} />
      <Route exact path='/artists' exact component={ArtistListPage} />
      <Route exact path='/artists/:id' exact component={ArtistDetailPage} />
      <Route exact path='/concerts' exact component={ConcertListPage} />
      <Route exact path='/concerts/:id' exact component={ConcertDetailPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;

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

const ErrorPage = () => {
  return (
    <h1>404: Page Not Found
           (ᵟຶ︵ ᵟຶ)
    </h1>

  );
};

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

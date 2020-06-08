import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../../../sections/Home/components/Home';
import Position from '../../../sections/Position/components/Position';
import Blog from '../../../sections/Blog/components/Blog';
import Postcard from '../../../sections/Postcard/components/Postcard';
import Podcasts from '../../../sections/Podcasts/components/Podcasts';
import Books from '../../../sections/Books/components/Books';
import Board from '../../../sections/Board/components/Board';
import Weather from '../../../sections/Weather/components/Weather';
import NoMatch from '../../../sections/NoMatch/components/NoMatch';
import MountScript from '../../MountScript/components/MountScript';

const App = () => (
  <div className='app'>
    <HashRouter>
      <div className='app-wrap'>
        <Switch>
          <Route path='/' exact>
            <Header path='/' />
            <Home />
          </Route>

          <Route path='/position' exact>
            <Header path='/position' />
            <Position />
          </Route>

          <Route path='/blog' exact>
            <Header path='/blog' />
            <Blog />
          </Route>

          <Route path='/postcard' exact>
            <Header path='/postcard' />
            <Postcard />
          </Route>

          <Route path='/podcasts' exact>
            <Header path='/podcasts' />
            <Podcasts />
          </Route>

          <Route path='/books' exact>
            <Header path='/books' />
            <Books />
          </Route>

          <Route path='/board' exact>
            <Header path='/board' />
            <Board />
          </Route>

          <Route path='/weather' exact>
            <Header path='/weather' />
            <Weather />
          </Route>

          <Route path='*'>
            <Header />
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </HashRouter>
    <MountScript />
  </div>
);

export default App;

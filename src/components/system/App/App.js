import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../../sections/Home/Home';
import Position from '../../sections/Position/Position';
import Blog from '../../sections/Blog/Blog';
import Postcard from '../../sections/Postcard/Postcard';
import Podcasts from '../../sections/Podcasts/Podcasts';
import Books from '../../sections/Books/Books';
import Board from '../../sections/Board/Board';
import Weather from '../../sections/Weather/Weather';

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
        </Switch>

        <Footer />
      </div>
    </HashRouter>
  </div>
);

export default App;
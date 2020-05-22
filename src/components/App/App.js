import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Home/Home';
import Position from '../Position/Position';
import Blog from '../Blog/Blog';
import Postcard from '../Postcard/Postcard';
import Podcasts from '../Podcasts/Podcasts';
import Books from '../Books/Books';
import Board from '../Board/Board';
import Weather from '../Weather/Weather';

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

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from '../Home/Home';
import Position from '../Position/Position';
import Blog from '../Blog/Blog';
import Postcard from '../Postcard/Postcard';
import Podcasts from '../Podcasts/Podcasts';
import Books from '../Books/Books';
import Board from '../Board/Board';

const App = () => (
  <div className='app'>
    <HashRouter>
      <div className='app-wrap'>
        <Switch>
          <Route path='/' exact>
            <AppHeader path='/' />
            <Home />
          </Route>
          <Route path='/position' exact>
            <AppHeader path='/position' />
            <Position />
          </Route>
          <Route path='/blog' exact>
            <AppHeader path='/blog' />
            <Blog />
          </Route>
          <Route path='/postcard' exact>
            <AppHeader path='/postcard' />
            <Postcard />
          </Route>
          <Route path='/podcasts' exact>
            <AppHeader path='/podcasts' />
            <Podcasts />
          </Route>
          <Route path='/books' exact>
            <AppHeader path='/books' />
            <Books />
          </Route>
          <Route path='/board' exact>
            <AppHeader path='/board' />
            <Board />
          </Route>
        </Switch>
        <AppFooter />
      </div>
    </HashRouter>
  </div>
);

export default App;

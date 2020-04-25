import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Position from './Position/Position';
import Blog from './Blog/Blog';
import Term from './Term/Term';
import Podcasts from './Podcasts/Podcasts';
import Books from './Books/Books';
import Board from './Board/Board';

const App = () => (
  <div className="app">
    <Router history={history}>
      <div className="app-wrap">
        <Switch>
          <Route path="/" exact>
            <Header path="/" />
            <Home />
          </Route>
          <Route path="/position" exact>
            <Header path="/position" />
            <Position />
          </Route>
          <Route path="/blog" exact>
            <Header path="/blog" />
            <Blog />
          </Route>
          <Route path="/term" exact>
            <Header path="/term" />
            <Term />
          </Route>
          <Route path="/podcasts" exact>
            <Header path="/podcasts" />
            <Podcasts />
          </Route>
          <Route path="/books" exact>
            <Header path="/books" />
            <Books />
          </Route>
          <Route path="/board" exact>
            <Header path="/board" />
            <Board />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;

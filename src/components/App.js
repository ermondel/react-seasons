import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import Position from './Position';
import Blog from './Blog';
import Term from './Term';
import Podcasts from './Podcasts';
import Books from './Books';

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
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;

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
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/position" exact component={Position} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/term" exact component={Term} />
          <Route path="/podcasts" exact component={Podcasts} />
          <Route path="/books" exact component={Books} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;

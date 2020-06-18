import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import {
  Home,
  Position,
  Blog,
  Postcard,
  Podcasts,
  Books,
  Board,
  Weather,
  Posts,
  AddPost,
  ReadPost,
  DeletePost,
  NoMatch,
} from '../../../sections';

const Routers = () => (
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/position' exact component={Position} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/postcard' exact component={Postcard} />
      <Route path='/podcasts' exact component={Podcasts} />
      <Route path='/books' exact component={Books} />
      <Route path='/board' exact component={Board} />
      <Route path='/weather' exact component={Weather} />
      <Route path='/posts' exact component={Posts} />
      <Route path='/posts/add' exact component={AddPost} />
      <Route path='/posts/:id' exact component={ReadPost} />
      <Route path='/posts/delete/:id' exact component={DeletePost} />
      <Route path='*' component={NoMatch} />
    </Switch>
    <Footer />
  </HashRouter>
);

export default Routers;

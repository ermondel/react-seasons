import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Add from './Add';
import View from './View';
import Remove from './Remove';

const Content = () => (
  <div className='content'>
    <Switch>
      <Route path='/posts' exact component={List} />
      <Route path='/posts/add' exact component={Add} />
      <Route path='/posts/:id' exact component={View} />
    </Switch>
    <Remove />
  </div>
);

export default Content;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../../app/App/comp/Header';
import List from './List/List';
import Add from './Add/Add';
import Read from './Read/Read';
import Delete from './Delete/Delete';

const Posts = (props) => (
  <div className='app-main'>
    <Header path={props.location.pathname} />

    <Switch>
      <Route path='/posts' exact component={List} />
      <Route path='/posts/add' exact component={Add} />
      <Route path='/posts/:id' exact component={Read} />
      <Route path='/posts/delete/:id' exact component={Delete} />
    </Switch>
  </div>
);

export default Posts;

import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Accordion from './Accordion';
import List from './List';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';

const Content = (props) => (
  <div className='content'>
    <div className='content-wrap'>
      <h2 className='section-title'>Widgets</h2>

      <div className='widgets-nav'>
        {props.path === '/accordion' ? (
          <span className='widgets-nav__item--active'>Accordion</span>
        ) : (
          <Link to='/widgets/accordion' className='widgets-nav__item'>
            Accordion
          </Link>
        )}

        {props.path === '/list' ? (
          <span className='widgets-nav__item--active'>List</span>
        ) : (
          <Link to='/widgets/list' className='widgets-nav__item'>
            List
          </Link>
        )}

        {props.path === '/dropdown' ? (
          <span className='widgets-nav__item--active'>Dropdown</span>
        ) : (
          <Link to='/widgets/dropdown' className='widgets-nav__item'>
            Dropdown
          </Link>
        )}

        {props.path === '/translate' ? (
          <span className='widgets-nav__item--active'>Translate</span>
        ) : (
          <Link to='/widgets/translate' className='widgets-nav__item'>
            Translate
          </Link>
        )}
      </div>

      <Switch>
        <Redirect exact from='/widgets' to='/widgets/accordion' />
        <Route path='/widgets/accordion' exact component={Accordion} />
        <Route path='/widgets/list' exact component={List} />
        <Route path='/widgets/dropdown' exact component={Dropdown} />
        <Route path='/widgets/translate' exact component={Translate} />
        <Route path='/widgets/*' component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Content;

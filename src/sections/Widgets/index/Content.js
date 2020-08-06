import React from 'react';
import { Route, Switch, Redirect, Link, useLocation } from 'react-router-dom';
import Accordion from './Accordion';
import List from './List';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';
import { includesPath } from '../../../lib/path';

const Content = () => {
  const pathname = useLocation().pathname;

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2 className='section-title'>Widgets</h2>

        <div className='widgets-nav'>
          {includesPath('/widgets/accordion', pathname) ? (
            <span className='widgets-nav__item--active'>Accordion</span>
          ) : (
            <Link to='/widgets/accordion' className='widgets-nav__item'>
              Accordion
            </Link>
          )}

          {includesPath('/widgets/list', pathname) ? (
            <span className='widgets-nav__item--active'>List</span>
          ) : (
            <Link to='/widgets/list' className='widgets-nav__item'>
              List
            </Link>
          )}

          {includesPath('/widgets/dropdown', pathname) ? (
            <span className='widgets-nav__item--active'>Dropdown</span>
          ) : (
            <Link to='/widgets/dropdown' className='widgets-nav__item'>
              Dropdown
            </Link>
          )}

          {includesPath('/widgets/translate', pathname) ? (
            <span className='widgets-nav__item--active'>Translate</span>
          ) : (
            <Link to='/widgets/translate' className='widgets-nav__item'>
              Translate
            </Link>
          )}
        </div>

        <Switch>
          <Redirect exact from='/widgets' to='/widgets/accordion' />
          <Route path='/widgets/accordion' component={Accordion} />
          <Route path='/widgets/list' component={List} />
          <Route path='/widgets/dropdown' component={Dropdown} />
          <Route path='/widgets/translate' component={Translate} />
          <Route path='/widgets/*' component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Content;

import React from 'react';
import { Switch, Route, Redirect, Link, useLocation } from 'react-router-dom';
import Header from '../../../main/Header';
import SidebarInfo from '../../../util/SidebarInfo/SidebarInfo';
import { includesPath } from '../../../lib/path';
import Accordion from './Accordion';
import List from './List';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';

const Widgets = (props) => {
  const pathParts = props.location ? props.location.pathname.split('/') : [];
  const pathName = pathParts ? '/' + pathParts[1] : '';
  const pathname = useLocation().pathname;

  return (
    <div className='app-main'>
      <Header path={pathName} />

      <main className='main'>
        <div className='sidebar'>
          <div className='sidebar-wrap'>
            <SidebarInfo list='React' />
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default Widgets;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../../main/Header';
import SidebarInfo from '../../../util/SidebarInfo/SidebarInfo';
import NavItemLi from '../../../util/NavItem/NavItemLi';
import Accordion from './Accordion';
import List from './List';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';

const Widgets = (props) => {
  const pathParts = props.location ? props.location.pathname.split('/') : [];
  const pathName = pathParts ? '/' + pathParts[1] : '';

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

            <ul className='widgets-nav'>
              <NavItemLi to='/widgets/accordion' block='widgets-nav'>
                Accordion
              </NavItemLi>

              <NavItemLi to='/widgets/list' block='widgets-nav'>
                List
              </NavItemLi>

              <NavItemLi to='/widgets/dropdown' block='widgets-nav'>
                Dropdown
              </NavItemLi>

              <NavItemLi to='/widgets/translate' block='widgets-nav'>
                Translate
              </NavItemLi>
            </ul>

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

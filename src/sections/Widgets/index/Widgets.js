import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../../main/Header';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import NavItemLi from '../../../special/NavItem/NavItemLi';
import Accordion from './Accordion';
import Wikipedia from './Wikipedia';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';
import Footer from '../../../main/Footer';

const Widgets = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <div className='sidebar'>
        <SidebarInfo list='React, React Hooks, Axios, Wikipedia API, Cloud Translation API' />
      </div>
    </div>

    <div className='content-container'>
      <main className='main'>
        <h2 className='main__title'>Widgets</h2>

        <ul className='widgets-nav'>
          <NavItemLi to='/widgets/accordion' block='widgets-nav'>
            Accordion
          </NavItemLi>

          <NavItemLi to='/widgets/wikipedia' block='widgets-nav'>
            Wikipedia
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
          <Route path='/widgets/wikipedia' component={Wikipedia} />
          <Route path='/widgets/dropdown' component={Dropdown} />
          <Route path='/widgets/translate' component={Translate} />
          <Route path='/widgets/*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  </React.Fragment>
);

export default Widgets;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import NavItem from '@subcomponents/NavItem';
import TechBlock from '@sidebar/TechBlock';
import Accordion from './Accordion';
import Wikipedia from './Wikipedia';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';

const Widgets = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <div className='sidebar'>
        <TechBlock list='React, React Hooks, Axios, Wikipedia API, Cloud Translation API' />
      </div>
    </div>

    <div className='content-container'>
      <main className='main'>
        <h2 className='main__title'>Widgets</h2>

        <ul className='widgets-nav'>
          <NavItem to='/widgets/accordion' block='widgets-nav'>
            Accordion
          </NavItem>

          <NavItem to='/widgets/wikipedia' block='widgets-nav'>
            Wikipedia
          </NavItem>

          <NavItem to='/widgets/dropdown' block='widgets-nav'>
            Dropdown
          </NavItem>

          <NavItem to='/widgets/translate' block='widgets-nav'>
            Translate
          </NavItem>
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

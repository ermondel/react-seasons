import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavItem from '@subcomponents/NavItem';
import Accordion from '../subcomp/Accordion';
import Wikipedia from '../subcomp/Wikipedia';
import Dropdown from '../subcomp/Dropdown';
import Translate from '../subcomp/Translate';
import NotFound from '../subcomp/NotFound';

const WidgetsContent = () => (
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
);

export default WidgetsContent;

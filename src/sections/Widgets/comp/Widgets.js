import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WidgetsSidebar from './WidgetsSidebar';
import WidgetsContent from './WidgetsContent';

const Widgets = () => (
  <Fragment documentTitle='Widgets'>
    <div className='side-container'>
      <MainNavigation />
      <WidgetsSidebar />
    </div>

    <div className='content-container'>
      <WidgetsContent />
      <Footer />
    </div>
  </Fragment>
);

export default Widgets;

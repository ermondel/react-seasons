import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WidgetsSidebar from './WidgetsSidebar';
import WidgetsContent from './WidgetsContent';

const Widgets = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <WidgetsSidebar />
    </div>

    <div className='content-container'>
      <WidgetsContent />
      <Footer />
    </div>
  </React.Fragment>
);

export default Widgets;

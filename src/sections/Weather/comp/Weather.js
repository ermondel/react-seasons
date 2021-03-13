import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WeatherSidebar from './WeatherSidebar';
import WeatherContent from './WeatherContent';

const Weather = () => (
  <Fragment documentTitle='Weather'>
    <div className='side-container'>
      <MainNavigation />
      <WeatherSidebar />
    </div>

    <div className='content-container'>
      <WeatherContent />
      <Footer />
    </div>
  </Fragment>
);

export default Weather;

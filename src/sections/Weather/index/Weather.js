import React from 'react';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WeatherSidebar from './WeatherSidebar';
import WeatherForecast from './WeatherForecast';

const Weather = () => (
  <React.Fragment>
    <div className='side-container'>
      <MainNavigation />
      <WeatherSidebar />
    </div>

    <div className='content-container'>
      <WeatherForecast />
      <Footer />
    </div>
  </React.Fragment>
);

export default Weather;

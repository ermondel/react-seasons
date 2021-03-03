import React from 'react';
import Header from '../../../main/Header';
import WeatherSidebar from './WeatherSidebar';
import WeatherForecast from './WeatherForecast';
import Footer from '../../../main/Footer';

const Weather = () => (
  <React.Fragment>
    <div className='side-container'>
      <Header />
      <WeatherSidebar />
    </div>

    <div className='content-container'>
      <WeatherForecast />
      <Footer />
    </div>
  </React.Fragment>
);

export default Weather;

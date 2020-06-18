import React from 'react';
import Header from '../../../app/App/comp/Header';
import WeatherSidebar from './WeatherSidebar';
import WeatherForecast from './WeatherForecast';

const Weather = () => (
  <div className='app-main'>
    <Header path='/weather' />
    <main className='main'>
      <WeatherSidebar />
      <WeatherForecast />
    </main>
  </div>
);

export default Weather;

import React from 'react';
import Header from '../../../main/Header';
import WeatherSidebar from './WeatherSidebar';
import WeatherForecast from './WeatherForecast';

const Weather = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <WeatherSidebar />
      <WeatherForecast />
    </main>
  </div>
);

export default Weather;

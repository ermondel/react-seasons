import React from 'react';
import WeatherSidebar from './WeatherSidebar';
import WeatherForecast from './WeatherForecast';

const Weather = () => (
  <main className='main'>
    <WeatherSidebar />
    <WeatherForecast />
  </main>
);

export default Weather;

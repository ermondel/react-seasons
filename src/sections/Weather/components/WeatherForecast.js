import React from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import WeatherInfobar from './WeatherInfobar';
import WeatherList from './WeatherList';

const WeatherForecast = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Weather</h2>

      <WeatherSearchForm />
      <WeatherInfobar />
      <WeatherList />
    </div>
  </div>
);

export default WeatherForecast;

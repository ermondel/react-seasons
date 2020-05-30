import React from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import WeatherList from './WeatherList';
import WeatherError from './WeatherError';

const WeatherForecast = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Weather</h2>

      <WeatherSearchForm />
      <WeatherError />
      <WeatherList />
    </div>
  </div>
);

export default WeatherForecast;

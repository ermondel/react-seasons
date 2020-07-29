import React from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import ForecastError from './ForecastError';
import WeatherList from './WeatherList';
import CityLocation from './CityLocation';

const WeatherForecast = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2 className='section-title'>Weather</h2>

      <WeatherSearchForm />
      <ForecastError />
      <WeatherList />
      <CityLocation />
    </div>
  </div>
);

export default WeatherForecast;

import React from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import WeatherInfobar from './WeatherInfobar';
import WeatherList from './WeatherList';
import CityLocation from './CityLocation';

const WeatherForecast = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Weather</h2>

      <WeatherSearchForm />
      <WeatherInfobar />
      <WeatherList />
      <CityLocation />
    </div>
  </div>
);

export default WeatherForecast;

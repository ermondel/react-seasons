import React from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import ForecastError from './ForecastError';
import WeatherList from './WeatherList';
import CityLocation from './CityLocation';

const WeatherForecast = () => (
  <main className='main'>
    <h2 className='main__title'>Weather</h2>

    <WeatherSearchForm />
    <ForecastError />
    <WeatherList />
    <CityLocation />
  </main>
);

export default WeatherForecast;

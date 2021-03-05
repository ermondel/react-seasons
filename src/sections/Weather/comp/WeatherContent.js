import React from 'react';
import WeatherSearchForm from '../subcomp/WeatherSearchForm';
import ForecastError from '../subcomp/ForecastError';
import WeatherList from '../subcomp/WeatherList';
import CityLocation from '../subcomp/CityLocation';

const WeatherContent = () => (
  <main className='main'>
    <h2 className='main__title'>Weather</h2>

    <WeatherSearchForm />
    <ForecastError />
    <WeatherList />
    <CityLocation />
  </main>
);

export default WeatherContent;

import React from 'react';
import MountMap from './MountMap';
import ForecastViewMode from './ForecastViewMode';
import TimePeriod from './TimePeriod';
import TechBlock from '@sidebar/TechBlock';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <ForecastViewMode />
    <TimePeriod />
    <TechBlock list='React, Redux, Axios, Redux Thunk, React Portals, React Sparklines, OpenWeatherMap API, Google Maps API' />
    <MountMap />
  </div>
);

export default WeatherSidebar;

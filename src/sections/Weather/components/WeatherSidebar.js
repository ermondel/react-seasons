import React from 'react';
import ForecastViewMode from './ForecastViewMode';
import SidebarInfo from '../../../app/SidebarInfo/components/SidebarInfo';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ForecastViewMode />
      <SidebarInfo list='React, Redux, React Hooks, Redux Thunk, Axios, OpenWeatherMap API, Google Maps API' />
    </div>
  </div>
);

export default WeatherSidebar;

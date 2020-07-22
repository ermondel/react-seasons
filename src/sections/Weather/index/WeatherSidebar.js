import React from 'react';
import MountMap from './MountMap';
import ForecastViewMode from './ForecastViewMode';
import TimePeriod from './TimePeriod';
import SidebarInfo from '../../../util/SidebarInfo/SidebarInfo';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ForecastViewMode />
      <TimePeriod />
      <SidebarInfo list='React, Redux, Axios, Redux Thunk, React Portals, React Sparklines, OpenWeatherMap API, Google Maps API' />
      <MountMap />
    </div>
  </div>
);

export default WeatherSidebar;

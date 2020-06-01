import React from 'react';
import ForecastViewMode from './ForecastViewMode';
import SidebarInfo from '../../../app/SidebarInfo/components/SidebarInfo';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ForecastViewMode />
      <SidebarInfo list='React' />
    </div>
  </div>
);

export default WeatherSidebar;

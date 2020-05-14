import React from 'react';
import SidebarInfo from '../SidebarInfo';

const PositionDetails = ({ geo }) => {
  const content = geo ? (
    <div className='details'>
      <h3 className='details__title'>Your coordinates</h3>
      <p className='details__item'>
        <span className='l'>Latitude</span>{' '}
        <span className='r'>{geo.latitude.toFixed(6)}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Longitude</span>{' '}
        <span className='r'>{geo.longitude.toFixed(6)}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Accuracy</span>{' '}
        <span className='r'>{geo.accuracy}</span>
      </p>
    </div>
  ) : null;

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        {content}
        <SidebarInfo list='React, React Hooks, Geolocation API' />
      </div>
    </div>
  );
};

export default PositionDetails;

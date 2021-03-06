import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import InfoBlock from '@sidebar/InfoBlock';

const PositionSidebar = ({ geo }) => (
  <div className='sidebar'>
    {geo && (
      <InfoBlock
        title='Your coordinates'
        data={{
          latitude: geo.latitude.toFixed(6),
          longitude: geo.longitude.toFixed(6),
          accuracy: geo.accuracy,
        }}
      />
    )}

    <TechBlock list='React, React Hooks, Geolocation API' />
  </div>
);

export default PositionSidebar;

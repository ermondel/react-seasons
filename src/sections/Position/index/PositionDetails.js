import React from 'react';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import DetailsBlock from '../../../special/DetailsBlock/DetailsBlock';

const PositionDetails = ({ geo }) => (
  <div className='sidebar'>
    {geo ? (
      <DetailsBlock
        title='Your coordinates'
        latitude={geo.latitude.toFixed(6)}
        longitude={geo.longitude.toFixed(6)}
        accuracy={geo.accuracy}
      />
    ) : null}
    <SidebarInfo list='React, React Hooks, Geolocation API' />
  </div>
);

export default PositionDetails;

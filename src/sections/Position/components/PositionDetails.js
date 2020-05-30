import React from 'react';
import SidebarInfo from '../../../app/SidebarInfo/components/SidebarInfo';
import DetailsBlock from '../../../app/DetailsBlock/components/DetailsBlock';

const PositionDetails = ({ geo }) => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
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
  </div>
);

export default PositionDetails;
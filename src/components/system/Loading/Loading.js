import React from 'react';
import imgGearMain from './img/Gear-0.2s-101px.gif';
import imgGearSidebar from './img/Gear-0.3s-61px.gif';

const Loading = ({ type }) => {
  switch (type) {
    case 'main':
      return (
        <div className='loading-bar-main'>
          <img src={imgGearMain} alt='loading bar' />
          <p>Request data from a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      );

    case 'sidebar':
      return (
        <div className='loading-bar-sidebar'>
          <img src={imgGearSidebar} alt='loading bar' />
        </div>
      );

    case 'main-img':
      return <img src={imgGearMain} alt='loading bar' />;

    default:
      return 'Loading...';
  }
};

export default Loading;

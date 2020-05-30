import React from 'react';
import imgGearMain from '../assets/Gear-0.2s-101px.gif';
import imgGearSidebar from '../assets/Gear-0.3s-61px.gif';

const LoadingBar = ({ type }) => {
  switch (type) {
    case 'main':
      return (
        <div className='LoadingBar-bar-main'>
          <img src={imgGearMain} alt='LoadingBar bar' />
          <p>Request data from a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      );

    case 'sidebar':
      return (
        <div className='LoadingBar-bar-sidebar'>
          <img src={imgGearSidebar} alt='LoadingBar bar' />
        </div>
      );

    case 'main-img':
      return <img src={imgGearMain} alt='LoadingBar bar' />;

    default:
      return 'LoadingBar...';
  }
};

export default LoadingBar;

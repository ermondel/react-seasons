import React from 'react';
import imgGearMain from '../style/img/Gear-0.2s-101px.gif';

const LoadingBar = () => (
  <div className="loading-bar">
    <img src={imgGearMain} alt="loading bar" />
    <p>Request data from a remote server</p>
    <p>This may take some time</p>
    <p>Please wait</p>
  </div>
);

export default LoadingBar;

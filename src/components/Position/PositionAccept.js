import React from 'react';
import imgCompass from '../../style/img/compass.png';
import imgGearMain from '../../style/img/Gear-0.2s-101px.gif';

const PositionAccept = ({ wait, error }) => {
  let content = null;

  if (wait && !error) {
    content = (
      <div className='accept-card'>
        <img src={imgGearMain} alt='loading bar' />
        <p>Please accept location request</p>
      </div>
    );
  }

  if (!wait && error) {
    content = (
      <div className='accept-card'>
        <p className='accept-card_error'>{error}</p>
      </div>
    );
  }

  if (!wait && !error) {
    content = (
      <div className='accept-card'>
        <img src={imgCompass} alt='Compass' />
      </div>
    );
  }

  return (
    <div className='content'>
      <div className='content-wrap'>{content}</div>
    </div>
  );
};

export default PositionAccept;

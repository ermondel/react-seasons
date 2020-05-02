import React from 'react';
import imgCompass from '../../style/img/compass.png';
import imgGearMain from '../../style/img/Gear-0.2s-101px.gif';

const AcceptCard = ({ wait, error }) => {
  if (wait && !error) {
    return (
      <div className='accept-card'>
        <img src={imgGearMain} alt='loading bar' />
        <p>Please accept location request</p>
      </div>
    );
  }

  if (!wait && error) {
    return (
      <div className='accept-card'>
        <p className='accept-card_error'>{error}</p>
      </div>
    );
  }

  return (
    <div className='accept-card'>
      <img src={imgCompass} alt='Compass' />
    </div>
  );
};

export default AcceptCard;

import React from 'react';
import Loading from '../Loading/Loading';
import imgCompass from './img/compass.png';

const PositionAccept = ({ wait, error }) => {
  let content = null;

  if (wait && !error) {
    content = (
      <div className='accept-card'>
        <Loading type='main-img' />
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

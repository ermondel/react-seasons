import React from 'react';
import { SpinnerBig } from '../../../util/UtilImg/UtilImg';
import imgCompass from '../assets/compass.png';
import isChrome from '../resources/isChrome';

const renderRequest = () => (
  <div className='accept-card'>
    <SpinnerBig />
    <p>Please accept location request</p>
  </div>
);

const renderError = (error) => (
  <div className='accept-card'>
    <p className='accept-card_error'>{error}</p>
  </div>
);

const renderCompass = () => (
  <div className='accept-card'>
    <img src={imgCompass} alt='Compass' />
  </div>
);

const renderWarning = () => (
  <div className='accept-card'>
    <p>
      The positioning function is disabled. Please open this page in Google Chrome
    </p>
  </div>
);

const PositionAccept = ({ wait, error }) => {
  if (!isChrome) {
    return (
      <div className='content'>
        <div className='content-wrap'>{renderWarning()}</div>
      </div>
    );
  }

  if (wait && !error) {
    return (
      <div className='content'>
        <div className='content-wrap'>{renderRequest()}</div>
      </div>
    );
  }

  if (!wait && error) {
    return (
      <div className='content'>
        <div className='content-wrap'>{renderError(error)}</div>
      </div>
    );
  }

  return (
    <div className='content'>
      <div className='content-wrap'>{renderCompass()}</div>
    </div>
  );
};

export default PositionAccept;

import React from 'react';
import { SpinnerBig } from '../../../special/UtilImg/UtilImg';
import imgCompass from '../assets/compass.png';
import { isChrome } from '../../../lib/browser';

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
    return <main className='main'>{renderWarning()}</main>;
  }

  if (wait && !error) {
    return <main className='main'>{renderRequest()}</main>;
  }

  if (!wait && error) {
    return <main className='main'>{renderError(error)}</main>;
  }

  return <main className='main'>{renderCompass()}</main>;
};

export default PositionAccept;

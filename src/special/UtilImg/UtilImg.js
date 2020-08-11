import React from 'react';
import imgRemoteError from './assets/remote-error.png';
import spinnerBigBrown from './assets/spinner-big-brown.gif';
import spinnerSmallBlack from './assets/spinner-small-black.gif';

export const ErrorRemote = () => {
  return <img src={imgRemoteError} alt='The remote server is not responding' />;
};

export const SpinnerBig = () => {
  return <img src={spinnerBigBrown} alt='loading bar' />;
};

export const SpinnerSmall = () => {
  return <img src={spinnerSmallBlack} alt='loading bar' />;
};

import React from 'react';
import imgRemoteError from '@assets/service/remote-error.png';
import imgSpinnerBigBrown from '@assets/service/spinner-big-brown.gif';
import imgSpinnerSmallBlack from '@assets/service/spinner-small-black.gif';

export const ErrorRemote = () => {
  return <img src={imgRemoteError} alt='The remote server is not responding' />;
};

export const SpinnerBig = () => {
  return <img src={imgSpinnerBigBrown} alt='loading bar' />;
};

export const SpinnerSmall = () => {
  return <img src={imgSpinnerSmallBlack} alt='loading bar' />;
};

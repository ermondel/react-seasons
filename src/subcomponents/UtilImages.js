import React from 'react';
import imgRemoteError from '@images/util/remote-error.png';
import imgSpinnerBigBrown from '@images/util/spinner-big-brown.gif';
import imgSpinnerSmallBlack from '@images/util/spinner-small-black.gif';

export const ErrorRemote = () => {
  return <img src={imgRemoteError} alt='The remote server is not responding' />;
};

export const SpinnerBig = () => {
  return <img src={imgSpinnerBigBrown} alt='loading bar' />;
};

export const SpinnerSmall = () => {
  return <img src={imgSpinnerSmallBlack} alt='loading bar' />;
};

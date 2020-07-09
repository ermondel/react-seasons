import React from 'react';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

const LoadingError = () => (
  <div className='posts-error'>
    <ErrorRemoteImg />
    <div>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

export default LoadingError;

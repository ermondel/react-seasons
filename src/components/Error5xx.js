import React from 'react';
import imgRemoteError from '../style/img/remote-error.png';

const Error5xx = () => (
  <div className='remote-error'>
    <img src={imgRemoteError} alt='The remote server is not responding' />
    <p>The remote server is not responding</p>
    <p>Perhaps it is overloaded with requests</p>
    <p>Please come back later</p>
  </div>
);

export default Error5xx;

import React from 'react';
import imgRemoteError from '../style/img/remote-error.png';

const Error5xx = ({ imgOnly }) => {
  if (!imgOnly) {
    return (
      <div className='remote-error'>
        <img
          src={imgRemoteError}
          alt='The remote server is not responding'
          title='The remote server is not responding'
        />
        <p>The remote server is not responding</p>
        <p>Perhaps it is overloaded with requests</p>
        <p>Please come back later</p>
      </div>
    );
  } else {
    return (
      <div className='remote-error'>
        <img
          src={imgRemoteError}
          alt='The remote server is not responding'
          title='The remote server is not responding'
        />
      </div>
    );
  }
};

export default Error5xx;

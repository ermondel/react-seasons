import React from 'react';
import imgRemoteError from '../assets/remote-error.png';

const ErrorMessage = ({ type, tip }) => {
  switch (type) {
    case 'remote':
      return (
        <div className='remote-error'>
          <img
            src={imgRemoteError}
            alt='The remote server is not responding'
            title='The remote server is not responding'
          />
          {tip && (
            <div>
              <p>The remote server is not responding</p>
              <p>Perhaps it is overloaded with requests</p>
              <p>Please come back later</p>
            </div>
          )}
        </div>
      );

    default:
      return <div className='error'>Error</div>;
  }
};

export default ErrorMessage;

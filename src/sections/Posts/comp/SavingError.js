import React from 'react';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

const SavingError = () => (
  <div className='posts-error'>
    <ErrorRemoteImg />
    <div>
      <p>Error saving</p>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

export default SavingError;

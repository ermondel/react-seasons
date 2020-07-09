import React from 'react';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

const AuthError = () => (
  <div className='posts-error'>
    <ErrorRemoteImg />
    <div>
      <p>Access is denied</p>
      <p>Please contact the administrator</p>
    </div>
  </div>
);

export default AuthError;

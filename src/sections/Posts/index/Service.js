import React from 'react';
import { ErrorRemote, SpinnerBig } from '../../../util/UtilImg/UtilImg';
import { Link } from 'react-router-dom';

export const RemoveSpinner = ({ title }) => (
  <div className='remove-post'>
    <p className='remove-post__title'>{title}</p>
    <div className='remove-post__spinner-img'>
      <SpinnerBig />
    </div>
    <div className='remove-post__spinner-text'>
      <p>Request to a remote server</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const LoadingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>
        Request data from a remote server
      </p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const AuthSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__auth-message'>Authorization in progress</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const SavingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>
        Saving data to the remote server
      </p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const RemoveError = ({ title }) => (
  <div className='remove-post'>
    <p className='remove-post__title'>{title}</p>
    <div className='remove-post__error-img'>
      <ErrorRemote />
    </div>
    <div className='remove-post__error-text'>
      <p>The remote server is not responding.</p>
      <p>Perhaps it is overloaded with requests.</p>
      <p>Please come back later.</p>
    </div>
  </div>
);

export const LoadingError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

export const AuthError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>Access is denied</p>
      <p>Please contact the administrator</p>
    </div>
  </div>
);

export const SavingError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>Error saving</p>
      <p>The remote server is not responding</p>
      <p>Please come back later</p>
      <p>
        <Link to={'/posts'} className='pst-list__link-back'>
          Go back to the list
        </Link>
      </p>
    </div>
  </div>
);

export const RemoveSuccess = ({ title }) => (
  <div className='remove-post'>
    <p className='remove-post__title'>{title}</p>
    <p className='remove-post__success'>Post successfully deleted</p>
  </div>
);

export const AuthSuccess = () => <p>Authorization successful</p>;

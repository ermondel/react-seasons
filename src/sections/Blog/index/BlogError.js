import React from 'react';
import { connect } from 'react-redux';
import { ErrorRemote } from '../../../special/UtilImg/UtilImg';

const BlogError = ({ error }) => {
  return error ? (
    <div className='blog-error'>
      <ErrorRemote />
      <div>
        <p>The remote server is not responding</p>
        <p>Perhaps it is overloaded with requests</p>
        <p>Please come back later</p>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  error: state.blogError,
});

export default connect(mapStateToProps)(BlogError);

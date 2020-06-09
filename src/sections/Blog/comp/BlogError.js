import React from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../../../app/ErrorMessage/comp/ErrorMessage';

const BlogError = ({ error }) => {
  return error ? <ErrorMessage type='remote' tip={true} /> : null;
};

const mapStateToProps = (state) => ({
  error: state.blogError,
});

export default connect(mapStateToProps)(BlogError);

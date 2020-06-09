import React from 'react';
import { connect } from 'react-redux';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';

const BlogSpinner = ({ active }) => {
  return active ? <LoadingBar type='main' /> : null;
};

const mapStateToProps = (state) => ({
  active: state.blogSpinner,
});

export default connect(mapStateToProps)(BlogSpinner);

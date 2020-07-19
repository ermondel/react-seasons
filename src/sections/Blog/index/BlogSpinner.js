import React from 'react';
import { connect } from 'react-redux';
import { SpinnerBig } from '../../../util/UtilImg/UtilImg';

const BlogSpinner = ({ active }) => {
  return active ? (
    <div className='blog-spinner'>
      <SpinnerBig />
      <div>
        <p>Request data from a remote server</p>
        <p>This may take some time</p>
        <p>Please wait</p>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  active: state.blogSpinner,
});

export default connect(mapStateToProps)(BlogSpinner);

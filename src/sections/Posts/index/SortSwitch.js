import React from 'react';
import { connect } from 'react-redux';
import { sortByDate } from '../actions/posts';

const SortSwitch = ({ type, sortByDate }) => (
  <div className='control'>
    <div className='control_btns'>
      <button
        className={type === 'new' ? 'btn-common_active' : 'btn-common'}
        disabled={type === 'new'}
        onClick={() => sortByDate('new')}
      >
        new
      </button>
      <button
        className={type === 'old' ? 'btn-common_active' : 'btn-common'}
        disabled={type === 'old'}
        onClick={() => sortByDate('old')}
      >
        old
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  type: state.postsSort,
});

export default connect(mapStateToProps, { sortByDate })(SortSwitch);

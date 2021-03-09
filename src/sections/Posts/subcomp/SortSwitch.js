import React from 'react';
import { connect } from 'react-redux';
import { sortByDate } from '../actions/posts';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';

const SortSwitch = ({ type, sortByDate }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'new'}
      disabled={type === 'new'}
      onClick={() => sortByDate('new')}
    />
    <BtnsBlockItem
      value={'old'}
      disabled={type === 'old'}
      onClick={() => sortByDate('old')}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ type: state.postsSort });

export default connect(mapStateToProps, { sortByDate })(SortSwitch);

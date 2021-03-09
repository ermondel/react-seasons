import React from 'react';
import { connect } from 'react-redux';
import { changeBooksView } from '../actions/books';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';

const ViewMode = ({ view, changeBooksView }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'List'}
      disabled={view === 'list'}
      onClick={() => changeBooksView('list')}
    />
    <BtnsBlockItem
      value={'Gallery'}
      disabled={view === 'gallery'}
      onClick={() => changeBooksView('gallery')}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ view: state.booksView });

export default connect(mapStateToProps, { changeBooksView })(ViewMode);

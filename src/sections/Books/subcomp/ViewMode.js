import React from 'react';
import { connect } from 'react-redux';
import { changeBooksView } from '../actions/books';

const ViewMode = (props) => (
  <div className='control'>
    <div className='control_btns'>
      <button
        className={
          props.view === 'list'
            ? 'sidebar__btn-common--active'
            : 'sidebar__btn-common'
        }
        disabled={props.view === 'list'}
        onClick={() => props.changeBooksView('list')}
      >
        List
      </button>
      <button
        className={
          props.view === 'gallery'
            ? 'sidebar__btn-common--active'
            : 'sidebar__btn-common'
        }
        disabled={props.view === 'gallery'}
        onClick={() => props.changeBooksView('gallery')}
      >
        Gallery
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  view: state.booksView,
});

export default connect(mapStateToProps, { changeBooksView })(ViewMode);

import React from 'react';
import { connect } from 'react-redux';
import AppAboutTech from '../AppAboutTech';

const BooksDetails = ({ book }) => {
  let content = book ? <div>{book.title}</div> : null;

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        {content}
        <AppAboutTech list={['React', 'Redux']} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps)(BooksDetails);

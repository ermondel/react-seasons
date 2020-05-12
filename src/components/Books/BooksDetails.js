import React from 'react';
import { connect } from 'react-redux';

const BooksDetails = ({ book }) => {
  return book ? (
    <div className='details'>
      <h3 className='details__title'>{book.title}</h3>
      <p className='details__item'>
        <span className='l'>Author</span>
        <span className='r'>{book.author}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Year</span>
        <span className='r'>{book.year}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Genre</span>
        <span className='r'>{book.genre}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Publisher</span>
        <span className='r'>{book.publisher}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Pages</span>
        <span className='r'>{book.pages}</span>
      </p>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps)(BooksDetails);

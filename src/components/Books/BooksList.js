import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';
import books from './booksSource';
import BooksListItem from './BooksListItem';

const BooksList = (props) => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Books</h2>

      <div className='book-list'>
        {books.map((book) => (
          <BooksListItem
            key={book.id}
            book={book}
            isActive={props.activeID === book.id}
            onClickHandler={() => props.selectBook(book)}
          />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  activeID: state.book ? state.book.id : null,
});

export default connect(mapStateToProps, { selectBook })(BooksList);

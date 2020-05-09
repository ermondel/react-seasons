import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';
import books from './booksSource';

const BooksList = (props) => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Books</h2>

      <div className='book-list'>
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => props.selectBook(book)}
            style={{
              color: props.activeID === book.id ? 'green' : 'white',
              cursor: 'pointer',
            }}
          >
            {book.title}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  activeID: state.book ? state.book.id : null,
});

export default connect(mapStateToProps, { selectBook })(BooksList);

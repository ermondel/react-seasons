import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';
import books from './booksSource';
import ListItem from './ListItem';
import CoversItem from './CoversItem';

const BooksList = (props) => {
  let content = null;

  if (props.view === 'list') {
    content = (
      <div className='book-list'>
        {books.map((book) => (
          <ListItem
            key={book.id}
            book={book}
            isActive={props.activeID === book.id}
            onClickHandler={() => props.selectBook(book)}
          />
        ))}
      </div>
    );
  }

  if (props.view === 'gallery') {
    content = (
      <div className='covers'>
        {books.map((book) => (
          <CoversItem
            key={book.id}
            book={book}
            isActive={props.activeID === book.id}
            onSelect={() => props.selectBook(book)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2>Books</h2>
        {content}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeID: state.book ? state.book.id : null,
  view: state.books_view,
});

export default connect(mapStateToProps, { selectBook })(BooksList);

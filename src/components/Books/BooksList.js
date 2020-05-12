import React from 'react';
import { connect } from 'react-redux';
import { selectBook, bookSearch } from '../../actions/books';
import booksSource from './booksSource';
import ListItem from './ListItem';
import CoversItem from './CoversItem';
import BooksSearchForm from './BooksSearchForm';

const BooksList = (props) => {
  let content = null;

  const books = props.query
    ? booksSource.filter((book) => {
        return book.title.toLowerCase().indexOf(props.query.toLowerCase()) >= 0;
      })
    : [...booksSource];

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
        <BooksSearchForm val={props.query} onSearch={props.bookSearch} />
        {content}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeID: state.bookActive && state.bookActive.id,
  view: state.booksView,
  query: state.bookSearch,
});

export default connect(mapStateToProps, { selectBook, bookSearch })(BooksList);

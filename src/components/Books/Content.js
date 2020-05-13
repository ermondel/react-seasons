import React from 'react';
import { connect } from 'react-redux';
import { selectBook, bookSearch } from '../../actions/books';
import SearchForm from './SearchForm';
import CommonList from './CommonList';
import CoverGallery from './CoverGallery';
import booksSource from './booksSource';

const filterBooksByQuery = (query) => {
  if (!query) {
    return [...booksSource];
  } else {
    query = query.toLowerCase();
  }

  return booksSource.filter((book) => {
    const str = `${book.title} ${book.author} ${book.year}`.toLowerCase();
    return str.indexOf(query) >= 0;
  });
};

const Content = (props) => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Books</h2>

      <SearchForm query={props.query} onSearch={props.bookSearch} />

      {props.viewMode === 'list' && (
        <CommonList
          books={props.books}
          activeID={props.activeID}
          onBookSelect={props.selectBook}
        />
      )}
      {props.viewMode === 'gallery' && (
        <CoverGallery
          books={props.books}
          activeID={props.activeID}
          onBookSelect={props.selectBook}
        />
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  activeID: state.bookActive && state.bookActive.id,
  viewMode: state.booksView,
  books: filterBooksByQuery(state.bookSearch),
  query: state.bookSearch,
});

export default connect(mapStateToProps, { selectBook, bookSearch })(Content);

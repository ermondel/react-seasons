import React from 'react';
import { connect } from 'react-redux';
import DetailsBlock from '../../../special/DetailsBlock/DetailsBlock';

const BookDetails = ({ book }) => {
  return book ? (
    <DetailsBlock
      title={book.title}
      author={book.author}
      year={book.year}
      genre={book.genre}
      publisher={book.publisher}
      pages={book.pages}
    />
  ) : null;
};

const mapStateToProps = (state) => ({
  book: state.bookActive,
});

export default connect(mapStateToProps)(BookDetails);

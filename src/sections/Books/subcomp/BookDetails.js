import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';

const BookDetails = ({ book }) => {
  return book ? (
    <InfoBlock
      title={book.title}
      data={{
        author: book.author,
        year: book.year,
        genre: book.genre,
        publisher: book.publisher,
        pages: book.pages,
      }}
    />
  ) : null;
};

const mapStateToProps = (state) => ({
  book: state.bookActive,
});

export default connect(mapStateToProps)(BookDetails);

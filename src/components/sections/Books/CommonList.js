import React from 'react';
import ListItem from './ListItem';

const CommonList = ({ books, activeID, onBookSelect }) => (
  <div className='book-list'>
    {books.map((book) => (
      <ListItem
        key={book.id}
        book={book}
        isActive={activeID === book.id}
        onItemSelect={() => onBookSelect(book)}
      />
    ))}
  </div>
);

export default CommonList;

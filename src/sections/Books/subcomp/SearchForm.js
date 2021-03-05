import React from 'react';

const SearchForm = ({ query, onSearch }) => (
  <div className='search-form'>
    <input
      type='text'
      onChange={(event) => {
        onSearch(event.target.value);
      }}
      value={query}
      className='search-form_input'
      placeholder='Find a book by title, author or year...'
    />
  </div>
);

export default SearchForm;

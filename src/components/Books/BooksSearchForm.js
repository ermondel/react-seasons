import React from 'react';

const BooksSearchForm = ({ val, onSearch }) => (
  <div className='search-form'>
    <input
      type='text'
      onChange={(event) => {
        onSearch(event.target.value);
      }}
      value={val}
    />
  </div>
);

export default BooksSearchForm;

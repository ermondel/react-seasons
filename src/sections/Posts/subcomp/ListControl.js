import React from 'react';
import SearchForm from './SearchForm';
import Message from './Message';
import ListActions from './ListActions';

const ListControl = () => (
  <div className='list-ctrl'>
    <SearchForm />
    <ListActions />
    <Message />
  </div>
);

export default ListControl;

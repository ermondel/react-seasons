import React from 'react';

const ListItem = ({ book, onClickHandler, isActive }) => (
  <article className={isActive ? 'book-list__item_active' : 'book-list__item'}>
    <h3 className='book-list__title'>{book.title}</h3>
    <p className='book-list__author'>{book.author}</p>
    <p className='book-list__year'>{book.year}</p>
    <div className='book-list__btns'>
      <button
        className={`book-list__btn ${
          isActive ? ' btn-about_active' : 'btn-about'
        }`}
        onClick={onClickHandler}
        disabled={isActive}
      >
        about
      </button>
    </div>
  </article>
);

export default ListItem;

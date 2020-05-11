import React from 'react';

const CoversItem = ({ book, onSelect, isActive }) => (
  <div className='covers-item'>
    <img
      src={`${process.env.PUBLIC_URL}/images/covers/${book.cover}`}
      alt='cover'
      className='covers-item_img'
    />
    <button
      className={
        isActive ? 'covers-item_btn-about_active' : 'covers-item_btn-about'
      }
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onSelect();
        }
      }}
      disabled={isActive}
    >
      <span onClick={onSelect}>about</span>
    </button>
  </div>
);

export default CoversItem;

import React from 'react';

const CoversItem = ({ book, isActive, onItemSelect }) => (
  <div className='covers-item'>
    <img
      src={`${process.env.PUBLIC_URL}/images/covers/${book.cover}`}
      alt='cover'
      className='covers-item_img'
    />
    <button
      className={
        isActive ? 'covers-item__btn-about--active' : 'covers-item__btn-about'
      }
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onItemSelect();
        }
      }}
      disabled={isActive}
    >
      <span onClick={onItemSelect}>about</span>
    </button>
  </div>
);

export default CoversItem;

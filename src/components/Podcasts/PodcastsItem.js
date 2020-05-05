import React from 'react';

const PodcastsItem = ({ podcast, onClickHandler, isActive }) => (
  <div className='podcast-list__item'>
    <div className='podcast-list__content'>
      <h3 className='podcast-list__title'>{podcast.title}</h3>
      <p className='podcast-list__duration'>{podcast.duration}</p>
      <p className='podcast-list__author'>{podcast.author}</p>
    </div>
    <div className='podcast-list__btns'>
      <button
        className={`podcast-list__btn ${
          isActive ? ' btn-select_active' : ' btn-select'
        }`}
        onClick={onClickHandler}
        disabled={isActive}
      >
        {isActive ? 'Selected' : 'Select'}
      </button>
    </div>
  </div>
);

export default PodcastsItem;

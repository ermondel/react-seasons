import React from 'react';
import { connect } from 'react-redux';
import SidebarInfo from '../SidebarInfo';

const PodcastDetails = ({ podcast }) => {
  let content = podcast ? (
    <div className='details'>
      <h3 className='details__title'>{podcast.title}</h3>
      <p className='details__item'>
        <span className='l'>Duration</span>{' '}
        <span className='r'>{podcast.duration}</span>
      </p>
      <p className='details__item'>
        <span className='l'>Author</span>{' '}
        <span className='r'>{podcast.author}</span>
      </p>
      <p className='details__btns'>
        <button className='details__btn_main' title='disabled!'>
          Play
        </button>
        <a href='/podcasts' className='details__btn_link' title='disabled!'>
          download
        </a>
      </p>
    </div>
  ) : null;

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        {content}
        <SidebarInfo list='React, Redux' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetails);

import React from 'react';
import { connect } from 'react-redux';

const PodcastsSidebar = ({ podcast }) => {
  if (!podcast) {
    return null;
  }

  return (
    <div className="podcasts-sidebar">
      <h3 className="podcasts-sidebar__title">{podcast.title}</h3>
      <p className="podcasts-duration">
        <span className="l">Duration</span>{' '}
        <span className="r">{podcast.duration}</span>
      </p>
      <p className="podcasts-author">
        <span className="l">Author</span>{' '}
        <span className="r">{podcast.author}</span>
      </p>
      <p className="podcasts-btns">
        <button className="podcasts-btn__play" title="dummy">
          Play
        </button>
        <a href="/podcasts" className="podcasts-btn__download" title="dummy">
          download
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastsSidebar);

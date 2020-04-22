import React from 'react';

const PodcastsSidebar = () => (
  <div className="podcasts-sidebar">
    <h3 className="podcasts-sidebar__title">Eum et est occaecati</h3>
    <p className="podcasts-duration">
      <span className="l">Duration</span> <span className="r">285 min</span>
    </p>
    <p className="podcasts-author">
      <span className="l">Author</span> <span className="r">Miriam Horton</span>
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

export default PodcastsSidebar;

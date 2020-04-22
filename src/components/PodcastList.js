import React from 'react';
import podcasts from '../fixtures/podcasts';

const PodcastList = () => (
  <div className="podcast-list">
    <h2>Podcasts</h2>

    {podcasts.map((podcast) => (
      <div className="podcast-list__item" key={podcast.id}>
        <div className="podcast-list__content">
          <h3 className="podcast-list__title">{podcast.title}</h3>
          <p className="podcast-list__duration">{podcast.duration}</p>
          <p className="podcast-list__author">{podcast.author}</p>
        </div>
        <div className="podcast-list__btns">
          <button className="podcast-list__select-btn">Select</button>
        </div>
      </div>
    ))}
  </div>
);

export default PodcastList;
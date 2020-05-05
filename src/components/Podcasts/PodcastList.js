import React from 'react';
import { connect } from 'react-redux';
import { selectPodcast } from '../../actions/podcast';
import PodcastsItem from './PodcastsItem';
import podcasts from './podcastsSource';

const PodcastList = (props) => (
  <div className='podcast-list'>
    {podcasts.map((podcast) => (
      <PodcastsItem
        podcast={podcast}
        onClickHandler={() => props.selectPodcast(podcast)}
        key={podcast.id}
      />
    ))}
  </div>
);

export default connect(null, { selectPodcast })(PodcastList);

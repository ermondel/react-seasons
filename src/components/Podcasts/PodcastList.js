import React from 'react';
import { connect } from 'react-redux';
import { selectPodcast } from '../../actions/podcast';
import PodcastsItem from './PodcastsItem';
import podcasts from './podcastsSource';

const PodcastList = (props) => (
  <div className='podcast-list'>
    {podcasts.map((podcast) => (
      <PodcastsItem
        key={podcast.id}
        podcast={podcast}
        isActive={props.isActive === podcast.id}
        onClickHandler={() => props.selectPodcast(podcast)}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  isActive: state.podcast ? state.podcast.id : null,
});

export default connect(mapStateToProps, { selectPodcast })(PodcastList);

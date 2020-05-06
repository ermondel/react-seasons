import React from 'react';
import { connect } from 'react-redux';
import { selectPodcast } from '../../actions/podcast';
import PodcastListItem from './PodcastListItem';
import podcasts from './podcastsSource';

const PodcastList = (props) => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Podcasts</h2>

      <div className='podcast-list'>
        {podcasts.map((podcast) => (
          <PodcastListItem
            key={podcast.id}
            podcast={podcast}
            isActive={props.isActive === podcast.id}
            onClickHandler={() => props.selectPodcast(podcast)}
          />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isActive: state.podcast ? state.podcast.id : null,
});

export default connect(mapStateToProps, { selectPodcast })(PodcastList);

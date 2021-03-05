import React from 'react';
import { connect } from 'react-redux';
import { selectPodcast } from '../actions/podcast';
import PodcastItem from '../subcomp/PodcastItem';
import podcasts from '../sources/podcastsSource';

const PodcastsContent = (props) => (
  <main className='main'>
    <h2 className='main__title'>Podcasts</h2>

    <div className='podcast-list'>
      {podcasts.map((podcast) => (
        <PodcastItem
          key={podcast.id}
          podcast={podcast}
          isActive={props.activeID === podcast.id}
          onClickHandler={() => props.selectPodcast(podcast)}
        />
      ))}
    </div>
  </main>
);

const mapStateToProps = (state) => ({
  activeID: state.podcast ? state.podcast.id : null,
});

export default connect(mapStateToProps, { selectPodcast })(PodcastsContent);

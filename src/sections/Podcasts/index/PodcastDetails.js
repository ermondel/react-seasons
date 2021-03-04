import React from 'react';
import { connect } from 'react-redux';
import TechBlock from '@sidebar/TechBlock';
import InfoBlock from '@sidebar/InfoBlock';

const PodcastDetails = ({ podcast }) => (
  <div className='sidebar'>
    {podcast ? (
      <InfoBlock
        title={podcast.title}
        duration={podcast.duration}
        author={podcast.author}
        btns={true}
      />
    ) : null}
    <TechBlock list='React, Redux' />
  </div>
);

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetails);

import React from 'react';
import { connect } from 'react-redux';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import DetailsBlock from '../../../special/DetailsBlock/DetailsBlock';

const PodcastDetails = ({ podcast }) => (
  <div className='sidebar'>
    {podcast ? (
      <DetailsBlock
        title={podcast.title}
        duration={podcast.duration}
        author={podcast.author}
        btns={true}
      />
    ) : null}
    <SidebarInfo list='React, Redux' />
  </div>
);

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetails);

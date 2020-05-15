import React from 'react';
import { connect } from 'react-redux';
import SidebarInfo from '../SidebarInfo/SidebarInfo';
import DetailsBlock from '../DetailsBlock/DetailsBlock';

const PodcastDetails = ({ podcast }) => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
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
  </div>
);

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetails);

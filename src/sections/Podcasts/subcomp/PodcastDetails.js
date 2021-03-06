import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';

const PodcastDetails = ({ podcast }) => {
  const buttons = (
    <p className='infoblock__btns'>
      <button className='infoblock__btn-main' title='disabled!'>
        Play
      </button>
      <a href='/' className='infoblock__btn-link' title='disabled!'>
        download
      </a>
    </p>
  );

  return podcast ? (
    <InfoBlock
      title={podcast.title}
      data={{
        duration: podcast.duration,
        author: podcast.author,
      }}
      buttons={buttons}
    />
  ) : null;
};

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetails);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mountMap } from '../actions/weather';
import LoadingBar from '../../../app/LoadingBar/components/LoadingBar';
import ErrorMessage from '../../../app/ErrorMessage/components/ErrorMessage';

const MountMap = ({ mapStatus, mountMap }) => {
  useEffect(() => {
    if (!mapStatus.ready) {
      mountMap();
    }
  }, [mapStatus, mountMap]);

  if (mapStatus.loading) {
    return (
      <div className='mount-map'>
        <LoadingBar type='sidebar' />
        <p>loading maps</p>
      </div>
    );
  }

  if (mapStatus.error) {
    return (
      <div className='mount-map'>
        <ErrorMessage type='remote' />
        <p>the remote server is unavailable</p>
      </div>
    );
  }

  if (mapStatus.ready) {
    return null;
  }
};

const mapStateToProps = (state) => ({
  mapStatus: state.forecastMountMap,
});

export default connect(mapStateToProps, { mountMap })(MountMap);

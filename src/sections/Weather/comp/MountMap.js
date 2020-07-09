import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mountMap } from '../actions/weather';
import { ErrorRemote, SpinnerSmall } from '../../../util/UtilImg/comp/UtilImg';

class MountMap extends Component {
  componentDidMount() {
    if (!this.props.mapStatus.ready) this.props.mountMap();
  }

  render() {
    if (this.props.mapStatus.loading) {
      return (
        <div className='mount-map-spinner'>
          <SpinnerSmall />
          <p>loading maps</p>
        </div>
      );
    }

    if (this.props.mapStatus.error) {
      return (
        <div className='mount-map-error'>
          <ErrorRemote />
          <p>the remote server is unavailable</p>
        </div>
      );
    }

    if (this.props.mapStatus.ready) {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  mapStatus: state.forecastMountMap,
});

export default connect(mapStateToProps, { mountMap })(MountMap);

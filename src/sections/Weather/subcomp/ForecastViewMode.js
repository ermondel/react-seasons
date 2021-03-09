import React from 'react';
import { connect } from 'react-redux';
import { forecastsViewMode } from '../actions/weather';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';

const ForecastViewMode = ({ view, forecastsViewMode }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'Line'}
      disabled={view === 'line'}
      onClick={() => forecastsViewMode('line')}
    />
    <BtnsBlockItem
      value={'Bars'}
      disabled={view === 'bars'}
      onClick={() => forecastsViewMode('bars')}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ view: state.forecastView });

export default connect(mapStateToProps, { forecastsViewMode })(ForecastViewMode);

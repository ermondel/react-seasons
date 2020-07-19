import React from 'react';
import { connect } from 'react-redux';
import { forecastsViewMode } from '../actions/weather';

const ForecastViewMode = ({ view, forecastsViewMode }) => (
  <div className='control'>
    <div className='control_btns'>
      <button
        className={view === 'line' ? 'btn-common_active' : 'btn-common'}
        disabled={view === 'line'}
        onClick={() => forecastsViewMode('line')}
      >
        Line
      </button>
      <button
        className={view === 'bars' ? 'btn-common_active' : 'btn-common'}
        disabled={view === 'bars'}
        onClick={() => forecastsViewMode('bars')}
      >
        Bars
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  view: state.forecastView,
});

export default connect(mapStateToProps, {
  forecastsViewMode,
})(ForecastViewMode);

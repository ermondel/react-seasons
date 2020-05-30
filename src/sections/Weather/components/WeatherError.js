import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forecastsErrorHide } from '../actions/weather';

const ForecastError = ({ error, forecastsErrorHide }) => {
  useEffect(() => {
    return () => {
      forecastsErrorHide();
    };
  }, [forecastsErrorHide]);

  return error ? (
    <p>
      Error {error.status} for {error.query}
      <button onClick={() => forecastsErrorHide()}>Close</button>
    </p>
  ) : null;
};

const mapStateToProps = (state) => ({
  error: state.forecastError,
});

export default connect(mapStateToProps, { forecastsErrorHide })(ForecastError);

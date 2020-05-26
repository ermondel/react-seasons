import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete } from '../../actions/weather';

const WeatherItem = ({ forecast, forecastsDelete }) => (
  <p>
    {forecast.city}
    <button onClick={() => forecastsDelete(forecast.id)}>del</button>
  </p>
);

export default connect(undefined, { forecastsDelete })(WeatherItem);

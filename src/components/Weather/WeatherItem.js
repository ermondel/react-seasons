import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete } from '../../actions/weather';

const WeatherItem = ({ forecast, forecastsDelete }) => (
  <div className='weather-item'>
    <div>{forecast.city.name}</div>
    <div>{forecast.list[0].weather[0].main}</div>
    <div>{forecast.list[0].weather[0].description}</div>
    <div>
      <button onClick={() => forecastsDelete(forecast.city.id)}>del</button>
    </div>
  </div>
);

export default connect(undefined, { forecastsDelete })(WeatherItem);

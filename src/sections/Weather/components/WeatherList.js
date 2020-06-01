import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = ({ list, view }) => (
  <div className='forecasts'>
    {list.map((forecast) => (
      <WeatherItem forecast={forecast} view={view} key={forecast.city.id} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
  view: state.forecastView,
});

export default connect(mapStateToProps)(WeatherList);

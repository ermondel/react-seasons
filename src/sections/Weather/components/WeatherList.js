import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = ({ list }) => (
  <div>
    {list.map((forecast) => (
      <WeatherItem forecast={forecast} key={forecast.city.id} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
});

export default connect(mapStateToProps)(WeatherList);

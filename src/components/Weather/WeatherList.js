import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = ({ spinner, list }) => (
  <div>
    {spinner && <p>Loading ...</p>}
    {list.map((forecast) => (
      <WeatherItem forecast={forecast} key={forecast.city.id} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  spinner: state.forecastSpinner,
  list: state.forecastList,
});

export default connect(mapStateToProps)(WeatherList);

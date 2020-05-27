import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = ({ spinner, error, list }) => (
  <div>
    {spinner && <p>Loading ...</p>}
    {error && <p>Error: {error}</p>}
    {!spinner && !error && <p>enter the name of the city</p>}
    {list.map((forecast) => (
      <WeatherItem forecast={forecast} key={forecast.city.id} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  spinner: state.forecastSpinner,
  error: state.forecastError,
  list: state.forecastList,
});

export default connect(mapStateToProps)(WeatherList);

import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = ({ list, view, mapStatus }) => (
  <div className='forecasts'>
    {list.map((forecast) => (
      <WeatherItem
        forecast={forecast}
        view={view}
        btnMap={mapStatus.ready}
        key={forecast.city.id}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
  view: state.forecastView,
  mapStatus: state.forecastMountMap,
});

export default connect(mapStateToProps)(WeatherList);

import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete, citySelected } from '../actions/weather';
import WeatherItem from './WeatherItem';

const WeatherList = (props) => (
  <div className='forecasts'>
    {props.list.map((forecast) => (
      <WeatherItem
        forecast={forecast}
        view={props.view}
        btnMap={props.mapStatus.ready}
        key={forecast.city.id}
        timePeriod={props.timePeriod}
        onForecastDelete={() => props.forecastsDelete(forecast.city.id)}
        onCitySelected={() => props.citySelected(forecast.city)}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
  view: state.forecastView,
  mapStatus: state.forecastMountMap,
  timePeriod: state.forecastTimePeriod,
});

export default connect(mapStateToProps, {
  forecastsDelete,
  citySelected,
})(WeatherList);

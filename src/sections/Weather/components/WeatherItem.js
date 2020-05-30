import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { forecastsDelete } from '../actions/weather';

const WeatherItem = ({ forecast, forecastsDelete }) => {
  const temperatureList = [];
  const pressureList = [];
  const humidityList = [];

  forecast.list.forEach((weather) => {
    temperatureList.push(weather.main.temp);
    pressureList.push(weather.main.pressure);
    humidityList.push(weather.main.humidity);
  });

  return (
    <div className='forecast'>
      <div className='forecast__header'>
        <h3 className='forecast__title'>{forecast.city.name}</h3>
        <div className='forecast__btns'>
          <button
            className='forecast__btn-delete'
            onClick={() => forecastsDelete(forecast.city.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className='forecast__body'>
        <div className='forecast__temperature-chart'>
          <Sparklines data={temperatureList}>
            <SparklinesLine color='#F5F5F5' />
          </Sparklines>
          <p className='forecast__legend' style={{ color: '#F5F5F5' }}>
            temperature
          </p>
        </div>
        <div className='forecast__pressure-chart'>
          <Sparklines data={pressureList}>
            <SparklinesLine color='#F5DEB3' />
          </Sparklines>
          <p className='forecast__legend' style={{ color: '#F5DEB3' }}>
            pressure
          </p>
        </div>
        <div className='forecast__humidity-chart'>
          <Sparklines data={humidityList}>
            <SparklinesLine color='#FFDAB9' />
          </Sparklines>
          <p className='forecast__legend' style={{ color: '#FFDAB9' }}>
            humidity
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(undefined, { forecastsDelete })(WeatherItem);

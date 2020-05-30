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
    <div className='weather-item'>
      <div className='city-name'>{forecast.city.name}</div>
      <div className='temperature-list'>
        <Sparklines data={temperatureList}>
          <SparklinesLine color='#ffffff' />
        </Sparklines>
      </div>
      <div className='pressure-list'>
        <Sparklines data={pressureList}>
          <SparklinesLine color='#ffffff' />
        </Sparklines>
      </div>
      <div className='humidity-list'>
        <Sparklines data={humidityList}>
          <SparklinesLine color='#ffffff' />
        </Sparklines>
      </div>
      <div className='weather-btn'>
        <button onClick={() => forecastsDelete(forecast.city.id)}>del</button>
      </div>
    </div>
  );
};

export default connect(undefined, { forecastsDelete })(WeatherItem);

import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete, citySelected } from '../actions/weather';
import Sparkline from './Sparkline';

const WeatherItem = ({ forecast, view, forecastsDelete, citySelected }) => {
  const colors = {
    temp: { line: '#ADD8E6', bar: '#ADD8E6' },
    pres: { line: '#BDB76B', bar: '#BDB76B' },
    humd: { line: '#FFDAB9', bar: '#FFDAB9' },
  };

  const temperatureList = [];
  const pressureList = [];
  const humidityList = [];

  let temperatureSum = 0;
  let pressureSum = 0;
  let humiditySum = 0;

  forecast.list.forEach((weather) => {
    temperatureList.push(weather.main.temp);
    pressureList.push(weather.main.pressure);
    humidityList.push(weather.main.humidity);
    temperatureSum += weather.main.temp;
    pressureSum += weather.main.pressure;
    humiditySum += weather.main.humidity;
  });

  const temperatureAverage = Math.round(temperatureSum / temperatureList.length);
  const pressureAverage = Math.round(pressureSum / pressureList.length);
  const humidityAverage = Math.round(humiditySum / humidityList.length);

  const buttonMap = (
    <button
      className='forecast__btn-map'
      onClick={() => citySelected(forecast.city)}
    >
      Show on the map
    </button>
  );

  const buttonDelete = (
    <button
      className='forecast__btn-delete'
      onClick={() => forecastsDelete(forecast.city.id)}
    >
      Remove from list
    </button>
  );

  return (
    <div className='forecast'>
      <div className='forecast__header'>
        <h3 className='forecast__title'>{forecast.city.name}</h3>
        <div className='forecast__btns'>
          {buttonMap}
          {buttonDelete}
        </div>
      </div>
      <div className='forecast__body'>
        <Sparkline
          name='temperature'
          list={temperatureList}
          view={view}
          avg={temperatureAverage}
          units={'°C'}
          colorBar={colors.temp.bar}
          colorLine={colors.temp.line}
          classEl='forecast__temperature-chart'
          classLegend='forecast__legend'
        />

        <Sparkline
          name='pressure'
          list={pressureList}
          view={view}
          avg={pressureAverage}
          units={'hPa'}
          colorBar={colors.pres.bar}
          colorLine={colors.pres.line}
          classEl='forecast__pressure-chart'
          classLegend='forecast__legend'
        />

        <Sparkline
          name='humidity'
          list={humidityList}
          view={view}
          avg={humidityAverage}
          units={'%'}
          colorBar={colors.humd.bar}
          colorLine={colors.humd.line}
          classEl='forecast__humidity-chart'
          classLegend='forecast__legend'
        />
      </div>
    </div>
  );
};

export default connect(undefined, { forecastsDelete, citySelected })(WeatherItem);

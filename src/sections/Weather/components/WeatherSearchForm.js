import React from 'react';
import { connect } from 'react-redux';
import { forecastsFetch } from '../actions/weather';

const WeatherSearchForm = ({ forecastsFetch }) => (
  <div className='forecast_search-form'>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const city = event.target.q_forecast.value.trim();
        if (city) {
          forecastsFetch(city);
        }
        event.target.s_forecast.blur();
      }}
    >
      <input
        type='text'
        name='q_forecast'
        className='forecast__query-input'
        placeholder='city ​​name'
      />
      <button name='s_forecast' className='forecast__btn-submit'>
        Submit
      </button>
    </form>
  </div>
);

export default connect(undefined, { forecastsFetch })(WeatherSearchForm);

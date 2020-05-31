import React from 'react';
import { connect } from 'react-redux';
import { forecastsFetch } from '../actions/weather';

const WeatherSearchForm = ({ spinner, forecastsFetch }) => (
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
      <button
        name='s_forecast'
        className='forecast__btn-submit'
        disabled={spinner ? true : false}
      >
        {spinner ? 'wait ....' : 'Submit'}
      </button>
    </form>
  </div>
);

const mapStateToProps = (state) => ({
  spinner: state.forecastSpinner,
});

export default connect(mapStateToProps, { forecastsFetch })(WeatherSearchForm);

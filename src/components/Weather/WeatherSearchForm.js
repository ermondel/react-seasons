import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forecastsFetch } from '../../actions/weather';

class WeatherSearchForm extends Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    const city = event.target.forecast_input.value.trim();
    this.props.forecastsFetch(city);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='forecast_input' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(undefined, { forecastsFetch })(WeatherSearchForm);

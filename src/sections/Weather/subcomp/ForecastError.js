import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forecastsErrorHide } from '../actions/weather';
import { SpinnerBig } from '@subcomponents/UtilImages';

class ForecastError extends Component {
  componentWillUnmount() {
    this.props.forecastsErrorHide();
  }

  renderTitle() {
    if (this.props.spinner) {
      return this.props.spinner.query;
    } else if (this.props.error) {
      return this.props.error.query;
    } else {
      return null;
    }
  }

  renderSpinner() {
    return (
      <div className='forecast-error__spinner'>
        <SpinnerBig />
      </div>
    );
  }

  renderError() {
    switch (this.props.error.status) {
      case 404:
        return <p>Not found. Perhaps the wrong city name was entered.</p>;

      case 500:
        return (
          <p>
            The remote server is not responding. Perhaps it is overloaded with
            requests.
          </p>
        );

      default:
        return null;
    }
  }

  renderCloseButton() {
    return this.props.error ? (
      <button
        className='forecast-error__btn-close'
        onClick={() => this.props.forecastsErrorHide()}
      >
        Close
      </button>
    ) : null;
  }

  render() {
    const { spinner, error } = this.props;

    return spinner || error ? (
      <div className='forecast-error'>
        <div className='forecast-error__header'>
          <h3 className='forecast-error__title'>{this.renderTitle()}</h3>
          <div className='forecast-error__btns'>{this.renderCloseButton()}</div>
        </div>
        <div className='forecast-error__body'>
          {spinner && this.renderSpinner()}
          {error && this.renderError()}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  error: state.forecastError,
  spinner: state.forecastSpinner,
});

export default connect(mapStateToProps, { forecastsErrorHide })(ForecastError);

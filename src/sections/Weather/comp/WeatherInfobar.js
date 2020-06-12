import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forecastsErrorHide } from '../actions/weather';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';

const WeatherInfobar = ({ spinner, error, forecastsErrorHide }) => {
  useEffect(() => {
    return () => {
      forecastsErrorHide();
    };
  }, [forecastsErrorHide]);

  let componentTitle = null;
  let componentContent = null;

  if (spinner) {
    componentTitle = spinner.query;
    componentContent = (
      <div className='forecast-error__spinner'>
        <LoadingBar type='main-img' />
      </div>
    );
  }

  if (error) {
    if (error.status === 404) {
      componentTitle = error.query;
      componentContent = <p>Not found. Perhaps the wrong city name was entered.</p>;
    }

    if (error.status === 500) {
      componentTitle = error.query;
      componentContent = (
        <p>
          The remote server is not responding. Perhaps it is overloaded with
          requests.
        </p>
      );
    }
  }

  const buttonClose = error ? (
    <button
      className='forecast-error__btn-close'
      onClick={() => forecastsErrorHide()}
    >
      Close
    </button>
  ) : null;

  return componentContent ? (
    <div className='forecast-error'>
      <div className='forecast-error__header'>
        <h3 className='forecast-error__title'>{componentTitle}</h3>
        <div className='forecast-error__btns'>{buttonClose}</div>
      </div>
      <div className='forecast-error__body'>{componentContent}</div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  error: state.forecastError,
  spinner: state.forecastSpinner,
});

export default connect(mapStateToProps, { forecastsErrorHide })(WeatherInfobar);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forecastsErrorHide } from '../actions/weather';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';

const WeatherInfobar = ({ spinner, error, forecastsErrorHide }) => {
  // unmount actions
  useEffect(() => {
    return () => {
      forecastsErrorHide();
    };
  }, [forecastsErrorHide]);

  // info message (loading or error)
  let title, content;

  switch (spinner ? 100 : error ? error.status : undefined) {
    case 404:
      title = error.query;
      content = <p>Not found. Perhaps the wrong city name was entered.</p>;
      break;

    case 500:
      title = error.query;
      content = (
        <p>
          The remote server is not responding. Perhaps it is overloaded with
          requests.
        </p>
      );
      break;

    case 100:
      title = spinner.query;
      content = (
        <div className='forecast-error__spinner'>
          <LoadingBar type='main-img' />
        </div>
      );
      break;

    default:
      title = null;
      content = null;
      break;
  }

  // button (close error message)
  const closeButton = error ? (
    <button
      className='forecast-error__btn-close'
      onClick={() => forecastsErrorHide()}
    >
      Close
    </button>
  ) : null;

  // render
  return content ? (
    <div className='forecast-error'>
      <div className='forecast-error__header'>
        <h3 className='forecast-error__title'>{title}</h3>
        <div className='forecast-error__btns'>{closeButton}</div>
      </div>
      <div className='forecast-error__body'>{content}</div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  error: state.forecastError,
  spinner: state.forecastSpinner,
});

export default connect(mapStateToProps, { forecastsErrorHide })(WeatherInfobar);

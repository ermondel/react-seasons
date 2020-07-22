import React from 'react';
import { connect } from 'react-redux';
import { changeTimePeriod } from '../actions/weather';

const TimePeriod = ({ timePeriod, changeTimePeriod }) => (
  <div className='control'>
    <div className='control-btns_line'>
      <button
        className={timePeriod === 'morning' ? 'btn-line_active' : 'btn-line'}
        disabled={timePeriod === 'morning'}
        onClick={() => changeTimePeriod('morning')}
      >
        Morning
      </button>
      <button
        className={timePeriod === 'afternoon' ? 'btn-line_active' : 'btn-line'}
        disabled={timePeriod === 'afternoon'}
        onClick={() => changeTimePeriod('afternoon')}
      >
        Afternoon
      </button>
      <button
        className={timePeriod === 'evening' ? 'btn-line_active' : 'btn-line'}
        disabled={timePeriod === 'evening'}
        onClick={() => changeTimePeriod('evening')}
      >
        Evening
      </button>
      <button
        className={timePeriod === 'night' ? 'btn-line_active' : 'btn-line'}
        disabled={timePeriod === 'night'}
        onClick={() => changeTimePeriod('night')}
      >
        Night
      </button>
      <button
        className={timePeriod === 'day' ? 'btn-line_active' : 'btn-line'}
        disabled={timePeriod === 'day'}
        onClick={() => changeTimePeriod('day')}
      >
        Day
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  timePeriod: state.forecastTimePeriod,
});

export default connect(mapStateToProps, {
  changeTimePeriod,
})(TimePeriod);

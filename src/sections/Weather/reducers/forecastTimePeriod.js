import { WEATHER_TIME_PERIOD_CHANGED } from '../../../types';

export default (state = 'day', action) => {
  if (action.type === WEATHER_TIME_PERIOD_CHANGED) {
    return action.timePeriod;
  }

  return state;
};

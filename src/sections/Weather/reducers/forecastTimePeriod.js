import { WEATHER_TIME_PERIOD_CHANGED } from '@redux/types';

export default (state = 'day', action) => {
  if (action.type === WEATHER_TIME_PERIOD_CHANGED) {
    return action.timePeriod;
  }

  return state;
};

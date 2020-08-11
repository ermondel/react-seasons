import { WEATHER_CITY_SELECTED } from '../../../lib/types';

export default (state = null, action) => {
  if (action.type === WEATHER_CITY_SELECTED) {
    return action.city;
  }

  return state;
};

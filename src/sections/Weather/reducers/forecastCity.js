import { WEATHER_CITY_SELECTED } from '../../../types';

export default (state = null, action) => {
  if (action.type === WEATHER_CITY_SELECTED) {
    return action.city;
  }

  return state;
};

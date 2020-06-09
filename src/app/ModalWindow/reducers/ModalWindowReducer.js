import { WEATHER_CITY_SELECTED, MODAL_CLOSE } from '../../../types';

export default (state = false, action) => {
  switch (action.type) {
    case WEATHER_CITY_SELECTED:
      return true;

    case MODAL_CLOSE:
      return false;

    default:
      return state;
  }
};

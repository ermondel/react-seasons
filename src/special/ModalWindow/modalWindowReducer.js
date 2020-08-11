import {
  MODAL_OPEN,
  MODAL_CLOSE,
  POSTS_REMOVE_CONFIRM,
  WEATHER_CITY_SELECTED,
} from '../../lib/types';

export default (state = false, action) => {
  switch (action.type) {
    case WEATHER_CITY_SELECTED:
    case POSTS_REMOVE_CONFIRM:
      return true;

    case MODAL_CLOSE:
      return false;

    case MODAL_OPEN:
      return true;

    default:
      return state;
  }
};

import {
  WEATHER_CITY_SELECTED,
  MODAL_CLOSE,
  MODAL_OPEN,
  POSTS_REMOVE_CONFIRM,
} from '../../../types';

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

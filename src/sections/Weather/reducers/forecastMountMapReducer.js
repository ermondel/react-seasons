import {
  WEATHER_MOUNT_MAP_SUCCESS,
  WEATHER_MOUNT_MAP_FAILURE,
} from '../../../types';

const defaultState = {
  loading: true,
  ready: false,
  error: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case WEATHER_MOUNT_MAP_SUCCESS:
      return {
        loading: false,
        ready: true,
        error: false,
      };

    case WEATHER_MOUNT_MAP_FAILURE:
      return {
        loading: false,
        ready: false,
        error: true,
      };

    default:
      return state;
  }
};

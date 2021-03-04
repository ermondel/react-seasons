import {
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_ERROR_HIDE,
} from '@redux/types';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_FORECASTS_FETCH_FAILURE:
      return {
        status: action.status,
        query: action.query,
      };

    case WEATHER_FORECASTS_FETCH_REQUEST:
    case WEATHER_FORECASTS_ERROR_HIDE:
      return null;

    default:
      return state;
  }
};

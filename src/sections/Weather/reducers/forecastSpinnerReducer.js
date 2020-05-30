export default (state = false, action) => {
  switch (action.type) {
    case 'WEATHER_FORECASTS_FETCH_REQUEST':
      return true;

    case 'WEATHER_FORECASTS_FETCH_SUCCESS':
    case 'WEATHER_FORECASTS_FETCH_FAILURE':
      return false;

    default:
      return state;
  }
};

export default (state = null, action) => {
  switch (action.type) {
    case 'WEATHER_FORECASTS_FETCH_FAILURE':
      return action.status;

    case 'WEATHER_FORECASTS_FETCH_REQUEST':
      return null;

    default:
      return state;
  }
};

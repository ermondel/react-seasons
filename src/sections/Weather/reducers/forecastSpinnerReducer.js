export default (state = null, action) => {
  switch (action.type) {
    case 'WEATHER_FORECASTS_FETCH_REQUEST':
      return { query: action.query };

    case 'WEATHER_FORECASTS_FETCH_SUCCESS':
    case 'WEATHER_FORECASTS_FETCH_FAILURE':
      return null;

    default:
      return state;
  }
};

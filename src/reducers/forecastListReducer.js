export default (state = [], action) => {
  switch (action.type) {
    case 'WEATHER_FORECASTS_FETCH_SUCCESS':
      return [...state, action.payload];

    case 'WEATHER_FORECASTS_DELETE':
      return state.filter((forecast) => forecast.id !== action.id);

    default:
      return state;
  }
};

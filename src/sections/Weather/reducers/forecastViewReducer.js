export default (state = 'line', action) => {
  if (action.type === 'WEATHER_FORECASTS_VIEW_CHANGED') {
    return action.view;
  }

  return state;
};

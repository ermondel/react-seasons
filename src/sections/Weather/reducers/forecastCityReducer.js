export default (state = null, action) => {
  if (action.type === 'WEATHER_CITY_SELECTED') {
    return action.city;
  }

  return state;
};

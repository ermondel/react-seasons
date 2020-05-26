export const forecastsFetch = (city) => (dispatch) => {
  dispatch({ type: 'WEATHER_FORECASTS_FETCH_REQUEST' });

  setTimeout(() => {
    const rnd = Math.random();
    const res = rnd >= 0.5 ? 200 : rnd >= 0.3 ? 404 : 500;

    switch (res) {
      case 200:
        dispatch({
          type: 'WEATHER_FORECASTS_FETCH_SUCCESS',
          payload: { id: Date.now(), city },
        });
        break;

      case 404:
        dispatch({
          type: 'WEATHER_FORECASTS_FETCH_FAILURE',
          status: 404,
        });
        break;

      default:
        dispatch({
          type: 'WEATHER_FORECASTS_FETCH_FAILURE',
          status: 500,
        });
        break;
    }
  }, 2000);
};

export const forecastsDelete = (id) => ({
  type: 'WEATHER_FORECASTS_DELETE',
  id,
});

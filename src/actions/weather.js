import api from '../apis/nodeapiserver';
// import fixtures from '../fixtures/weather';

export const forecastsFetch = (city) => async (dispatch) => {
  dispatch({ type: 'WEATHER_FORECASTS_FETCH_REQUEST' });

  try {
    const forecasts = await api.get('/request/openweathermap', {
      params: {
        q: city,
      },
    });

    dispatch({
      type: 'WEATHER_FORECASTS_FETCH_SUCCESS',
      payload: forecasts.data,
    });
  } catch (error) {
    dispatch({
      type: 'WEATHER_FORECASTS_FETCH_FAILURE',
      status: 500,
    });
  }
};

export const forecastsDelete = (id) => ({
  type: 'WEATHER_FORECASTS_DELETE',
  id,
});

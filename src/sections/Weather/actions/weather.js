import api from '../../../nodeapiserver';
import {
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_FETCH_SUCCESS,
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_DELETE,
  WEATHER_FORECASTS_ERROR_HIDE,
  WEATHER_FORECASTS_VIEW_CHANGED,
} from '../../../types';

export const forecastsFetch = (city) => async (dispatch) => {
  dispatch({
    type: WEATHER_FORECASTS_FETCH_REQUEST,
    query: city,
  });

  try {
    const forecasts = await api.get('/request/openweathermap', {
      params: { q: city },
    });

    dispatch({
      type: WEATHER_FORECASTS_FETCH_SUCCESS,
      payload: forecasts.data,
      query: city,
    });
  } catch (error) {
    if (error.response.status === 404) {
      dispatch({
        type: WEATHER_FORECASTS_FETCH_FAILURE,
        status: 404,
        query: city,
      });
    } else {
      dispatch({
        type: WEATHER_FORECASTS_DELETE,
        status: 500,
        query: city,
      });
    }
  }
};

export const forecastsDelete = (id) => ({
  type: WEATHER_FORECASTS_DELETE,
  id,
});

export const forecastsErrorHide = () => ({
  type: WEATHER_FORECASTS_ERROR_HIDE,
});

export const forecastsViewMode = (view = 'line') => ({
  type: WEATHER_FORECASTS_VIEW_CHANGED,
  view,
});

export const citySelected = (city) => ({
  type: 'WEATHER_CITY_SELECTED',
  city,
});

import api from '../../../reduxblog';
import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
} from '../../../types';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: POSTS_FETCH_REQUEST });

  try {
    const response = await api.get('/posts', {
      params: { key: '' },
    });

    dispatch({ type: POSTS_FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_FETCH_FAILURE, status: 500 });
  }
};

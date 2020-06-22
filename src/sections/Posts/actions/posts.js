import { reduxblog } from '../../../api';
import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POSTS_CREATE_REQUEST,
  POSTS_CREATE_SUCCESS,
  POSTS_CREATE_FAILURE,
} from '../../../types';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: POSTS_FETCH_REQUEST });

  try {
    const response = await reduxblog.get('/posts', {
      params: { key: '' },
    });

    dispatch({ type: POSTS_FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_FETCH_FAILURE, status: 500 });
  }
};

export const createPost = (values) => async (dispatch) => {
  dispatch({ type: POSTS_CREATE_REQUEST });

  try {
    dispatch({ type: POSTS_CREATE_SUCCESS, payload: null });
  } catch (error) {
    dispatch({ type: POSTS_CREATE_FAILURE, status: 500 });
  }
};

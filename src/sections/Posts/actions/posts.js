import { v4 as uuidv4 } from 'uuid';
import { reduxblog } from '../../../api';
import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_MESSAGE_ADD,
  POSTS_ADDING_FAILURE,
  POSTS_REMOVING_REQUEST,
  POSTS_REMOVING_FAILURE,
  POSTS_REMOVING_ASK,
  POSTS_REMOVING_RESET,
  POSTS_ADDING_RESET,
  POSTS_MESSAGE_REMOVE,
  POSTS_REMOVING_SUCCESS,
} from '../../../types';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: POSTS_LIST_REQUEST });

  try {
    const response = await reduxblog.get('/posts', {
      params: { key: '' },
    });

    dispatch({ type: POSTS_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_LIST_FAILURE, status: 500 });
  }
};

export const createPost = (values) => async (dispatch) => {
  const newID = uuidv4();

  dispatch({
    type: POSTS_ADDING_REQUEST,
    id: newID,
    title: values.title,
  });

  try {
    const response = await reduxblog.post(
      '/posts',
      {
        id: newID,
        title: values.title,
        categories: values.categories,
        content: values.content,
      },
      {
        params: { key: '' },
      }
    );

    dispatch({
      type: POSTS_ADDING_SUCCESS,
      id: response.data.id,
      title: response.data.title,
      payload: response.data,
    });

    dispatch({
      type: POSTS_MESSAGE_ADD,
      message: 'The post has been added.',
    });
  } catch (error) {
    dispatch({
      type: POSTS_ADDING_FAILURE,
      id: newID,
      title: values.title,
      status: 500,
    });
  }
};

export const removePost = (id, title) => async (dispatch) => {
  dispatch({ type: POSTS_REMOVING_REQUEST, id, title });

  try {
    const response = await reduxblog.delete(`/posts/${id}`, {
      params: { key: '' },
    });

    dispatch({
      type: POSTS_REMOVING_SUCCESS,
      id: response.data.id,
      title: response.data.title,
    });
  } catch (error) {
    dispatch({ type: POSTS_REMOVING_FAILURE, id, title });
  }
};

export const removePostAsk = (id, title) => ({
  type: POSTS_REMOVING_ASK,
  id,
  title,
});

export const removePostReset = () => ({
  type: POSTS_REMOVING_RESET,
});

export const addingPostReset = () => ({
  type: POSTS_ADDING_RESET,
});

export const addMessage = (message) => ({
  type: POSTS_MESSAGE_ADD,
  message,
});

export const removeMessage = () => ({
  type: POSTS_MESSAGE_REMOVE,
});

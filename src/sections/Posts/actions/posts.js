import { v4 as uuidv4 } from 'uuid';
import { reduxblog, nodeapiserver } from '../../../api';
import {
  POSTS_REMOVING_REQUEST,
  POSTS_REMOVING_FAILURE,
  POSTS_REMOVING_ASK,
  POSTS_REMOVING_RESET,
  POSTS_ADDING_RESET,
  POSTS_REMOVING_SUCCESS,
  POSTS_READING_RESET,
  POSTS_SEARCH_REQUEST,
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
  POSTS_SORT_BY_DATE,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_STATUS_RESET,
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_ADDING_FAILURE,
  POSTS_ADD_MESSAGE,
  POSTS_REMOVE_MESSAGE,
} from '../../../types';

export const fetchPosts = (publicKey) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_LIST_REQUEST });

    const response = await reduxblog.get('/posts', {
      params: { key: publicKey },
    });

    dispatch({ type: POSTS_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_LIST_FAILURE, status: 500 });
  }
};

export const fetchPostsAuth = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_AUTH_REQUEST });

    const authResponse = await nodeapiserver.get('/opt/fsn78d', {
      apiName: 'nodeapiserver',
    });

    dispatch({ type: POSTS_AUTH_SUCCESS, payload: authResponse.data.opt });
    dispatch({ type: POSTS_LIST_REQUEST });

    const postsResponse = await reduxblog.get('/posts', {
      apiName: 'reduxblog',
      params: { key: authResponse.data.opt },
    });

    dispatch({ type: POSTS_LIST_SUCCESS, payload: postsResponse.data });
  } catch (error) {
    if (error.config.apiName === 'nodeapiserver') {
      dispatch({ type: POSTS_AUTH_FAILURE, status: 500 });
    }

    if (error.config.apiName === 'reduxblog') {
      dispatch({ type: POSTS_LIST_FAILURE, status: 500 });
    }
  }
};

export const authAndFetchPostsNew = (aim) => async (dispatch) => {
  try {
    dispatch({ type: `POSTS_${aim}_AUTH_REQUEST` });

    const authResponse = await nodeapiserver.get('/opt/fsn78d', {
      apiName: 'nodeapiserver',
    });

    dispatch({ type: `POSTS_${aim}_AUTH_SUCCESS`, payload: authResponse.data.opt });

    dispatch({ type: `POSTS_${aim}_DATA_REQUEST` });

    const postsResponse = await reduxblog.get('/posts', {
      apiName: 'reduxblog',
      params: { key: authResponse.data.opt },
    });

    dispatch({ type: `POSTS_${aim}_DATA_SUCCESS`, payload: postsResponse.data });
  } catch (error) {
    if (error.config.apiName === 'nodeapiserver') {
      dispatch({ type: `POSTS_${aim}_AUTH_FAILURE` });
    }

    if (error.config.apiName === 'reduxblog') {
      dispatch({ type: `POSTS_${aim}_DATA_FAILURE` });
    }
  }
};

export const fetchPostsNew = (publicKey, aim) => async (dispatch) => {
  try {
    dispatch({ type: `POSTS_${aim}_DATA_REQUEST` });

    const postsResponse = await reduxblog.get('/posts', {
      params: { key: publicKey },
    });

    dispatch({ type: `POSTS_${aim}_DATA_SUCCESS`, payload: postsResponse.data });
  } catch (error) {
    dispatch({ type: `POSTS_${aim}_DATA_FAILURE` });
  }
};

export const initAuthNew = (aim) => async (dispatch) => {
  dispatch({ type: `POSTS_${aim}_AUTH_REQUEST` });

  try {
    const authResponse = await nodeapiserver.get('/opt/fsn78d');

    dispatch({ type: `POSTS_${aim}_AUTH_SUCCESS`, payload: authResponse.data.opt });
  } catch (error) {
    dispatch({ type: `POSTS_${aim}_AUTH_FAILURE` });
  }
};

export const createPost = (publicKey, newValues) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_ADDING_REQUEST });

    const response = await reduxblog.post(
      '/posts',
      {
        id: uuidv4(),
        title: newValues.title,
        categories: newValues.categories,
        content: newValues.content,
      },
      {
        params: { key: publicKey },
      }
    );

    dispatch({ type: POSTS_ADD_MESSAGE, message: 'The post has been added.' });
    dispatch({ type: POSTS_ADDING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_ADDING_FAILURE });
  }
};

export const removePost = (publicKey, id, title) => async (dispatch) => {
  dispatch({ type: POSTS_REMOVING_REQUEST, id, title });

  try {
    const response = await reduxblog.delete(`/posts/${id}`, {
      params: { key: publicKey },
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

export const initAuth = () => async (dispatch) => {
  dispatch({ type: POSTS_AUTH_REQUEST });

  try {
    const response = await nodeapiserver.get('/opt/fsn78d');

    dispatch({ type: POSTS_AUTH_SUCCESS, payload: response.data.opt });
  } catch (error) {
    dispatch({ type: POSTS_AUTH_FAILURE });
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
  type: POSTS_ADD_MESSAGE,
  message,
});

export const removeMessage = () => ({
  type: POSTS_REMOVE_MESSAGE,
});

export const readPostReset = () => ({
  type: POSTS_READING_RESET,
});

export const viewStateReset = () => ({
  type: 'POSTS_VIEW_STATE_RESET',
});

export const searchPosts = (query) => ({
  type: POSTS_SEARCH_REQUEST,
  query,
});

export const sortByDate = (sortType) => ({
  type: POSTS_SORT_BY_DATE,
  sortType,
});

export const listStateReset = () => ({
  type: 'POSTS_LIST_STATE_RESET',
});

export const addStateReset = () => ({
  type: 'POSTS_ADD_STATE_RESET',
});

export const resetStatus = () => ({
  type: POSTS_STATUS_RESET,
});

export const resetAddStatus = () => ({
  type: POSTS_ADDING_RESET,
});

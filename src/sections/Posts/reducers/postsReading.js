import {
  POSTS_REMOVING_SUCCESS,
  POSTS_READING_RESET,
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_REQUEST,
  POSTS_AUTH_FAILURE,
  POSTS_LIST_FAILURE,
} from '../../../types';

const defaultState = { mode: 'default' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_AUTH_REQUEST:
      return { mode: 'auth' };

    case POSTS_AUTH_SUCCESS:
      return { mode: 'allow' };

    case POSTS_AUTH_FAILURE:
      return { mode: 'deny' };

    case POSTS_LIST_REQUEST:
      return { mode: 'loading' };

    case POSTS_LIST_SUCCESS:
      return { mode: 'success' };

    case POSTS_LIST_FAILURE:
      return { mode: 'failure', status: action.status };

    case POSTS_REMOVING_SUCCESS:
      return { mode: 'deleted' };

    case POSTS_READING_RESET:
      return { mode: 'default' };

    default:
      return state;
  }
};

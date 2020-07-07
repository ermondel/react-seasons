import {
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_ADDING_FAILURE,
  POSTS_ADDING_RESET,
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
} from '../../../types';

const defaultState = { mode: 'default' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_ADDING_REQUEST:
      return {
        mode: 'saving',
        id: action.id,
        title: action.title,
      };

    case POSTS_ADDING_SUCCESS:
      return {
        mode: 'success',
        id: action.id,
        title: action.title,
        payload: action.payload,
      };

    case POSTS_ADDING_FAILURE:
      return {
        mode: 'failure',
        id: action.id,
        title: action.title,
        status: action.status,
      };

    case POSTS_ADDING_RESET:
      return { mode: 'default' };

    case POSTS_AUTH_REQUEST:
      return { mode: 'auth' };

    case POSTS_AUTH_SUCCESS:
      return { mode: 'allow' };

    case POSTS_AUTH_FAILURE:
      return { mode: 'deny' };

    default:
      return state;
  }
};

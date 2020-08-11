import {
  POSTS_REMOVE_CONFIRM,
  POSTS_REMOVE_REQUEST,
  POSTS_REMOVE_SUCCESS,
  POSTS_REMOVE_FAILURE,
  POSTS_REMOVE_DEFAULT,
} from '../../../lib/types';

const defaultState = { status: 'default', post: null };

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_REMOVE_CONFIRM:
      return { status: 'confirm', post: action.post };

    case POSTS_REMOVE_REQUEST:
      return { status: 'removing', post: action.post };

    case POSTS_REMOVE_SUCCESS:
      return { status: 'success', post: action.post };

    case POSTS_REMOVE_FAILURE:
      return { status: 'failure', post: action.post };

    case POSTS_REMOVE_DEFAULT:
      return defaultState;

    default:
      return state;
  }
};

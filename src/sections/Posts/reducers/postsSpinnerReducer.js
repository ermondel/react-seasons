import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POSTS_CREATE_REQUEST,
  POSTS_CREATE_SUCCESS,
  POSTS_CREATE_FAILURE,
} from '../../../types';

export default (state = false, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
    case POSTS_CREATE_REQUEST:
      return true;

    case POSTS_FETCH_SUCCESS:
    case POSTS_FETCH_FAILURE:
    case POSTS_CREATE_SUCCESS:
    case POSTS_CREATE_FAILURE:
      return false;

    default:
      return state;
  }
};

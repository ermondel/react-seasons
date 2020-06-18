import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
} from '../../../types';

export default (state = false, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUEST:
      return true;

    case POSTS_FETCH_SUCCESS:
    case POSTS_FETCH_FAILURE:
      return false;

    default:
      return state;
  }
};

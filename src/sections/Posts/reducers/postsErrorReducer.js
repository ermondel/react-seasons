import { POSTS_FETCH_REQUEST, POSTS_FETCH_FAILURE } from '../../../types';

export default (state = null, action) => {
  switch (action.type) {
    case POSTS_FETCH_FAILURE:
      return { status: action.status };

    case POSTS_FETCH_REQUEST:
      return null;

    default:
      return state;
  }
};

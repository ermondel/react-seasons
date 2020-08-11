import {
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_STATUS_RESET,
} from '../../../lib/types';

export default (state = 'default', action) => {
  switch (action.type) {
    case POSTS_AUTH_REQUEST:
      return 'auth';

    case POSTS_AUTH_SUCCESS:
      return 'allow';

    case POSTS_AUTH_FAILURE:
      return 'deny';

    case POSTS_LIST_REQUEST:
      return 'loading';

    case POSTS_LIST_SUCCESS:
      return 'success';

    case POSTS_LIST_FAILURE:
      return 'failure';

    case POSTS_STATUS_RESET:
      return 'default';

    default:
      return state;
  }
};

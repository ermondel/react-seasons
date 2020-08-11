import {
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_ADDING_FAILURE,
  POSTS_ADDING_RESET,
} from '../../../lib/types';

export default (state = 'default', action) => {
  switch (action.type) {
    case POSTS_ADDING_REQUEST:
      return 'saving';

    case POSTS_ADDING_SUCCESS:
      return 'success';

    case POSTS_ADDING_FAILURE:
      return 'failure';

    case POSTS_ADDING_RESET:
      return 'default';

    default:
      return state;
  }
};

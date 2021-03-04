import { POSTS_REMOVE_SUCCESS, POSTS_VIEW_DEFAULT } from '@redux/types';

export default (state = 'default', action) => {
  switch (action.type) {
    case POSTS_REMOVE_SUCCESS:
      return 'deleted';

    case POSTS_VIEW_DEFAULT:
      return 'default';

    default:
      return state;
  }
};

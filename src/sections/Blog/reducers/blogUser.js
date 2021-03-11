import { BLOG_USER_SELECTED, BLOG_USER_CLOSE } from '@redux/types';

export default (state = null, action) => {
  switch (action.type) {
    case BLOG_USER_SELECTED:
      return action.user;

    case BLOG_USER_CLOSE:
      return null;

    default:
      return state;
  }
};

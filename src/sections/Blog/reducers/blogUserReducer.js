import { BLOG_USER_SELECTED } from '../../../types';

export default (state = null, action) => {
  if (action.type === BLOG_USER_SELECTED) {
    return action.user;
  }

  return state;
};

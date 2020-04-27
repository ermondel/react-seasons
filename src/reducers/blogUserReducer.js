import { BLOG_USER_SELECTED } from '../actions/types';

export default (state = null, action) => {
  if (action.type === BLOG_USER_SELECTED) {
    return action.payload;
  }

  return state;
};

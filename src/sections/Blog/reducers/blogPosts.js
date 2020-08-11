import { BLOG_POSTS_FETCH_SUCCESS } from '../../../lib/types';

export default (state = [], action) => {
  if (action.type === BLOG_POSTS_FETCH_SUCCESS) {
    return action.payload;
  }

  return state;
};

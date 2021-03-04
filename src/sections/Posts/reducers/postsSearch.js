import { POSTS_SEARCH_REQUEST } from '@redux/types';

export default (state = '', action) => {
  if (action.type === POSTS_SEARCH_REQUEST) {
    return action.query;
  }

  return state;
};

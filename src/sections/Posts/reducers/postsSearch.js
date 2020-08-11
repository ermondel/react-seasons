import { POSTS_SEARCH_REQUEST } from '../../../lib/types';

export default (state = '', action) => {
  if (action.type === POSTS_SEARCH_REQUEST) {
    return action.query;
  }

  return state;
};

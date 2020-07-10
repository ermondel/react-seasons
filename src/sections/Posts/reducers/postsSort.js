import { POSTS_SORT_BY_DATE } from '../../../types';

export default (state = 'new', action) => {
  if (action.type === POSTS_SORT_BY_DATE) {
    return action.sortType;
  }

  return state;
};

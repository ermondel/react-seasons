import { POSTS_SORT_BY_DATE } from '@redux/types';

export default (state = 'new', action) => {
  if (action.type === POSTS_SORT_BY_DATE) {
    return action.sortType;
  }

  return state;
};

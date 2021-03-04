import { BOOKS_VIEW_CHANGED } from '@redux/types';

export default (state = 'list', action) => {
  if (action.type === BOOKS_VIEW_CHANGED) {
    return action.view;
  }

  return state;
};

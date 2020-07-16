import { BOOKS_VIEW_CHANGED } from '../../../types';

export default (state = 'list', action) => {
  if (action.type === BOOKS_VIEW_CHANGED) {
    return action.view;
  }

  return state;
};
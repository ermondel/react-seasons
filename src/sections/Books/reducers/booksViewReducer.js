import { SET_BOOKS_VIEW } from '../../../types';

export default (state = 'list', action) => {
  if (action.type === SET_BOOKS_VIEW) {
    return action.view;
  }

  return state;
};

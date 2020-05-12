import { BOOK_SEARCH } from '../types';

export default (state = '', action) => {
  if (action.type === BOOK_SEARCH) {
    return action.query;
  }

  return state;
};
